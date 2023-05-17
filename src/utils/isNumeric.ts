/**
 *
 * @param input Accepts a string or undefined
 * @returns A boolean indicating whether or not the provided input is a number
 */
export const isNumeric = (input?: string) => {
  let parsedInput: number | undefined = undefined;
  let inputIsFinite = false;

  if (typeof input === "string") {
    parsedInput = parseFloat(input);
  }

  if (typeof parsedInput === "number") {
    inputIsFinite = isFinite(parsedInput);
  }

  if (typeof parsedInput === "number") {
    return !isNaN(parsedInput) && inputIsFinite;
  }

  return false;
};
