const primes = require("..").primes;

test("calculate primes correctly", () => {
  expect(primes(5)).toStrictEqual([2, 3, 5]);
});

test("argument error", () => {
  expect(() => {
    primes("1");
  }).toThrowError("Invalid Argument");
});
