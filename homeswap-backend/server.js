const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");
let parentDir = path.resolve(__dirname, "..");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./dbConfig/db");

dotenv.config();
connectDB();
app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(parentDir, "homeswap/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(parentDir, "homeswap/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
