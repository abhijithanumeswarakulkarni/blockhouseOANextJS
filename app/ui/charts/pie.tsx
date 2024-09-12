"use client";
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { getPieChartApi } from '@/app/lib/utils';
import './charts.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
    chart: {
        id: "pie",
        fontFamily: "'IBM Plex Mono', monospace",
    },
    legend: {
        position: 'bottom'
    }
};

const PieChart = () => {
    const [labels, setLabels] = useState<Array<string> | undefined>(undefined);
    const [series, setSeries] = useState<Array<number> | undefined>(undefined);
    const [colors, setColors] = useState<Array<string> | undefined>(undefined);

    useEffect(() => {
        if (!series || !labels || !colors) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get(getPieChartApi()).then((response: any) => {
                setSeries(response?.data?.series);
                setLabels(response?.data?.labels);
                setColors(response?.data?.colors);
            }), 4000)
        };
    }, []);
    return (
        <div className="card">
            {
                !series || !labels || !colors ? (<div className="spinner-border text-primary" role="status" />) :
                <>
                    <h5 className="card-title">Portfolio Distribution</h5>
                    <Chart
                        options={{...options, labels, colors: colors}}
                        type="pie"
                        series={series}
                        width={800}
                        height={400}
                    />
                </>
            }
        </div>
    )
};

export default PieChart;