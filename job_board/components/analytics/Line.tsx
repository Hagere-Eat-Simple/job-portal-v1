"use client"
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-[50vw] m-auto">
      <Line data={data}    height={100}/>
    </div>
  );
};

export default LineChart;