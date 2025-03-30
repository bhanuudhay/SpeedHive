# SpeedHive

SpeedHive is a web-based internet speed test tracker that lets users measure their download, upload speed, and ping, store the results in MongoDB, and view their test history with charts. Built using Node.js (Express) for the backend and React for the frontend, it follows the MVC architecture for better scalability. Unlike other speed test tools, SpeedHive provides historical tracking and data visualization, allowing users to monitor their internet performance over time. It utilizes the speed-test module for accurate results and integrates with a database to keep a record of past tests. The project also ensures real-time updates and a user-friendly interface, making it a unique alternative to typical one-time speed test apps. 🚀

# Users can:

- ✅ Perform an internet speed test
- ✅ View real-time results (download, upload, ping)
- ✅ Store test history in a database
- ✅ View previous speed test results

# Tech Stack & Modules Used

  **Backend (Node.js + Express)**

- express – Web framework for handling routes and API requests

- cors – Enables Cross-Origin Resource Sharing

- dotenv – Loads environment variables

- mongoose – Manages MongoDB connection and schema

- speed-test – Node.js module to measure internet speed

- nodemon – Auto-restarts server on file changes (for development)

**Frontend**

- react – UI framework for the frontend

- axios – Handles API requests to the backend

- react-chartjs-2 – Displays speed test history using charts

- react-router-dom – Enables navigation between pages

**Database**

- MongoDB – Stores speed test results and history

# Project Functionalities

**🔹 Internet Speed Test**

- Users can start a speed test from the frontend

- The backend uses the speed-test module to measure download, upload speed, and ping

- Results are displayed in real-time

**🔹 Store Speed Test History**

- Once a speed test is completed, the data is stored in MongoDB

  Each entry includes:

   - Download speed

   - Upload speed

   - Ping

   - Timestamp

**🔹 View Speed Test History**

- Users can view their past test results

- Data is displayed in list format and charts

# Project Structure
````
SpeedHive/
│── backend/
│   │── server.js
│   │── .env
│   │── package.json
│   │── package-lock.json
│   │── node_modules/
│   │── config/
│   │   ├── db.js
│   │── controllers/
│   │   ├── speedTestController.js
│   │── models/
│   │   ├── SpeedTest.js
│   │── routes/
│   │   ├── speedTestRoutes.js
│
│── frontend/speed-test-frontend/
│   │── node_modules/
│   │── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── main.jsx
│   │   ├── SpeedTest.jsx
│   │   ├── styles.css
│   │── index.html
│   │── eslint.config.js
│   │── package.json
│   │── package-lock.json
│   │── README.md
│   │── vite.config.js

````

# API Endpoints

- 1️⃣ Run Speed Test

  - GET /api/speedtest
  - 📌 Measures download speed, upload speed, and ping and returns results.

- 2️⃣ Get Speed Test History

  - GET /api/speedtest/history
  - 📌 Fetches all past speed test results from MongoDB.

- Future Enhancements 🚀
  - ✅ Add user authentication to store test history per user
  - ✅ Implement scheduled speed tests for automatic tracking
  - ✅ Provide internet performance analytics with insights

# Set Up SpeedHive 🚀
  **Follow these steps to set up and run the SpeedHive project on your local machine.**

- 1️⃣ Prerequisites
  Before running the project, make sure you have the following installed:
    - ✅ Node.js (Latest LTS version recommended) – Download Here
    - ✅ MongoDB (Local or Cloud) – MongoDB Atlas or install locally
    - ✅ Git (Optional, if cloning from GitHub)

- 2️⃣ Clone the Repository (If Using Git)
  ````
  git clone https://github.com/bhanuudhay/SpeedHive.git
  cd SpeedHive
  ````

- 3️⃣ Backend Setup (Node.js + Express)
  - 1️⃣ Navigate to the backend folder:
    ````
    cd backend
    ````
  - 2️⃣ Install dependencies:
    ````
    npm install
    ````
  - 3️⃣ Create a .env file in the backend folder and add:
    ````
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ````
    - Replace your_mongodb_connection_string with your MongoDB URI.

    - If using MongoDB Atlas, create a database and get the connection string.

  - 4️⃣ Start the backend server:

    ````
    npm start
    ````
    - ✔️ The backend should now be running on http://localhost:5000

- 4️⃣ Frontend Setup (React + Vite)
  - 1️⃣ Open a new terminal and navigate to the frontend:

    ````
    cd frontend/speed-test-frontend
    ````
  - 2️⃣ Install frontend dependencies:

    ````
    npm install
    ````
  - 3️⃣ Start the React development server:

    ````
    npm run dev
    ````
    - ✔️ The frontend should now be running on http://localhost:5173 (default Vite port).

- 5️⃣ Test the Application
  - Open http://localhost:5173 in your browser.

  - Perform a speed test, view results, and check history! 🎯

 ✅ Your SpeedHive Project is Now Set Up! 🎉

  
**Created by Bhanu Udhay** | Open for feedback 💡🚀
