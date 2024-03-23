"use client";

import { DashChart } from "./DashChart";
import { DashHansh } from "./DashHansh";
import { DashLast } from "./DashLast";
import { MainHead } from "../auto/MainHead";

export const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col max-w-[1800px] m-auto bg-slate-100">
      <MainHead />
      <div className="grid grid-cols-1 gap-5 md:py-10 py-4 dark:bg-black md:px-0 px-4">
        <DashHansh />
        <DashChart />
        <DashLast />
      </div>
    </div>
  );
};
