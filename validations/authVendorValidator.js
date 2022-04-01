const validator = require("validator");

const registerValidator = (user) => {
  const error = {};

  if (!user.username) {
    error.username = "Must provide your username!";
  } else if (user.username.indexOf(" ") >= 0) {
    error.username = "Dont use any space or sign!";
  }

  if (!user.firstname) {
    error.firstname = "Must provide your Firstname!";
  }

  if (!user.lastname) {
    error.lastname = "Must provide your Lastname!";
  }

  if (!user.email) {
    error.email = "Must provide your Email!";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Provide a valid Email";
  }

  if (!user.password) {
    error.password = "Must provide your Email!";
  } else if (user.password.length < 5) {
    error.password = "Password Must be 6 char";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

module.exports = registerValidator;
