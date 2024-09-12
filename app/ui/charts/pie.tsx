"use client";
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
    const [labels, setLabels] = useState<Array<string> | null>(null);
    const [series, setSeries] = useState<Array<number> | null>(null);
    const [colors, setColors] = useState<Array<string> | null>(null);

    useEffect(() => {
        if (labels === null || series === null) {
            // Added timeout just to showcase the screen when data takes too long to load.
            setTimeout(() => axios.get('http://127.0.0.1:8000/api/pie-chart-data/').then((response: any) => {
                setSeries(response?.data?.series);
                setLabels(response?.data?.labels);
                setColors(response?.data?.colors);
            }), 4000)
        };
    }, []);
    return (
        series === null || labels === null || colors === null ? (<div className="spinner-border text-primary" role="status" />) : <Chart
            options={{...options, labels, colors: colors}}
            type="donut"
            series={series}
            width={"240%"}
            height={"90%"}
        />
    )
};

export default PieChart;