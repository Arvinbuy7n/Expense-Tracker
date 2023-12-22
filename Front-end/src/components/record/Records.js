"use client";

import { RecordCategory } from "./RecordCategory";
import { RecordAmout } from "./RecordAmount";
import { RecordToday } from "./RecordToday";
import { RecordYes } from "./RecordYes";
import { RecordSelect } from "./RecordSelect";
import { RecordHead } from "./RecordHead";
import { RecordTypes } from "./RecordTypes";
import { MainHead } from "../MainHead";
import { RecordAdd } from "../expense/RecordAdd";
import { useAuth } from "@/app/layout";
import { AddCategory } from "./AddCategory";

export const Records = () => {
  const { openDraw, getData, isOpen, setIsOpen, setData } = useAuth();

  return (
    <div className="w-full h-full flex flex-col max-w-[1800px] m-auto relative">
      <MainHead />
      <div className="flex w-full h-full px-36 py-7 gap-5 bg-slate-100">
        <div className="w-1/4 border-2 bg-white rounded-2xl p-5 gap-[24px] flex flex-col">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[24px] font-semibold">Records</p>
            <button
              className="bg-[#0166FF] text-white w-full rounded-2xl py-1 text-[18px]"
              onClick={getData}
            >
              + Add
            </button>
          </div>
          <input
            type="text"
            placeholder="  Search"
            className="border-2 p-1 rounded-xl"
          />
          <RecordTypes />
          <RecordCategory />
          <RecordAmout />
        </div>
        <div className="py-6 w-full flex flex-col gap-[7px]">
          <RecordHead />
          <RecordSelect />
          <RecordToday />
          <RecordYes />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[300px] w-full">
        {openDraw && <RecordAdd getData={getData} />}{" "}
        {isOpen && <AddCategory />}
      </div>
    </div>
  );
};
