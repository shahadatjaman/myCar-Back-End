const mongoose = require("mongoose");

const authRegister = new mongoose.Schema({
  username: {
    type: String,
    trime: true,
    required: true,
  },
  email: {
    type: String,
    trime: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("Customer", authRegister);
module.exports = User;
