import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = ({ title, type, data, options }) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="m-5 p-5 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-4">{title}</h2>
      <div className="h-80">{renderChart()}</div>
    </div>
  );
};

export default ChartContainer;
