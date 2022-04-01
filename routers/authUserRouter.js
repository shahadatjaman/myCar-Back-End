const router = require("express").Router();

const { register } = require("../controllrer/authUserControler");

router.post("/register", register);

module.exports = router;
