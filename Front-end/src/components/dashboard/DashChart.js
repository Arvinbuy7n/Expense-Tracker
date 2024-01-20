"use client";

import { BarChart } from "./BarChart";
import { SecondChart } from "./SecondChart";

export const DashChart = () => {
  return (
    <div className="md:grid-cols-2 grid grid-cols-1 md:gap-8 gap-4 md:px-36 w-full h-[380px] ">
      <div className="w-full bg-white rounded-xl dark:bg-[#D1D5DB]">
        <div className="flex flex-col px-[16px] py-[16px] gap-2 w-full">
          <p className="text-[16px] font-semibold border-b-2 pb-3 text-black">
            Income - Expense
          </p>
          <BarChart />
        </div>
      </div>
      <div className="w-full bg-white rounded-xl dark:bg-[#D1D5DB] text-black">
        <div className="flex flex-col px-[16px] py-[16px] gap-2 w-full">
          <p className="text-[16px] font-semibold border-b-2 pb-3">
            Income - Expense
          </p>
          <SecondChart />
        </div>
      </div>
    </div>
  );
};
