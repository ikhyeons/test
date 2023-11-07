const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("gd");
});

app.get("/gd", (req, res) => {
  res.send("qd");
});

app.get("/qd", (req, res) => {
  res.send("gg");
});

app.get("/fef", (req, res) => {
  res.send("ef");
});

app.listen(3000, () => {
  console.log("app. start");
});
