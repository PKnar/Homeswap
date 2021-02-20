const express = require("express");
const {
  authUser,
  registerUser,
  getUsers,
} = require("../controllers/usercontroller.js");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);

module.exports = router;
