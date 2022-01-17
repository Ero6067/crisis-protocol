const express = require("express");
const characters = require("./data/characters");
const products = require("./data/products");

console.log(products);
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.get("/api/characters/:id", (req, res) => {
  const character = character.find((c) => c._id === req.params.id);
  res.json(characters);
});

app.listen(5000, console.log("Its Alive!!!"));
