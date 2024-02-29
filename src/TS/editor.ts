import { full_id, regexFullID, regexID, regexName, type } from "./type";
import { parcel_resource, parcel_structure, parcel_research, parcel_unique, unknown_parcel } from "./parcels";
import { interaction, charge } from "./properties";

import utils from "./util";

const DOM_PARCEL_LIST = document.getElementById("parcel_list") as HTMLDivElement;
const DOM_PARCEL_EDIT = document.getElementById("parcel_edit") as HTMLDivElement;

const DOM_INTERACTION_LIST = document.getElementById("parcel_interaction_list") as HTMLDivElement;
const DOM_INTERACTION_EDIT = document.getElementById("parcel_interaction_edit") as HTMLDivElement;
const DOM_INTERACTION_SET = document.getElementById("parcel_interaction_set") as HTMLDivElement;

const DOM_PARCEL_ADD_TYPE = document.getElementById("parcel_add_type") as HTMLSelectElement;
const DOM_PARCEL_ADD_ID = document.getElementById("parcel_add_id") as HTMLInputElement;
const DOM_PARCEL_ADD_BUTTON = document.getElementById("parcel_add_button") as HTMLButtonElement;

function checkParcelAddIDEmpty() {
	// If empty add .empty class
	if (DOM_PARCEL_ADD_ID.value === "") {
		DOM_PARCEL_ADD_ID.classList.add("empty");
	} else {
		DOM_PARCEL_ADD_ID.classList.remove("empty");
	}
}
DOM_PARCEL_ADD_ID.addEventListener("input", checkParcelAddIDEmpty);
checkParcelAddIDEmpty();

const PROPERTY_IDREGEX = "[a-z]([a-z_]*[a-z])?";
const PROPERTY_NAMEREGEX = "[a-zA-Z](?:[a-zA-Z ]*[a-zA-Z])?";

class editor {
	public version: string = "Parcel Editor - 6.0.0";
	public parcel: unknown_parcel;

	public stored_parcel: full_id[] = [];

	constructor(default_start: boolean = true) {
		// Init
		if (default_start) {
			this.logVersion();
			this.checkStorage();
			// this.renderList();
			this.clear();
			console.log("Editor Ready!");
			this.renderEditor();
		} else {
			console.warn("Editor started in uninitialised state.\n Did you want to do this?");
		}
		DOM_PARCEL_ADD_BUTTON.addEventListener("click", () => {
			this.new_parcel();
			this.refreshList();
		});
	}
	logVersion() {
		console.log(this.version);
	}

