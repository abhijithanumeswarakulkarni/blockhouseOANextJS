import React from "react";
import dynamic from 'next/dynamic';
import './dashboard.css';

const LineChart = dynamic(() => import('../charts/line'), { ssr: false });
const BarChart = dynamic(() => import('../charts/bar'), {ssr: false});
const PieChart = dynamic(() => import('../charts/pie'), {ssr: false});
const CandleStickChart = dynamic(() => import('../charts/candlestick'), {ssr: false});

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
