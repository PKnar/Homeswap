const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Backend is working" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "homeswap/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "homeswap/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
