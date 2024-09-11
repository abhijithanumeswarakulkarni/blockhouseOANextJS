import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "../charts/line";
import BarChart from "../charts/bar";
import PieChart from "../charts/pie";
import CandleStickChart from "../charts/candlestick";
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <CandleStickChart />
      </div>
      <div className="card">
        <LineChart />
      </div>
      <div className="card">
        <BarChart />
      </div>
      <div className="card">
        <PieChart />
      </div>
    </div>
  );
}
