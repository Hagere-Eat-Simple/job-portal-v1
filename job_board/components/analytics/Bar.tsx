"use client"
import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Barchart = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30],
      },
    ],
  });

  return (
    <div className="w-[40vw] h-[300px]">
      <Bar data={chartData} />
    </div>
  );
};

export default Barchart;