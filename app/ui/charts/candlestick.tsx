"use client";
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
    chart: {
        id: "candlestick",
        fontFamily: "'IBM Plex Mono', monospace",
    },
    // @ts-ignore
    plotoptions: {
        candlestick: {
          colors: {
            upward: 'green',
            downward: 'red'
          }
        }
      }
};

const seriesObj = {
    name: "Stock Price",
};

const CandleStickChart = () => {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        if (chartData === null) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get('http://127.0.0.1:8000/api/candlestick-data/').then((response: any) => setChartData(response?.data?.data)), 1000)
        };
    }, []);
    return (
        chartData === null ? (<div className="spinner-border text-primary" role="status" />) : <Chart
            options={options}
            series={[{...seriesObj, data: chartData}]}
            type="candlestick"
            width="240%"
            height="90%"
        />
    )
};

export default CandleStickChart;