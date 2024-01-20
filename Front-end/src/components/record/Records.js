"use client";

import { RecordCategory } from "./RecordCategory";
import { RecordAmout } from "./RecordAmount";
import { RecordYes } from "./RecordYes";
import { RecordSelect } from "./RecordSelect";
import { RecordHead } from "./RecordHead";
import { RecordTypes } from "./RecordTypes";
import { MainHead } from "../MainHead";
import { RecordAdd } from "../expense/RecordAdd";
import { AddCategory } from "./AddCategory";
import { useRecord } from "../recordPro/RecordProvider";

export const Records = () => {
  const { getData, isOpen, openDraw } = useRecord();

  return (
    <div className="w-full h-full flex flex-col max-w-[1800px] m-auto relative ">
      <MainHead />
      <div className="md:flex w-full h-screen md:px-36 p-4 gap-5 bg-slate-100 dark:bg-black">
        <div className="flex md:h-fit h-[320px] overflow-scroll md:w-1/4 md:border-0 border-2 dark:border-slate-400 bg-white rounded-2xl p-5 md:gap-[24px] gap-3 flex flex-col mt-0 md:mt-4 dark:bg-[#374151]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[24px] font-semibold dark:text-white text-black">
              Records
            </p>
            <button
              className="bg-[#0166FF] text-white w-full rounded-2xl py-1 text-[18px] md:flex hidden justify-center"
              onClick={getData}
            >
              + Add
            </button>
          </div>
          <input
            type="text"
            placeholder="  Search"
            className="border-2 p-1 rounded-xl bg-white text-black"
          />
          <RecordTypes />
          <RecordCategory />
          <RecordAmout />
        </div>
        <div className="md:py-6 w-full flex flex-col gap-[7px] md:mt-0 mt-6 dark:bg-black">
          <RecordHead />
          <RecordSelect />
          <RecordYes />
        </div>
      </div>
      <div className="flex justify-center items-center  w-full dark:bg-black">
        {openDraw && <RecordAdd getData={getData} />}{" "}
        {isOpen && <AddCategory />}
      </div>
    </div>
  );
};
