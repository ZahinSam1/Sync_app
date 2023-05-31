import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import StatisticsBar from "./Statistics/statisticsbar";
import StatisticsLine from "./Statistics/statisticsline";
import StatisticsPie from "./Statistics/statisticspie";
import SyncUpdate from "./Update/update";
import Connected from "./Connected/connected";
import { UserData } from "./Statistics/data";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [userData, setuserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#99c9ff", "#99b8ff", "#9e99ff", "#be99ff"],
        borderColor: "grey",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="container">
      
      <Navbar />
      <div className="stat">
        <StatisticsBar chartData={userData} />

        <StatisticsLine chartData={userData} />

        <StatisticsPie chartData={userData} />
      </div>

      {/* <SyncUpdate />
      <Connected /> */}
    </div>
  );
};

export default Dashboard;
