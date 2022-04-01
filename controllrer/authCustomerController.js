const customerValidator = require("../validations/authCustomerRouter");

const bcrypt = require("bcryptjs");

const User = require("../model/CustomerModel");

module.exports = {
  register(req, res) {
    const { username, email, password } = req.body;

    const validator = customerValidator({
      username,
      email,
      password,
    });

    if (!validator.isValid) {
      return res.status(404).json(validator.error);
    } else {
      bcrypt.hash(password, 8, (err, hash) => {
        const newdata = new User({
          username,
          email,
          password: hash,
        });
        newdata
          .save()
          .then(() => {
            res.status(200).json({
              message: "Register success!",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Server Error Occurred!",
            });
          });
      });
    }
  },
};
