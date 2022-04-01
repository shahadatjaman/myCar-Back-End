const router = require("express").Router();

const { register } = require("../controllrer/authVendorControler");

router.post("/register", register);

module.exports = router;
