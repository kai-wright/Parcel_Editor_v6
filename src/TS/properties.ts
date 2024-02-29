import { full_id, quantity, validation_report } from "./type";

// =? Interactions
// Interactions are the requirements for possible actions on the parcel.
// This entails the requirements to buy, sell, create and craft an existence of a parcel
export class interaction {
	public unlocked: boolean = false;
	public result: quantity[] = [];
	public require: quantity[] = [];
	public consume: quantity[] = [];

	validate(): validation_report[] {
		let report: validation_report[] = [];

		if (this.result.length === 0) {
			report.push(["warning", "Interaction is missing a result."]);
		}
		if (this.require.length === 0 && this.consume.length === 0) {
			report.push(["warning", "Interaction is missing a requirement or consumption."]);
		}

		return report;
	}
	validateProperty(property: "result" | "require" | "consume", validIds: full_id[]): validation_report[] {
		let report: validation_report[] = [];

		if (property == "result") {
			if (this.result.length === 0) {
				report.push(["warning", "Interaction is missing a result."]);
			}
		} else {
			if (this.require.length === 0 && this.consume.length === 0) {
				report.push(["warning", "Interaction is missing a requirement or consumption."]);
			}
		}

		report = [...report, ...this.validateSubproperties(validIds)];

		// console.table(report);

		return report;
	}
	private validateSubproperties(validIds: full_id[]): validation_report[] {
		let report: validation_report[] = [];
		let properties = ["result", "require", "consume"];
		for (const property of properties) {
			// if any of the ids are not valid, report an error
			for (const i in this[property]) {
				if (!validIds.includes(this[property][i][0])) {
					report.push(["warning", "Invalid " + property + " ID: " + this[property][i][0]]);
				}
			}
			// if any of the ids are 0 give invalid, if less than 0 give warning
			for (const i in this[property]) {
				if (this[property][i][1] <= 0) {
					report.push(["invalid", "Invalid " + property + " quantity: " + this[property][i][1]]);
				} else if (this[property][i][1] < 0) {
					report.push(["warning", "Invalid " + property + " quantity: " + this[property][i][1]]);
				}
			}
		}

		return report;
	}
}

// =? Charges
// Charges are a property of structures
// When an interaction is applied, if a structure is needed then that structure will begin working on the interaction
// the total charge defines the speed at which
export class charge {
	public unlocked: boolean = false;
	public count: number = 0;
	public effect_add: number = 0;
	public effect_multiply: number = 0;
	public require: quantity[] = [];
	public consume: quantity[] = [];
}
