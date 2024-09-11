"use client";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
    chart: {
        id: "line",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    markers: {
        size: [4, 7]
    },
    stroke: {
        curve: 'smooth',
    }
};

const series = [
    {
        name: "2023",
        data: [
            28, 32, 30, 29, 34, 33, 35, 34, 36, 35, 33, 37
        ]
    },
    {
        name: "2024",
        data: [
            30, 33, 31, 32, 36, 34, 38, 37, 39, 38, 35, 40
        ]
    }
];


const LineChart = () => {
    return (
        <Chart
            options={options}
            series={series}
            type="line"
            width="700"
        />
    )
};

export default LineChart;