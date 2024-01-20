"use client";

import { useRecord } from "../recordPro/RecordProvider";

export const RecordTypes = () => {
  const { recordList, setRadioCheck } = useRecord();
  return (
    <div className="flex flex-col md:gap-[24px] gap-2">
      <div>
        <p className="text-[16px] font-semibold dark:text-white text-black">
          Types
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            onClick={(event) => {
              setRadioCheck(event.target.value);
            }}
            type="radio"
            name="radio"
            className="w-4 bg-white"
            value=""
          />
          <p className="text-[16px] text-[#1F2937] dark:text-white md:mb-0 mb-2">
            All
          </p>
        </div>
        <div className="flex gap-3">
          <input
            onClick={(event) => {
              setRadioCheck(event.target.value);
            }}
            type="radio"
            name="radio"
            className="w-4 bg-white"
            value="Income"
          />
          <p className="text-[16px] text-[#1F2937] dark:text-white md:mb-0 mb-2">
            Income
          </p>
        </div>
        <div className="flex gap-3">
          <input
            onClick={(event) => {
              setRadioCheck(event.target.value);
            }}
            type="radio"
            name="radio"
            className="w-4 bg-white"
            value="Expense"
          />
          <p
            className="text-[16px] text-[#1F2937] dark:text-white md:mb-0 mb-2"
            onClick={recordList.filter((radioCheck) => {
              return radioCheck.type === "Expense";
            })}
          >
            Expense
          </p>
        </div>
      </div>
    </div>
  );
};
