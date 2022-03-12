import React from "react";
import Chart from "react-apexcharts";
import "./Admin.css";

const DashboardChart = () => {
  const options = {
    chart: {
      height: "20px",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      row: {
        colors: ["#FFFFFF", "transparent"],
        opacity: 0.5,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        },
      },
    },
    colors: ["#FFB52B", "#2D92FE"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  };

  const series = [
    {
      name: "revenue",
      type: "line",
      data: [3000, 4200, 3200, 3500, 3000, 2900, 2000, 3000, 2500],
    },
    {
      name: "revenue",
      type: "line",
      data: [1000, 2800, 2000, 3200, 4000, 4500, 3000, 2500, 2000],
    },
    {
      name: "revenue",
      type: "line",
      data: [3000, 4200, 3200, 3500, 3000, 2900, 2000, 3000, 2500],
    },
    {
      name: "revenue",
      type: "line",
      data: [1000, 2800, 2000, 3200, 4000, 4500, 3000, 2500, 3000],
    },
  ];
  return (
    <>
      <div className="revnue-chart-main">
        <div className="revenue-chart-title">
          <h3 className="title"> Revenue Charts </h3>
        </div>
        <div className="revenue-graph">
          <Chart options={options} series={series} type="line" height={350} />
        </div>
      </div>
    </>
  );
};

export default DashboardChart;
