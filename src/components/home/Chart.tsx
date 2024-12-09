"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#171A35",
      borderColor: "white",
      borderWidth: 1,
      titleColor: "white",
      bodyColor: "white",
      cornerRadius: 4,
      padding: 8,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "white",
        font: {
          size: 10,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "white",
        font: {
          size: 10,
        },
        callback: function (tickValue: number | string) {
          return `$${Number(tickValue).toFixed(5)}`;
        },
      },
    },
  },
};

const data = {
  labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
  datasets: [
    {
      data: [0.00045, 0.00052, 0.00048, 0.00055, 0.00062, 0.00058, 0.00065],
      borderColor: "#2049F8",
      backgroundColor: "rgba(32, 73, 248, 0.1)",
      borderWidth: 2,
      tension: 0,
      stepped: true,
      pointRadius: 0,
      fill: true,
    },
  ],
};

const Chart: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
