import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/styles.css"; // Import CSS file

const SpeedTest = () => {
  const [speedData, setSpeedData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Run a speed test
  const runSpeedTest = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/speedtest/run"
      );
      setSpeedData(response.data);
      fetchHistory(); // Refresh history after a new test
    } catch (error) {
      console.error("Error running speed test:", error);
    }
    setLoading(false);
  };

  // Fetch speed test history
  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/speedtest/history"
      );
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching speed test history:", error);
    }
  };

  // Delete the last speed test result
  const deleteLastResult = async () => {
    try {
      await axios.delete("http://localhost:3000/api/speedtest/delete-last");
      setHistory(history.slice(0, -1)); // Remove last item from UI
    } catch (error) {
      console.error("Error deleting last result:", error);
    }
  };

  // Fetch history when component mounts
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <h1>Speed Hive</h1>

      <button onClick={runSpeedTest} disabled={loading}>
        {loading ? "Testing..." : "Run Speed Test"}
      </button>

      {speedData && (
        <div className="result">
          <h2>Latest Result</h2>
          <p>
            <strong>Download Speed:</strong>{" "}
            {speedData.downloadSpeed.toFixed(2)} Mbps
          </p>
          <p>
            <strong>Upload Speed:</strong> {speedData.uploadSpeed.toFixed(2)}{" "}
            Mbps
          </p>
          <p>
            <strong>Ping:</strong> {speedData.ping} ms
          </p>
          <p className="small-text">
            Tested at: {new Date(speedData.createdAt).toLocaleString()}
          </p>
        </div>
      )}

      <button onClick={deleteLastResult} className="delete-btn">
        Delete Last Result
      </button>

      <div className="history">
        <h2>Past Results</h2>
        {history.map((test) => (
          <div key={test._id} className="history-item">
            <p>
              <strong>Download:</strong> {test.downloadSpeed.toFixed(2)} Mbps
            </p>
            <p>
              <strong>Upload:</strong> {test.uploadSpeed.toFixed(2)} Mbps
            </p>
            <p>
              <strong>Ping:</strong> {test.ping} ms
            </p>
            <p className="small-text">
              Date: {new Date(test.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeedTest;
