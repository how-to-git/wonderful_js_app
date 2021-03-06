function sum(a, b) {
  if ((typeof a != "number" && typeof a != "string") || (typeof b != "number" && typeof b != "string")) {
    throw new Error("Invalid Argument");
  }

  a = Number(a);
  b = Number(b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Invalid Argument");
  }

  return a + b;
}

module.exports = sum;