	save() {
		if (this.parcel.id === "") {
			console.warn("Blank ID given to save process. Not saving");
		} else if (regexID.test(this.parcel.id)) {
			localStorage.setItem(`${this.parcel.type}:${this.parcel.id}`, JSON.stringify(this.parcel));
			console.log(`Saved ${this.parcel.type}:${this.parcel.id} to localStorage`);
		} else {
			console.error(`ID '${this.parcel.id}' is invalid. Failed to save data.`);
		}
	}
	load(full_id: full_id) {
		let data: string | null;
		if ((data = localStorage.getItem(full_id))) {
			const parsed_data = JSON.parse(data);
			// Clear parcel
			this.parcel = null;
			// Assign to parcel
			this.parcel = parsed_data as unknown_parcel;
			// Set this parcels class to be of the correct class type
			switch (this.parcel.type) {
				case "resource":
					this.parcel = new parcel_resource(this.parcel.id, this.parcel.name);
					this.parcel.owned = parsed_data.owned || 0;
					this.parcel.unlocked = parsed_data.unlocked || false;
					this.parcel.interaction_buy = parsed_data.interaction_buy || [];
					this.parcel.interaction_sell = parsed_data.interaction_sell || [];
					this.parcel.interaction_craft = parsed_data.interaction_craft || [];
					this.parcel.interaction_generate = parsed_data.interaction_generate || [];
					break;
				case "structure":
					this.parcel = new parcel_structure(this.parcel.id, this.parcel.name);
					this.parcel.owned = parsed_data.owned || 0;
					this.parcel.unlocked = parsed_data.unlocked || false;
					this.parcel.interaction_buy = parsed_data.interaction_buy || [];
					this.parcel.interaction_sell = parsed_data.interaction_sell || [];
					this.parcel.interaction_craft = parsed_data.interaction_craft || [];
					this.parcel.interaction_generate = parsed_data.interaction_generate || [];
					this.parcel.interaction_requirement = parsed_data.interaction_requirement || [];
					break;
				case "research":
					this.parcel = new parcel_research(this.parcel.id, this.parcel.name);
					this.parcel.unlocked = parsed_data.unlocked || false;
					this.parcel.interaction_craft = parsed_data.interaction_craft || [];
					break;
				case "unique":
					this.parcel = new parcel_unique(this.parcel.id, this.parcel.name);
					this.parcel.unlocked = parsed_data.unlocked || false;
					break;
			}
			// If the parcel contains any interactions, assign each of them to the class interaction without overwriting
			let interaction_types = ["interaction_buy", "interaction_sell", "interaction_craft", "interaction_generate"];
			for (let i = 0; i < interaction_types.length; i++) {
				let type = interaction_types[i];
				if (this.parcel[type]) {
					for (let j = 0; j < this.parcel[type].length; j++) {
						// Convert to class
						let new_interaction = new interaction();
						// Add data
						new_interaction.result = this.parcel[type][j].result;
						new_interaction.consume = this.parcel[type][j].consume;
						new_interaction.require = this.parcel[type][j].require;
						new_interaction.unlocked = this.parcel[type][j].unlocked;
						// Assign
						this.parcel[type][j] = new_interaction;
					}
				}
			}

			console.info(`Loaded ${parsed_data.type}:${parsed_data.id}`);
		} else {
			console.error(`${full_id} does not exist. Failed to load data.`);
		}
	}
	new_parcel() {
		const new_type = DOM_PARCEL_ADD_TYPE.value as type;
		const id = DOM_PARCEL_ADD_ID.value;

		if (!regexID.test(id)) {
			console.error(`${id} is not a valid ID, unable to create`);
			return;
		}

		this.save();

		const name = utils.capitalise_all_words(utils.removeSymbols(id));

		switch (new_type) {
			case "resource":
				this.parcel = new parcel_resource(id, name);
				break;
			case "structure":
				this.parcel = new parcel_structure(id, name);
				break;
			case "research":
				this.parcel = new parcel_research(id, name);
				break;
			case "unique":
				this.parcel = new parcel_unique(id, name);
				break;
		}

		this.save();
	}
	delete(full_id: full_id) {
		if (localStorage.getItem(full_id)) {
			localStorage.removeItem(full_id);
			console.info(`Deleted ${full_id}`);
		} else {
			console.error(`${full_id} does not exist. Failed to delete data.`);
		}
		// If the current parcel is deleted, clear it
		if (full_id == `${this.parcel.type}:${this.parcel.id}`) {
			this.clear();
		}
		this.refreshList();
	}
	clear(type: type = "resource", id: string = "") {
		if (type == "resource") {
			this.parcel = new parcel_resource(id, utils.id_to_name(id));
		} else if (type == "structure") {
			this.parcel = new parcel_structure(id, utils.id_to_name(id));
		} else if (type == "research") {
			this.parcel = new parcel_research(id, utils.id_to_name(id));
		} else if (type == "unique") {
			this.parcel = new parcel_unique(id, utils.id_to_name(id));
		} else {
			console.error(`Invalid type '${type}' passed to clear()`);
		}
	}
	checkStorage() {
		this.stored_parcel = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (!regexFullID.test(localStorage.key(i) as full_id)) {
				continue;
			}
			const valid_id: full_id = localStorage.key(i) as full_id;
			this.stored_parcel.push(valid_id);
		}
		this.stored_parcel.sort((a, b) => a.localeCompare(b));
		console.table(this.stored_parcel);
	}
	refreshList() {
		this.checkStorage();
		this.renderList();
	}
	clearDOM() {
		DOM_PARCEL_LIST.innerHTML = "";
		DOM_PARCEL_EDIT.innerHTML = "";
		DOM_INTERACTION_LIST.innerHTML = "";
		DOM_INTERACTION_EDIT.innerHTML = "";
		DOM_INTERACTION_SET.innerHTML = "";
	}
	renderList() {
		this.clearDOM();
		// Render list
		if (this.stored_parcel.length === 0) {
			console.warn("No parcels found");
			return;
		}
		console.log("Rendering list of parcels");
		let lastParcelType = "";
		for (const i in this.stored_parcel) {
			if (lastParcelType != this.stored_parcel[i].split(":")[0]) {
				const h3 = document.createElement("h3");
				h3.innerHTML = utils.capitalise_first_word(this.stored_parcel[i].split(":")[0]);
				DOM_PARCEL_LIST.appendChild(h3);
				lastParcelType = this.stored_parcel[i].split(":")[0];
			}
			const button = document.createElement("button");
			button.innerHTML = this.stored_parcel[i];
			button.addEventListener("click", () => {
				this.clearDOM();
				this.load(this.stored_parcel[i]);
				this.renderEditor();
			});
			DOM_PARCEL_LIST.appendChild(button);
		}
	}
	renderEditor() {
		this.clearDOM();
		this.renderList();

		if (this.parcel === undefined) {
			console.warn("No parcel loaded. Failed to render editor.");
			return;
		}

		// Render id and name inputs with validation
		const id_input = document.createElement("input");
		id_input.type = "text";
		id_input.value = this.parcel.id;
		id_input.placeholder = "ID";
		id_input.pattern = PROPERTY_IDREGEX;
		id_input.addEventListener("change", () => {
			if (!regexID.test(id_input.value)) {
				return;
			}
			this.parcel.id = id_input.value;
		});
		DOM_PARCEL_EDIT.appendChild(id_input);

		const name_input = document.createElement("input");
		name_input.type = "text";
		name_input.value = this.parcel.name;
		name_input.placeholder = "Name";
		name_input.pattern = PROPERTY_NAMEREGEX;
		name_input.addEventListener("change", () => {
			if (!regexName.test(name_input.value)) {
				return;
			}
			this.parcel.name = name_input.value;
		});
		DOM_PARCEL_EDIT.appendChild(name_input);

		if (this.parcel.type == "resource" || this.parcel.type == "structure" || this.parcel.type == "unique") {
			// Render owned
			const owned_input = document.createElement("input");
			owned_input.type = "number";
			owned_input.value = this.parcel.owned.toString() || "0";
			owned_input.placeholder = "Owned";
			owned_input.min = "0";
			owned_input.addEventListener("change", () => {
				(this.parcel as parcel_resource | parcel_structure).owned = Number(owned_input.value);
			});
			DOM_PARCEL_EDIT.appendChild(owned_input);
		}

		// Render unlocked (boolean checkbox)
		const checkbox_wrapper = document.createElement("div");
		const unlocked_checkbox = document.createElement("input");
		const checkbox_label = document.createElement("label");
		checkbox_label.innerHTML = "Unlocked";
		unlocked_checkbox.type = "checkbox";
		unlocked_checkbox.checked = this.parcel.unlocked;
		unlocked_checkbox.addEventListener("change", () => {
			this.parcel.unlocked = Boolean(unlocked_checkbox.checked);
		});
		checkbox_wrapper.appendChild(checkbox_label);
		checkbox_wrapper.appendChild(unlocked_checkbox);
		DOM_PARCEL_EDIT.appendChild(checkbox_wrapper);

		// Render interactions if type is suitable
		// Resource has buy,sell,craft,generate
		// Structure has buy,sell,craft + charges
		// Research has craft
		// Unique has nothing
		if (this.parcel.type == "resource" || this.parcel.type == "structure") {
			// Render buy,sell buttons that trigger renderInteractionList
			const buy_button = document.createElement("button");
			buy_button.innerHTML = "Buy";
			if (this.parcel.interaction_buy && this.parcel.interaction_buy.length > 0) {
				buy_button.innerHTML += ` (${this.parcel.interaction_buy.length})`;
			}
			buy_button.addEventListener("click", () => {
				this.renderInteractionList("interaction_buy");
			});
			const sell_button = document.createElement("button");
			sell_button.innerHTML = "Sell";
			if (this.parcel.interaction_sell && this.parcel.interaction_sell.length > 0) {
				sell_button.innerHTML += ` (${this.parcel.interaction_sell.length})`;
			}
			sell_button.addEventListener("click", () => {
				this.renderInteractionList("interaction_sell");
			});
			DOM_PARCEL_EDIT.appendChild(buy_button);
			DOM_PARCEL_EDIT.appendChild(sell_button);
		}
		if (this.parcel.type == "resource" || this.parcel.type == "structure" || this.parcel.type == "research") {
			// Render craft buttons that trigger renderInteractionList
			const craft_button = document.createElement("button");
			craft_button.innerHTML = "Craft";
			if (this.parcel.interaction_craft && this.parcel.interaction_craft.length > 0) {
				craft_button.innerHTML += ` (${this.parcel.interaction_craft.length})`;
			}
			craft_button.addEventListener("click", () => {
				this.renderInteractionList("interaction_craft");
			});
			DOM_PARCEL_EDIT.appendChild(craft_button);
		}
		if (this.parcel.type == "resource") {
			// Render generate buttons that trigger renderInteractionList
			const generate_button = document.createElement("button");
			generate_button.innerHTML = "Generate";
			if (this.parcel.interaction_generate && this.parcel.interaction_generate.length > 0) {
				generate_button.innerHTML += ` (${this.parcel.interaction_generate.length})`;
			}
			generate_button.addEventListener("click", () => {
				this.renderInteractionList("interaction_generate");
			});
			DOM_PARCEL_EDIT.appendChild(generate_button);
		}
		if (this.parcel.type == "structure") {
			// Render buttons for charges list
			const charge_button = document.createElement("button");
			charge_button.innerHTML = "Charges";
			if (this.parcel.interaction_requirement && this.parcel.interaction_requirement.length > 0) {
				charge_button.innerHTML += ` (${this.parcel.interaction_requirement.length})`;
			}
			charge_button.addEventListener("click", () => {
				this.renderChargeList();
			});
			DOM_PARCEL_EDIT.appendChild(charge_button);
		}
		// Render save button
		const save_button = document.createElement("button");
		save_button.innerHTML = "Save";
		save_button.addEventListener("click", () => {
			this.save();
		});
		DOM_PARCEL_EDIT.appendChild(save_button);

		// Render delete button
		// Warn if delete button is clicked before triggering delete
		const delete_button = document.createElement("button");
		delete_button.innerHTML = "Delete";
		delete_button.addEventListener("click", () => {
			if (!confirm("Are you sure you want to delete this parcel?\nThis action cannot be undone.")) {
				return;
			}
			console.log("Deleting " + this.parcel.id);
			this.delete(`${this.parcel.type}:${this.parcel.id}`);
		});
		DOM_PARCEL_EDIT.appendChild(delete_button);
	}

	renderInteractionList(interaction_type: interaction_types) {
		this.renderEditor();

		// List of interactions, used for interaction_buy, interaction_sell, interaction_craft, interaction_generate
		console.log("Rendering list of interactions for " + interaction_type);
		// Interaction name is buy,sell,craft,generate starting with a capital letter and without interaction_
		const interaction_name = utils.capitalise_first_word(interaction_type.replace("interaction_", ""));
		DOM_INTERACTION_LIST.innerHTML = `<h2>${interaction_name} Interactions</h2>`;
		// Render interaction buttons that trigger renderInteraction
		if (this.parcel[interaction_type]) {
			for (const i in this.parcel[interaction_type]) {
				const button = document.createElement("button");
				button.innerHTML = i;
				button.classList.add(utils.validity_check(this.parcel[interaction_type][i].validate()));

				button.addEventListener("click", () => {
					this.renderInteraction(interaction_type, parseInt(i));
				});
				DOM_INTERACTION_LIST.appendChild(button);
			}
		}
		// Button to add new interaction
		const button = document.createElement("button");
		button.innerHTML = "Add new " + interaction_name;
		button.addEventListener("click", () => {
			let newInteraction = new interaction();
			newInteraction.result = [[`${this.parcel.type}:${this.parcel.id}`, 1]];
			this.parcel[interaction_type].push(newInteraction);
			this.renderInteractionList(interaction_type);
		});
		DOM_INTERACTION_LIST.appendChild(button);
	}
	renderChargeList() {
		this.renderEditor();

		// List of charges
		console.log("Rendering list of charges");
		// Render charge buttons that trigger renderCharge
		// Button to add new charge

		DOM_INTERACTION_LIST.innerHTML = `<h2>Charges</h2>`;
		if ((this.parcel as parcel_structure).interaction_requirement != undefined) {
			for (const i in (this.parcel as parcel_structure).interaction_requirement) {
				const button = document.createElement("button");
				button.innerHTML = String((this.parcel as parcel_structure).interaction_requirement[i]);
				button.addEventListener("click", () => {
					this.renderCharge(parseInt(i));
				});
				DOM_INTERACTION_LIST.appendChild(button);
			}

			// Button to add new charge
			const button = document.createElement("button");
			button.innerHTML = "Add new charge";
			button.addEventListener("click", () => {
				(this.parcel as parcel_structure).interaction_requirement.push(new charge());
				this.renderChargeList();
			});
			DOM_INTERACTION_LIST.appendChild(button);
		}

		// List of charges used for interaction_require
		console.log("Rendering list of charges");
	}
	renderInteraction(interaction_type: interaction_types, interaction_id: number) {
		this.renderInteractionList(interaction_type);
		// Render interaction
		console.log("Rendering interaction");

		DOM_INTERACTION_EDIT.innerHTML = "<h2>" + utils.capitalise_first_word(interaction_type) + ": " + interaction_id + "</h2>";

		const checkbox_wrapper = document.createElement("div");
		const checkbox_label = document.createElement("label");
		checkbox_label.innerHTML = "Unlocked";
		checkbox_wrapper.appendChild(checkbox_label);
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = this.parcel[interaction_type][interaction_id].unlocked;
		checkbox.addEventListener("change", () => {
			this.parcel[interaction_type][interaction_id].unlocked = checkbox.checked;
		});
		checkbox_wrapper.appendChild(checkbox);
		DOM_INTERACTION_EDIT.appendChild(checkbox_wrapper);
		// Render result / require / consume as buttons to renderSet

		const result_button = document.createElement("button");
		result_button.innerHTML = "Result (" + (this.parcel[interaction_type][interaction_id] as interaction).result.length + ")";
		result_button.addEventListener("click", () => {
			this.renderSet(interaction_type, interaction_id, "result");
		});

		result_button.classList.add(
			utils.validity_check(
				(this.parcel[interaction_type][interaction_id] as interaction).validateProperty("result", this.stored_parcel)
			)
		);
		DOM_INTERACTION_EDIT.appendChild(result_button);
		const require_button = document.createElement("button");
		require_button.innerHTML = "Require (" + (this.parcel[interaction_type][interaction_id] as interaction).require.length + ")";
		require_button.addEventListener("click", () => {
			this.renderSet(interaction_type, interaction_id, "require");
		});

		require_button.classList.add(
			utils.validity_check(
				(this.parcel[interaction_type][interaction_id] as interaction).validateProperty("require", this.stored_parcel)
			)
		);
		DOM_INTERACTION_EDIT.appendChild(require_button);
		const consume_button = document.createElement("button");
		consume_button.innerHTML = "Consume (" + (this.parcel[interaction_type][interaction_id] as interaction).consume.length + ")";
		consume_button.addEventListener("click", () => {
			this.renderSet(interaction_type, interaction_id, "consume");
		});

		consume_button.classList.add(
			utils.validity_check(
				(this.parcel[interaction_type][interaction_id] as interaction).validateProperty("consume", this.stored_parcel)
			)
		);

		DOM_INTERACTION_EDIT.appendChild(consume_button);
	}
	renderCharge(charge_id: number) {
		this.renderChargeList();
		// Render charge
		console.log("Rendering charge");
	}
	renderSet(interaction_type: interaction_types, interaction_id: number, set_type: "result" | "require" | "consume") {
		this.renderInteraction(interaction_type, interaction_id);
		// Render set
		// for each item (a [parcel id, quantity pair]) render a wrapped select with options for each parcel in this.stored_parcel as well as a number input
		// set the option to the parcel id
		// set the number input to the quantity

		// generate select (for use in multiple of the set)
		const select = document.createElement("select") as HTMLSelectElement;
		for (const i in this.stored_parcel) {
			const option = document.createElement("option") as HTMLOptionElement;
			option.value = this.stored_parcel[i];
			option.text = this.stored_parcel[i];
			select.appendChild(option);
		}
		const firstOption = this.stored_parcel[0];
		console.log(firstOption);

		DOM_INTERACTION_SET.innerHTML = "<h2>" + utils.capitalise_first_word(set_type) + "</h2>";

		// render sets
		for (const i in this.parcel[interaction_type][interaction_id][set_type]) {
			const wrapper = document.createElement("div");

			// Add select
			const new_select = select.cloneNode(true) as HTMLSelectElement;
			new_select.value = this.parcel[interaction_type][interaction_id][set_type][i][0] || firstOption;
			new_select.addEventListener("change", () => {
				this.parcel[interaction_type][interaction_id][set_type][i][0] = new_select.value || firstOption;
				this.renderSet(interaction_type, interaction_id, set_type);
			});
			wrapper.appendChild(new_select);

			// Add number input
			const number_input = document.createElement("input");
			number_input.type = "number";
			number_input.min = "1";
			number_input.value = String(this.parcel[interaction_type][interaction_id][set_type][i][1]) || "1";
			number_input.addEventListener("change", () => {
				this.parcel[interaction_type][interaction_id][set_type][i][1] = parseInt(number_input.value) || 1;
				this.renderSet(interaction_type, interaction_id, set_type);
			});
			wrapper.appendChild(number_input);

			// Add delete button
			const delete_button = document.createElement("button");
			delete_button.innerHTML = "X";
			delete_button.addEventListener("click", () => {
				this.parcel[interaction_type][interaction_id][set_type].splice(i, 1);
				this.renderSet(interaction_type, interaction_id, set_type);
			});
			wrapper.appendChild(delete_button);

			DOM_INTERACTION_SET.appendChild(wrapper);
		}

		// button to create new sets
		const newSetButton = document.createElement("button");
		newSetButton.innerHTML = "Add Set";
		newSetButton.addEventListener("click", () => {
			this.parcel[interaction_type][interaction_id][set_type].push([firstOption, 1]);
			this.renderSet(interaction_type, interaction_id, set_type);
		});
		DOM_INTERACTION_SET.appendChild(newSetButton);
	}
}

type interaction_types = "interaction_buy" | "interaction_sell" | "interaction_craft" | "interaction_generate";

// const editor = new editor_instance();

export { editor };
