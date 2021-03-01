const express = require("express");
const {
  createAdvertisement,
  getAll,
} = require("../controllers/houseController");
const router = express.Router();

router.route("/").get(getAll);
router.route("/create").post(createAdvertisement);

module.exports = router;
