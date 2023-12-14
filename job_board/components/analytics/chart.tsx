"use client"

import React, { Component } from "react";
import {Doughnut} from "react-chartjs-2";
import { ArcElement, Chart } from 'chart.js';
import  DeepPartial from 'react-chartjs-2';


Chart.register(ArcElement);

const DoughnutChart = () => {
 
    const data = {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20],
        
          backgroundColor: ["#1f77b4"],
        },
      ],
    };
    const options = {
      legend: {
        display: false,
      },
    };
    return (
      <div className="w-[150px] ">
      <Doughnut data={data} options= {options}/>
      </div>
    );
  }

export default DoughnutChart;