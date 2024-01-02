import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 4, 2, 1, 3],
      backgroundColor: ["#1C64F2", "#E74694", "#FDBA8C", "#16BDCA", "#F2901C"],
      borderColor: ["#1C64F2", "#E74694", "#FDBA8C", "#16BDCA", "#F2901C"],
      borderWidth: 1,
    },
  ],
};

export const SecondChart = () => {
  return (
    <div className="w-[300px]">
      <Doughnut data={data} />
    </div>
  );
};