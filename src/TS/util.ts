import { validation_report, validation_result } from "./type";

function id_to_name(id: string) {
	let name = id.replaceAll("_", " ");
	name = capitalise_all_words(name);
	return name;
}
function capitalise_all_words(source: string): string {
	return source.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
	});
}
function capitalise_first_word(source: string): string {
	return source.charAt(0).toUpperCase() + source.slice(1);
}
function removeSymbols(source: string): string {
	// Replace underscores _ and dashes with spaces
	// replace all other characters with blank
	return source.replaceAll("_", " ").replaceAll("-", " ").replaceAll(/[^a-zA-Z0-9\s]/g, "");
	
}

function validity_check(reports: validation_report[]): validation_result {
	let state: validation_result = "valid";
	for (const i in reports) {
		const report_state = reports[i][0];
		if (report_state == "valid") {
			continue;
		} else if (report_state == "invalid") {
			state = "invalid";
		} else if (report_state == "warning") {
			return "warning";
		}
	}
	return state;
}

export default { id_to_name, capitalise_all_words, capitalise_first_word, validity_check, removeSymbols };
