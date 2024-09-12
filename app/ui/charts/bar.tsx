"use client";
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
    chart: {
        id: "bar",
        fontFamily: "'IBM Plex Mono', monospace",
      },
      xaxis: {
        categories: ["Product A", "Product B", "Product C"]
      }
};

const BarChart = () => {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        if (chartData === null) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get('http://127.0.0.1:8000/api/bar-chart-data/').then((response: any) => setChartData(response?.data?.data)), 3000)
        };
    }, []);
    return (
        chartData === null ? (<div className="spinner-border text-primary" role="status" />) : <Chart
            options={options}
            series={chartData}
            type="bar"
            width="240%"
            height="90%"
        />
    )
};

export default BarChart;