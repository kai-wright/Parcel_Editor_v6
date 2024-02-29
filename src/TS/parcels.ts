import { interaction, charge } from "./properties";
import { type, validation_report, regexID, regexName } from "./type";

export type unknown_parcel = parcel_resource | parcel_structure | parcel_research | parcel_unique;
type interaction_name = "interaction_buy" | "interaction_sell" | "interaction_craft" | "interaction_generate";

// ? The base abstract parcel class
// save() loads all properties into localStorage
// load(full id) tries to load the provided id into itself
// validate_parcel() checks that all properties of the abstract parcel class are valid
abstract class parcel {
	public unlocked: boolean = false;
	constructor(public id: string, public type: type, public name: string) {}
	validate_parcel(): validation_report[] {
		let report: validation_report[] = [];
		if (!regexID.test(this.id)) {
			report.push(["invalid", "ID is invalid."]);
		}
		if (!regexName.test(this.name)) {
			report.push(["warning", "Name is invalid."]);
		}

		report = [...report, ...this.validate_self()];

		for (const i in this.interactions) {
			report = [...report, ...this.validate_interaction[this.interactions[i]]];
		}

		return report;
	}
	abstract validate_self(): validation_report[];
	public interactions: interaction_name[] = [];
	validate_interaction(target: interaction_name): validation_report[] {
		let report: validation_report[] = [];

		console.log(target);

		for (const i in this[target]) {
			const result = (this[target][i] as interaction).validate();
			report = [...report, ...result];
		}

		return report;
	}
}

// ? Parcel variant for resources
// resources are always of type resource
// owned is the amount of the resource in the players possession
// interactions are methods to aquire the resource
export class parcel_resource extends parcel {
	public type: "resource" = "resource";
	public owned: number = 0;
	public interactions: interaction_name[] = ["interaction_buy", "interaction_sell", "interaction_craft", "interaction_generate"];

	public interaction_buy: interaction[] = [];
	public interaction_sell: interaction[] = [];
	public interaction_craft: interaction[] = [];
	public interaction_generate: interaction[] = [];

	constructor(public id: string, public name: string) {
		super(id, "resource", name);
	}
	validate_self(): validation_report[] {
		let report: validation_report[] = [];
		report.push(validate_not_negative(this.owned, "Owned"));

		if (this.interaction_buy.length === 0 && this.interaction_craft.length === 0 && this.interaction_generate.length === 0) {
			report.push(["warning", "Interaction is missing a aquisition interaction."]);
		}

		for (let i = 0; i < this.interaction_buy.length; i++) {
			report = [...report, ...this.interaction_buy[i].validate()];
		}
		for (let i = 0; i < this.interaction_sell.length; i++) {
			report = [...report, ...this.interaction_sell[i].validate()];
		}
		for (let i = 0; i < this.interaction_craft.length; i++) {
			report = [...report, ...this.interaction_craft[i].validate()];
		}
		for (let i = 0; i < this.interaction_generate.length; i++) {
			report = [...report, ...this.interaction_generate[i].validate()];
		}

		return report;
	}
}
export class parcel_structure extends parcel {
	public type: "structure" = "structure";
	public owned: number = 0;
	public interactions: interaction_name[] = ["interaction_buy", "interaction_sell", "interaction_craft", "interaction_generate"];

	public interaction_buy: interaction[] = [];
	public interaction_sell: interaction[] = [];
	public interaction_craft: interaction[] = [];
	public interaction_generate: interaction[] = [];
	public interaction_requirement: charge[];

	constructor(public id: string, public name: string) {
		super(id, "structure", name);
	}
	validate_self(): validation_report[] {
		let report: validation_report[] = [];
		report.push(validate_not_negative(this.owned, "Owned"));

		return report;
	}
}

export class parcel_research extends parcel {
	public type: "research" = "research";
	public interactions: interaction_name[] = ["interaction_craft"];

	public interaction_craft: interaction[] = [];
	constructor(public id: string, public name: string) {
		super(id, "research", name);
	}

	validate_self(): validation_report[] {
		if (this.interaction_craft.length === 0) {
			return [["warning", "Interaction is missing a craft interaction."]];
		}
		return [];
	}
}

export class parcel_unique extends parcel {
	public type: "unique" = "unique";
	public owned: number = 0;

	constructor(public id: string, public name: string) {
		super(id, "unique", name);
	}

	validate_self(): validation_report[] {
		return [];
	}
}

function validate_not_negative(property: number, property_name: string): validation_report {
	if (property < 0) {
		return ["invalid", `${property_name} is negative or undefined.`];
	}
	return ["valid", `${property_name} is equal to or greater than zero.`];
}
