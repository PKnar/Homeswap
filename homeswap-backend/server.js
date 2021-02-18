const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
