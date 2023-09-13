const checkLogin = (user, pass) => {
  return (user === "admin" && pass === "12345");
};

module.exports = {checkLogin};