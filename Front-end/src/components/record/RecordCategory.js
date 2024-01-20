"use client";

import { useRecord } from "../recordPro/RecordProvider";
import { EachCategory } from "./EachCategory";

export const RecordCategory = () => {
  const { setData, categoryList, setFilterCategory } = useRecord();

  const handleClicker = () => {
    setFilterCategory([]);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <p className="text-[16px] font-semibold dark:text-white text-black">
          Category
        </p>
        <p
          className="text-[16px] text-[#1F2937] dark:text-[white] hover:font-semibold"
          onClick={handleClicker}
        >
          Clear
        </p>
      </div>
      <div className="flex flex-col gap-4 text-[16px] font-normal dark:text-white">
        {categoryList.map((item, index) => {
          return <EachCategory key={index} title={item.cate} />;
        })}
      </div>
      <div className="flex gap-2 " onClick={setData}>
        <img src="plus.png" className="w-5 h-5"></img>
        <p className="dark:text-white text-black">Add Category</p>
      </div>
    </div>
  );
};
