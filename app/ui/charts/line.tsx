"use client";
import dynamic from 'next/dynamic';
import axios from 'axios';
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import { getLineChartApi } from '@/app/lib/utils';
import { ILineChartData } from '@/app/lib/definitions';
import './charts.css';

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
    const [chartData, setChartData] = useState<Array<ILineChartData> | undefined>(undefined);
    useEffect(() => {
        if (chartData === undefined) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get(getLineChartApi()).then((response: any) => setChartData(response?.data?.data)), 2000)
        };
    }, []);

    return (
        <div className="card">
            {
                !chartData ? (<div className="spinner-border text-primary" role="status" />) :
                <>
                    <h5 className="card-title">Market Analysis: PFY vs CFY</h5>
                    <Chart
                        options={options}
                        series={chartData}
                        type="line"
                        width={800}
                        height={400}
                    />
                </>
            }
        </div>
    )
};

export default LineChart;