"use client";
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { getBarChartApi } from '@/app/lib/utils';
import './charts.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
    chart: {
        id: "bar",
        fontFamily: "'IBM Plex Mono', monospace",
    },
    xaxis: {
        categories: ["Product A", "Product B", "Product C"]
    }
};

const BarChart = () => {
    const [chartData, setChartData] = useState<Array<number> | undefined>(undefined);

    useEffect(() => {
        if (chartData === undefined) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get(getBarChartApi()).then((response: any) => setChartData(response?.data?.data)), 3000)
        };
    }, []);

    return (
        <div className="card">
            {
                !chartData ? (<div className="spinner-border text-primary" role="status" />) :
                    <>
                        <h5 className="card-title">Product Cost Structure</h5>
                        <Chart
                            options={options}
                            series={chartData}
                            type="bar"
                            width={800}
                            height={400}
                        />
                    </>
            }
        </div>
    )
};

export default BarChart;