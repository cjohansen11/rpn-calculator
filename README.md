# CLI Reverse Polish Notation (RPN) Calculator

## Description

This is an implementation of a [Reverse Polish Notation (RPN)](https://en.wikipedia.org/wiki/Reverse_Polish_notation) calculator written in Typescript and compiled in Node.js.

## Tech

- Typescript
- Node.js

## Run Locally

Clone the project

```bash
  git clone https://github.com/cjohansen11/rpn-calculator.git
```

Go to the project directory

```bash
  cd rpn-calculator
```

Install dependencies

```bash
  npm install
```

Run Tests

```bash
  npm run test
```

Start the application

```bash
  npm run start
```

alternatively

```bash
  npm run build-exe
```

then open the corresponding executable file based on your current systems OS

## Dev Notes

I opted to create this application in Node.js because of my familiarity with the language. Typescript was added to aid in type safety to avoid any unexpected errors. This allowed me to handle errors in a more precise way.

The applications functionality was designed with test driven development in mind. Having been provided with sample examples and adding additional basic operations I was able to build the core calculator functions off of the tests that were written first.

The core logic was designed to be expandable with additional operators if myself or future devs wanted to add more functionality.

In abstracting the calculator logic I hope that this application's core functionality could be repurposed to be integrated into other applications or interfaces that could interact with it.

If I were to continue development on this application I would have liked to explore additional edge cases to verify it's functionality even further. I would also like to have explored additional options for error handling within those edge cases.
