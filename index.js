const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my Node.js app inside Docker!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
