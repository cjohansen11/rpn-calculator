import { containsWhitespace, isNumeric } from ".";
import store from "../store/store";
import { performOperation } from "../calculatorCore";

/**
 *
 * @param input A string provided by the end user through whichever interface they are interacting with the application with
 * @param callback Any function that may need to process any information coming from the interface
 */
export const handleInput = (input: string, callback: () => void) => {
  if (containsWhitespace(input)) {
    handleSingleLineInput(input);
    callback();
  } else {
    handleMultipleLineInput(input);
    callback();
  }
};

/**
 * Handles end user input when the input is more than a single character
 *
 * @param expression A string representing multiple options entered by the end user
 */
function handleSingleLineInput(expression: string) {
  let result: number | undefined = undefined;
  const tokens = expression.split(" ");

  for (const token of tokens) {
    if (isNumeric(token)) {
      const value = parseFloat(token);
      store.stack.push(value);
      store.previousResult = value;
    } else {
      result = performOperation(token);
    }
  }

  console.log(result);
}

/**
 * Handles individual inputs from the end user
 *
 * @param input An individual character entered by the end user
 */
function handleMultipleLineInput(input: string) {
  const lines = input.split("\n");

  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }

    if (isNumeric(line)) {
      const value = parseFloat(line);
      store.stack.push(value);
      store.previousResult = value;
      console.log(value);
    } else {
      performOperation(line.trim());
    }
  }
}
