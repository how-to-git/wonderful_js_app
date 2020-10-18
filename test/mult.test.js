const mult = require("../src/mult");

describe("valid", () => {
  test("integers", () => {
    expect(mult(1, 4)).toBe(4);
});
