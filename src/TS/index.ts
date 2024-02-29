import { interaction } from "./properties";
import { editor as editor_instance } from "./editor";
import { parcel_resource, parcel_unique } from "./parcels";

// Start editor and attach to the dev console
const editor = new editor_instance();
globalThis.editor = editor;

function addExampleResources() {
	let quintessence = new parcel_unique("quintessence", "Quintessence");
	quintessence.owned = 1000;
	quintessence.unlocked = true;

	let ironOre = new parcel_resource("ore_iron", "Iron Ore");
	let ironOreInteraction = new interaction();
	ironOreInteraction.result[0] = ["unique:quintessence", 30];
	ironOreInteraction.consume[0] = ["resource:ore_iron", 1];
	ironOre.interaction_sell[0] = ironOreInteraction;

	editor.parcel = quintessence;
	editor.save();
	editor.parcel = ironOre;
	editor.save();

	editor.checkStorage();
	editor.renderList();
}

editor.checkStorage();
editor.renderList();

if (editor.stored_parcel.length === 0) {
	console.info("Loading in example parcels!");
	addExampleResources();
}

console.table(editor.parcel);
