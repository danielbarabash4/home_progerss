const loginFunc = require("./login");

test("login test",() => {
  expect(loginFunc.checkLogin("admin", "12345")).toBe(true);
});
