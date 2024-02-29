// ? Resource, Structure, Research, or Unique
export type type = "resource" | "structure" | "research" | "unique";
// ? Full ID includes type followed by ID
export type full_id = `${type}:${string}`;
// ? [full id of parcel, quantity of aforementioned parcel]

export type quantity = [full_id, number];
// ? Valid --> There are no issues
// ? Invalid --> There are issues that must be resolved
// ? Warning --> There are possible issues but they can be resolved later
export type validation_result = "valid" | "invalid" | "warning";
// ? [result, message to display]
export type validation_report = [validation_result, string];

// ? Regex for ID and Name
// ? regexID --> Contains only lowercase letters and underscores, cannot start or end with an underscore
export const regexID = new RegExp("^[a-z]([a-z_]*[a-z])?$");
// ? regexName --> Contains only letters and spaces, cannot start or end with a space
export const regexName = new RegExp("^[a-zA-Z](?:[a-zA-Z ]*[a-zA-Z])?$");
// ? regexFullID --> starts with a valid type, then a colon : then a valid regexID
export const regexFullID = new RegExp(`^(resource|structure|research|unique)\:(([a-z]([a-z_]*[a-z])?))$`);