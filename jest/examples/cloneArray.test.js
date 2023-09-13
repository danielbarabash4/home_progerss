const cloneFunc = require("./cloneArray");

test("copy two arrays", () => {
  const array = [1, 2, 3, 4, 5];
  //will not work because the array has a new memory address
  //expect(cloneFunc.cloneArray(array)).toBe(array);
  expect(cloneFunc.cloneArray(array)).toEqual(array);
});
