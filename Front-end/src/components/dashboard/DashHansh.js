"use client";

import { useRecord } from "../recordPro/RecordProvider";

export const DashHansh = () => {
  const { recordList } = useRecord();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 md:px-36 w-full h-fit md:h-[250px]">
      <div className="w-full relative">
        <img
          src="noise.png"
          className="bg-blue-600 w-full h-[250px] rounded-2xl"
        ></img>
        <div className="absolute top-0 left-0 flex gap-2 px-10 py-10">
          <img src="whit.png" className="w-7 h-7"></img>
          <p className="text-white text-2xl font-normal">Geld</p>
        </div>
        <img
          src="logo.png"
          className="absolute bottom-0 right-0 py-10 px-10"
        ></img>
        <div className="flex flex-col absolute left-0 bottom-0 pb-8 pl-10 gap-1">
          <p className="text-[16px] text-[#FFFFFF] font-normal">Cash</p>
          <p className="text-[24px] text-[#FFFFFF] font-semibold">
            {recordList.reduce(
              (total, currentValue) => Number(currentValue.amount) - total,
              0
            )}
          </p>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl dark:bg-[#374151]">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 ">
          <img src="green.png" className="w-2 h-2 mt-2"></img>
          <p className="text-[16px] font-semibold dark:text-white">Your Income</p>
        </div>
        <div className="p-6 flex flex-col gap-1">
          <div className="flex">
            <p className="text-[28px] mt-1 text-[#23E01F] font-bold">+</p>
            <p
              className="text-[36px] font-semibold ml-1"
              style={{
                color: "Income" ? "#23E01F" : "inherit",
              }}
            >
              {recordList
                .filter((recordList) => {
                  return recordList.type === "Income";
                })
                .reduce(
                  (total, currentValue) => total + Number(currentValue.amount),
                  0
                )}
            </p>
            <p className="text-[36px] font-semibold text-[#23E01F]">₮</p>
          </div>
          <p className="text-[18px] text-[#64748B] font-normal dark:text-[#D1D5DB]">
            Your Income Amount
          </p>
          <div className="flex gap-2 mt-4">
            <img src="lend.png" className="w-[24px] h-[24px]"></img>
            <p className="text-[18px] text-black dark:text-white">32% from last month</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl md:px-0 dark:bg-[#374151]">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 ">
          <img src="blue.png" className="w-2 h-2 mt-2"></img>
          <p className="text-[16px] font-semibold dark:text-white">Total Expenses</p>
        </div>
        <div className="p-6 flex flex-col gap-1">
          <div className="flex">
            <p className="text-[28px] mt-1 text-[#F54949] font-bold">-</p>
            <p
              className="text-[36px] font-semibold ml-1"
              style={{
                color: "Expense" ? "#F54949" : "inherit",
              }}
            >
              {recordList
                .filter((recordList) => {
                  return recordList.type === "Expense";
                })
                .reduce(
                  (total, currentValue) => total + Number(currentValue.amount),
                  0
                )}
            </p>
            <p
              className="text-[36px] font-semibold"
              style={{
                color: "Expense" ? "#F54949" : "inherit",
              }}
            >
              ₮
            </p>
          </div>
          <p className="text-[18px] text-[#64748B] font-normal dark:text-[#D1D5DB]">
            Your Expense Amount
          </p>
          <div className="flex gap-2 mt-4">
            <img src="led.png" className="w-[24px] h-[24px]"></img>
            <p className="text-[18px] text-black dark:text-white">32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
