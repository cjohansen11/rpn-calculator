import store from "./store/store";
import chalk from "chalk";

export const performOperation = (operator: string, isSingleLine?: boolean) => {
  if (store.stack.length < 2) {
    throw new Error(
      "There are not enough operands with your current operation"
    );
  }

  const operand2 = store.stack.pop();
  const operand1 = store.stack.pop();

  if ((operand1 !== 0 && !operand1) || (operand2 !== 0 && !operand2)) {
    return;
  }

  let result: number | undefined;
  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    default:
      throw new Error(`Unsupported operator: "${operator}"`);
  }

  store.stack.push(result);
  store.previousResult = result;

  if (isSingleLine) {
    return result;
  } else {
    console.log(chalk.bgGreen(result));
    return;
  }
};
