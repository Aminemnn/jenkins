const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jenkins CI/CD!");
});

app.get("/new-feature", (req, res) => {
  res.send("🚀 New feature deployed via Jenkins!");
});


if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // تصدير `app` فقط
