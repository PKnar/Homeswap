const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());

let parentDir = require("path").resolve(__dirname, "..");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "homeswap/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "homeswap/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
