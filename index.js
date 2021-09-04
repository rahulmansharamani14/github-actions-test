const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Fuck you!");
});

app.get("/dashboard", (req, res) => {
  res.send("Hola dashboard!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
