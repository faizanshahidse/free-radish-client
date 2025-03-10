const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Route hit......");
});

module.exports = app;
