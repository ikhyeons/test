const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("gd");
});

app.get("/gd", (req, res) => {
  res.send("qd");
});

app.listen(3000, () => {
  console.log("app. start");
});
