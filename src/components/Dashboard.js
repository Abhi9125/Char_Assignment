import React from "react";
import ChartContainer from "./ChartContainer";
import { alertsData } from "../data/alerts";

const Dashboard = () => {
  const srcIpCounts = alertsData.reduce((acc, alert) => {
    acc[alert.src_ip] = (acc[alert.src_ip] || 0) + 1;
    return acc;
  }, {});

  const srcIpChartData = {
    labels: Object.keys(srcIpCounts),
    datasets: [
      {
        label: "Number of Alerts by Source IP",
        data: Object.values(srcIpCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const srcIpChartOptions = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Source IP",
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Count",
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const destPortCounts = alertsData.reduce((acc, alert) => {
    acc[alert.dest_port] = (acc[alert.dest_port] || 0) + 1;
    return acc;
  }, {});

  const destPortChartData = {
    labels: Object.keys(destPortCounts),
    datasets: [
      {
        label: "Number of Alerts by Destination Port",
        data: Object.values(destPortCounts),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const destPortChartOptions = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Destination Port",
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Count",
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const categories = alertsData.reduce((acc, alert) => {
    acc[alert.alert.category] = (acc[alert.alert.category] || 0) + 1;
    return acc;
  }, {});

  const categoriesChartData = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Number of Alerts by Category",
        data: Object.values(categories),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const categoriesChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ChartContainer
        title="Alerts by Source IP"
        type="bar"
        data={srcIpChartData}
        options={srcIpChartOptions}
      />
      <ChartContainer
        title="Alerts by Destination Port"
        type="bar"
        data={destPortChartData}
        options={destPortChartOptions}
      />
      <ChartContainer
        title="Alerts by Category"
        type="pie"
        data={categoriesChartData}
        options={categoriesChartOptions}
      />
    </div>
  );
};

export default Dashboard;
