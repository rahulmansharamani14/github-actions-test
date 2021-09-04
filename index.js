const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("I'm build branch!");
});

app.get("/dashboard", (req, res) => {
  res.send("Hola dashboard!");
});

app.get("/api/blog", (req, res) => {
  res.send("Served blog!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
