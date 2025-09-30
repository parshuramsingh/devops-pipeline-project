const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("🚀 DevOps CI/CD Pipeline Project running successfully!");
=======
  res.send(" DevOps CI/CD Pipeline Project running successfully!");
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});