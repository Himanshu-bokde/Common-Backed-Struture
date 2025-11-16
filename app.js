const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js Express App! 🚀");
});

app.get("/status", (req, res) => {
  res.json({ message: "Server is running", time: new Date() });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
