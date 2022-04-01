const router = require("express").Router();

const { register } = require("../controllrer/authCustomerController");

router.post("/customerregister", register);

module.exports = router;
