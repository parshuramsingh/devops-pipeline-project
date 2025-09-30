const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 DevOps CI/CD Pipeline Project running successfully!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});