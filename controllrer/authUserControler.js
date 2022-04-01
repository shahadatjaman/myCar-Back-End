const User = require("../model/authUserModel");

module.exports = {
  register(req, res) {
    const userData = req.body;
    res.status(200).json({
      user: userData,
    });
  },
};
