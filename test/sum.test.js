const sum = require("..").sum;

describe("error handling", () => {
  test("no arguments", () => {
    expect(() => {
      sum();
    }).toThrowError("Invalid Argument");
  });

  test("no arguments", () => {
    expect(() => {
      sum("!", 2);
    }).toThrowError("Invalid Argument");
  });

  test("second argument is missing", () => {
    expect(() => {
      sum(1);
    }).toThrowError("Invalid Argument");
  });
});

describe("valid", () => {
  test("integers", () => {
    expect(sum(1, 4)).toBe(5);

    expect(sum(-1, 3)).toBe(2);
  });

  test("floating point numbers", () => {
    expect(sum(1.42, 4)).toBe(5.42);
  });
});
