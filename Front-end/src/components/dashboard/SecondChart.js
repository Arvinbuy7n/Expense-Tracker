import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRecord } from "../recordPro/RecordProvider";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SecondChart = () => {
  const { recordList } = useRecord();

  const data = {
    labels: recordList.map((item) => item.category),
    datasets: [
      {
        label: "# of Votes",
        data: recordList.map((item) => item.amount),
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        borderColor: ["#1C64F2", "#E74694", "#FDBA8C", "#16BDCA", "#F2901C"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-[300px]">
      <Doughnut data={data} />
    </div>
  );
};
