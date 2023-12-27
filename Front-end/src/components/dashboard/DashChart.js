"use client";

import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughChart";

export const DashChart = () => {
  return (
    <div className="flex gap-8 px-36 w-full h-[380px]">
      <div className="w-1/2 bg-white rounded-xl">
        <div className="flex flex-col px-[16px] py-[16px] gap-2 w-full">
          <p className="text-[16px] font-semibold border-b-2 pb-3">
            Income - Expense
          </p>
          <BarChart />
        </div>
      </div>
      <div className="w-1/2 bg-white rounded-xl">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 w-full">
          <p className="text-[16px] font-semibold">Income - Expense</p>
          {/* <DoughnutChart /> */}
        </div>
      </div>
    </div>
  );
};
