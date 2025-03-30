const mongoose = require("mongoose");

const speedTestSchema = new mongoose.Schema({
  downloadSpeed: Number, // Mbps
  uploadSpeed: Number, // Mbps
  ping: Number, // ms
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SpeedTest", speedTestSchema);
