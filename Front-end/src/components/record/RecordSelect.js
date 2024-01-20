"use client";

import { useRecord } from "../recordPro/RecordProvider";

export const RecordSelect = () => {
  const { recordList } = useRecord();

  return (
    <div className="flex flex-col gap-6 py-2 ">
      <div className="flex justify-between bg-white px-[24px] py-[16px] rounded-xl dark:bg-[#374151]">
        <div className="flex gap-3">
          <input type="checkbox" className="w-6 h-6" />
          <p className="text-[16px] dark:text-white text-black">Select all</p>
        </div>
        <div className="flex gap-[1.5px]">
          <p className="text-[16px] text-yellow-400 font-semibold">
            {recordList.reduce(
              (total, currentValue) => total + Number(currentValue.amount),
              0
            )}
          </p>
          <p className="text-[16px] text-yellow-400 font-semibold">₮</p>
        </div>
      </div>
    </div>
  );
};
