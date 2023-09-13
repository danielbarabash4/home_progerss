const mathFunc = require("./sum");


test("testing sum function adding two numbers", () => {
  expect(mathFunc.sum(1, 2)).toBe(3);
});

test("testing multiply function multiplying two numbers", () => {
  expect(mathFunc.multiply(1, 2)).toBe(2);
});

test("testing divide function dividing two numbers", () => {
  expect(mathFunc.divide(2, 2)).toBe(1);
});
