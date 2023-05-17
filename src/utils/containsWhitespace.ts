/**
 *
 * @param input A string to determine if the provided input is likely to be multiline or single line based on white space on string
 * @returns Return a boolean indicating that the input has whitespace
 */
export const containsWhitespace = (input: string) => /\s/.test(input);
