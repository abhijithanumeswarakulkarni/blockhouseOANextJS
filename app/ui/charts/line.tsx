"use client";
import dynamic from 'next/dynamic';
import axios from 'axios';
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
    chart: {
        id: "line",
        fontFamily: "'IBM Plex Mono', monospace",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    markers: {
        size: [4, 7]
    },
    stroke: {
        curve: "smooth",
    }
};


const LineChart = () => {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        if (chartData === null) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get('http://127.0.0.1:8000/api/line-chart-data/').then((response: any) => setChartData(response?.data?.data)), 2000)
        };
    }, []);

    return (
        chartData === null ? (<div className="spinner-border text-primary" role="status" />) : <Chart
            options={options}
            series={chartData}
            type="line"
            width="240%"
            height="90%"
        />
    )
};

export default LineChart;