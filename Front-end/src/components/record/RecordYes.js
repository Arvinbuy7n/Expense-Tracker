"use client";

import { RecordPlus } from "./RecordPlus";
import { useRecord } from "../providers/RecordProvider";

export const RecordYes = () => {
  const { recordList, filterCategory, radioCheck } = useRecord();

  return (
    <div className="w-full flex flex-col gap-5 md:py-5 md:h-fit h-[350px] overflow-scroll rounded-2xl">
      <div className="flex flex-col md:gap-4 gap-2 text-[16px] font-normal">
        {recordList
          .filter((item) => {
            if (!filterCategory.length) return true;
            return !filterCategory.includes(item.category);
          })
          .filter((item) => {
            if (!radioCheck) return true;
            return item.type === radioCheck;
          })
          .map((item, index) => {
            return (
              <RecordPlus
                key={index}
                title={item.category}
                amount={item.amount}
                date={item.date}
                time={item.time}
                icon={item.icon}
                color={item.color}
                type={item.type}
              />
            );
          })}
      </div>
    </div>
  );
};
