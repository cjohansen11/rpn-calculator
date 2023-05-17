import assert from "assert";
import { handleInput } from "../src/utils";
import store from "../src/store/store";

describe("RPN Calculator - Basic Operations", () => {
  describe("Addition", () => {
    it("should correctly add two numbers", () => {
      handleInput("5 2 +", () => {
        assert.strictEqual(store.previousResult, 7);
      });
    });
    it("should correctly add two numbers where one is 0", () => {
      handleInput("2 0 +", () => {
        assert.strictEqual(store.previousResult, 2);
      });
    });
  });

  describe("Subtraction", () => {
    it("should correctly subtract two numbers", () => {
      handleInput("5 2 -", () => {
        assert.strictEqual(store.previousResult, 3);
      });
    });
    it("should correctly subtract two numbers where one is 0", () => {
      handleInput("0 4 -", () => {
        assert.strictEqual(store.previousResult, -4);
      });
    });
  });

  describe("Multiplication", () => {
    it("should correctly multiply two numbers", () => {
      handleInput("5 2 *", () => {
        assert.strictEqual(store.previousResult, 10);
      });
    });
    it("should correctly multiply two numbers when one is 0", () => {
      handleInput("3 0 *", () => {
        assert.strictEqual(store.previousResult, 0);
      });
    });
  });

  describe("Division", () => {
    it("should correctly divide two numbers", () => {
      handleInput("10 2 /", () => {
        assert.strictEqual(store.previousResult, 5);
      });
    });
    it("should correctly divide a whole number by 0", () => {
      handleInput("8 0 /", () => {
        assert.strictEqual(store.previousResult, Infinity);
      });
    });
    it("should correctly divide0 by a whole number", () => {
      handleInput("0 11 /", () => {
        assert.strictEqual(store.previousResult, 0);
      });
    });
  });
});

describe("RPN Calculator - Exercise Examples", () => {
  it("should correctly handle multiline inputs", () => {
    handleInput("5", () => {});
    handleInput("8", () => {});
    handleInput("+", () => {
      assert.strictEqual(store.previousResult, 13);
    });
  });

  it("should correctly handle mixed input types", () => {
    handleInput("5 5 5 8 + + -", () => {});
    handleInput("13 +", () => {
      assert.strictEqual(store.previousResult, 0);
    });
  });

  it("should correctly handle negative and position input values", () => {
    handleInput("-3", () => {});
    handleInput("-2", () => {});
    handleInput("*", () => {});
    handleInput("5", () => {});
    handleInput("+", () => {
      assert.strictEqual(store.previousResult, 11);
    });
  });

  it("should correctly handle mixed operators over single line inputs", () => {
    handleInput("5", () => {});
    handleInput("9", () => {});
    handleInput("1", () => {});
    handleInput("-", () => {});
    handleInput("/", () => {
      assert.strictEqual(store.previousResult, 0.625);
    });
  });
});
