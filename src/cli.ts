import readline from "readline";
import { stdin } from "node:process";
import { handleInput } from "./utils";
import store from "./store/store";
import chalk from "chalk";

// Print one empty line
const spacer = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Event listener to quit program on 'q'
stdin.on("keypress", (key) => {
  if (key === "q") {
    handleQuit();
  }
});

/**
 * Handles closing of the application
 */
function handleQuit() {
  // Clears line for appearance
  readline.cursorTo(process.stdout, 0);
  readline.clearLine(process.stdout, 0);
  // Closes readline interface and closes shell
  rl.close();
  process.exit();
}

/**
 * Starts up calculator application
 */
function useCalculator() {
  spacer();
  console.log(
    chalk.bgYellowBright("Enter 'm' or 'menu' to return to the menu")
  );
  console.log(
    chalk.bgYellowBright("Enter 'c' or 'clear' to reset the calculator")
  );
  spacer();

  rl.setPrompt(chalk.blueBright("> "));
  rl.prompt();

  rl.on("line", handlePrompt);

  function handlePrompt(line: string) {
    const input = line.trim();

    if (input === "m" || input === "menu") {
      displayMenu();
      return;
    }

    if (input === "c" || input === "clear") {
      store.stack = [];
      store.previousResult = null;
      console.log(chalk.yellowBright("Cleared calculator data"));
      spacer();
      rl.prompt();
      return;
    }

    try {
      handleInput(input, () => rl.prompt());
    } catch (error) {
      console.log(
        chalk.redBright(`Oops an error occurred, please try again: ${error}`)
      );
      spacer();
      rl.prompt();
    }
  }
}

// ***** DISPLAY MENU ***** //
const menuOptions = {
  "0": handleQuit,
  "1": useCalculator,
};

function displayMenu() {
  spacer();
  console.log(chalk.bgCyanBright("=== Menu ==="));
  console.log("0. Quit Program");
  console.log("1. RPN Calculator");
  spacer();
  console.log(
    chalk.bgYellowBright("Press 'q' to exit the application at point")
  );
  spacer();

  rl.question("Enter your choice: ", (choice) => {
    const selectedOption = menuOptions[choice];

    if (selectedOption) {
      selectedOption();
      return;
    } else {
      console.log(chalk.redBright("Invalid choice"));
    }

    spacer();

    displayMenu();
  });
}

displayMenu();
