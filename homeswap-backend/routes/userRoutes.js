const express = require("express");
const {
  authUser,
  registerUser,
  getUsers,
  updateNotification,
} = require("../controllers/userController.js");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);
router.post("/notifications", updateNotification);

module.exports = router;
