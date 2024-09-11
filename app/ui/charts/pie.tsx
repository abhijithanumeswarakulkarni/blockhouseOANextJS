"use client";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
    labels: [
        "Red", "Blue", "Yellow", "Green", "Purple", 
        "Orange", "Cyan", "Magenta", "Lime", "Pink", 
        "Teal", "Lavender", "Brown", "Beige", "Gray"
    ],
    chart: {
        id: "pie",
    },
    legend: {
        position: 'bottom'
    }
};

const series = [
    300, 50, 100, 75, 60, 
    90, 120, 85, 70, 95, 
    110, 65, 80, 40, 55
];

const PieChart = () => {
    return (
        <Chart
            options={options}
            type="pie"
            width="700"
            series={series}
        />
    )
};

export default PieChart;