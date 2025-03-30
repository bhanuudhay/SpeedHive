const express = require("express");
const {
  runSpeedTest,
  getSpeedHistory,
  deleteLastSpeedTest,
} = require("../controllers/speedTestController.js");

const router = express.Router();

router.get("/run", runSpeedTest);
router.get("/history", getSpeedHistory);
router.delete("/delete-last", deleteLastSpeedTest);

module.exports = router;
