"use client";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
    chart: {
        id: "bar"
      },
      xaxis: {
        categories: ["Product A", "Product B", "Product C"]
      }
};

const series = [{
    name: "Price",
    data: [100, 150, 200]
}];

const BarChart = () => {
    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width="700"
        />
    )
};

export default BarChart;