const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const router = require("./routers/authVendorRouter");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.use("/api", router);
app.use("/api", require("./routers/authCustomerRouter"));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome!",
  });
});

app.listen(PORT, () => {
  console.log("Server is Runnig");
  mongoose.connect("mongodb://localhost:27017/mycar", () => {
    console.log("Mongoose connected!");
  });
});
