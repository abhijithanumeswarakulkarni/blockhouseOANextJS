"use client";
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ICandlestickData } from '@/app/lib/definitions';
import { getCandlestickApi } from '@/app/lib/utils';
import './charts.css';

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
    const [chartData, setChartData] = useState<Array<ICandlestickData> | undefined>(undefined);
    useEffect(() => {
        if (chartData === undefined) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get(getCandlestickApi()).then((response: any) => setChartData(response?.data?.data)), 1000)
        };
    }, []);
    return (
        <div className="card">
            {
                !chartData ? (<div className="spinner-border text-primary" role="status" />) :
                <>
                    <h5 className="card-title">Past Month Market Values</h5>
                    <Chart
                        options={options}
                        series={[{...seriesObj, data: chartData}]}
                        type="candlestick"
                        width={800}
                        height={400}
                    />
                </>
            }
        </div>
    )
};

export default CandleStickChart;