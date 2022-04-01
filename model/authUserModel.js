const mongoose = require("mongoose");

const authRegister = new mongoose.Schema({
  username: {
    type: String,
    trime: true,
    required: true,
  },
  firstname: {
    type: String,
    trime: true,
    required: true,
  },
  lastname: {
    type: String,
    trime: true,
    required: true,
    email: {
      type: String,
      trime: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    published: Number,
    pendinglistings: Number,
    activepromotions: Number,
    visitor: Number,
    pendingaproval: Number,
    pendingpayment: Number,
    expired: Number,
  },
});

const User = mongoose.model("User", authRegister);
module.exports = User;
