const registerValidator = require("../validations/authVendorValidator");

const bcrypt = require("bcryptjs");

const User = require("../model/VendorModel");

module.exports = {
  register(req, res) {
    const { username, firstname, lastname, email, password } = req.body;

    const validator = registerValidator({
      username,
      firstname,
      lastname,
      email,
      password,
    });

    if (!validator.isValid) {
      return res.status(404).json(validator.error);
    } else {
      bcrypt.hash(password, 6, (error, hash) => {
        const newdata = new User({
          username,
          firstname,
          lastname,
          email,
          password: hash,
          published: 0,
          pendinglistings: 0,
          activepromotions: 0,
          visitor: 0,
          pendingaproval: 0,
          pendingpayment: 0,
          expired: 0,
        });

        newdata
          .save()
          .then(() => {
            res.status(200).json({
              message: "Register success!",
            });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({
              message: "Server Error Occurred!",
            });
          });
      });
    }
  },
};
