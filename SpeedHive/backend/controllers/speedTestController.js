const SpeedTest = require("../models/SpeedTest.js");
const speedTest = require("speedtest-net");

const runSpeedTest = async (req, res) => {
  try {
    const result = await speedTest({ acceptLicense: true, acceptGdpr: true }); //  acceptLicense :  accepted the software’s license agreement (often called EULA - End User License Agreement).
    //  acceptGdpr : greed to comply with GDPR (General Data Protection Regulation) requirements.
    if (!result.download || !result.upload) {
      throw new Error("Speed test API did not return valid data");
    }

    const speedData = new SpeedTest({
      downloadSpeed: result.download.bandwidth / 12500000, // Convert to Mbps  // bandwidth maximum data transfer rate
      uploadSpeed: result.upload.bandwidth / 12500000, //  why 125000  bps * 8 / 10,00,000 = bps / 1000000/8 = bps/125000
      ping: result.ping.latency,
    });

    await speedData.save(); // db meh save karaga
    res.json(speedData); // data send in json format to frontend
  } catch (error) {
    console.error("Speed test error:", error.message);
    res
      .status(500)
      .json({ error: "Speed test failed", details: error.message });
  }
};

const getSpeedHistory = async (req, res) => {
  try {
    const history = await SpeedTest.find().sort({ createdAt: -1 }).limit(10); // -1 means descending orde ie newest first
    // limit means latest 10 only
    res.json(history);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve history", details: error.message });
  }
};

const deleteLastSpeedTest = async (req, res) => {
  try {
    const lastEntry = await SpeedTest.findOne().sort({ createdAt: -1 }); // Get last entry
    if (!lastEntry) {
      return res.status(404).json({ message: "No results to delete" });
    }

    await SpeedTest.findByIdAndDelete(lastEntry._id);
    res.json({ message: "Last result deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete result", details: error.message });
  }
};

module.exports = { runSpeedTest, getSpeedHistory, deleteLastSpeedTest };
