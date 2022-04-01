const express = require("express");

const router = require("./routers/authUserRouter");

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome!",
  });
});

app.listen(PORT, () => {
  console.log("Server is Runnig");
});
