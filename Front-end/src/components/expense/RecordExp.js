"use client";

import { FaPlusCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";
import { PiWineFill } from "react-icons/pi";
import { PiTaxiFill } from "react-icons/pi";
import { PiTShirtFill } from "react-icons/pi";
import { useAuth } from "@/app/layout";
import { AddCategory } from "../record/AddCategory";

export const RecordExp = (props) => {
  const { isAddition, setAddition, isCategory, addCat } = useAuth();

  return (
    <div className="w-[50%] flex flex-col gap-6">
      <div className="bg-[#F3F4F6] rounded-3xl flex justify-between">
        <button
          onClick={() => {
            props.setType("Expense");
          }}
          className="px-16 py-2 rounded-3xl"
          style={{
            background: props.type === "Expense" ? "#0166FF" : "transparent",
            color: props.type === "Expense" ? "white" : "#000000",
          }}
        >
          Expense
        </button>
        <button
          onClick={() => {
            props.setType("Income");
          }}
          className="px-16 py-2 text-black rounded-3xl"
          style={{
            background: props.type === "Income" ? "#16A34A" : "transparent",
            color: props.type === "Income" ? "white" : "#000000",
          }}
        >
          Income
        </button>
      </div>
      <input
        type="text"
        placeholder="  ₮ 000.00"
        className=" w-full rounded-xl bg-slate-100 border-2 py-5"
      />
      <div className="w-full flex flex-col gap-1">
        <p className="text-[16px] text-[#1F2937]">Category</p>
        <div className="flex justify-between w-full py-4 px-3 rounded-lg bg-slate-100 text-[#94A3B8] relative">
          <p>Choose</p>
          <MdArrowDropDown size={20} onClick={setAddition} />
        </div>
        {isAddition ? (
          <div className="absolute top-[63%] w-[47%] flex flex-col bg-[#FFFFFF] h-[300px] rounded-xl border-2 overflow-scroll ">
            <div className="flex gap-3 p-4">
              <FaPlusCircle color="#0166FF" size={22} onClick={addCat} />
              <p className="text-[16px]">Add Category</p>
            </div>
            <div className="flex gap-3 p-4 border-t-2">
              <MdHomeFilled color="#0166FF" size={22} />
              <p className="text-[16px]">Home</p>
            </div>
            <div className="flex gap-3 p-4">
              <FaGift color="#FF4545" size={22} />
              <p className="text-[16px]">Gift</p>
            </div>
            <div className="flex gap-3 p-4">
              <CiForkAndKnife color="#FB8A22" size={22} />
              <p className="text-[16px]">Food</p>
            </div>
            <div className="flex gap-3 p-4">
              <PiWineFill color="#A804AB" size={22} />
              <p className="text-[16px]">Drink</p>
            </div>
            <div className="flex gap-3 p-4">
              <PiTaxiFill color="#EAB308" size={22} />
              <p className="text-[16px]">Taxi</p>
            </div>
            <div className="flex gap-3 p-4">
              <PiTShirtFill color="#6F6CF3" size={22} />
              <p>Shopping</p>
            </div>
          </div>
        ) : null}
        {/* {isCategory ? <AddCategory /> : null} */}
      </div>
      <div className="flex w-full gap-5">
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-[16px] text-[#1F2937]">Date</p>
          <input
            type="date"
            className="py-3 px-2 rounded-lg bg-slate-100 text-[#94A3B8]"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-[16px] text-[#1F2937]">Time</p>
          <select className="w-full py-3 rounded-lg px-2 bg-slate-100 text-[#94A3B8]">
            <option>4:15 PM</option>
          </select>
        </div>
      </div>
      <button
        className="bg-[#0166FF] py-2 text-white rounded-3xl mt-2"
        style={{
          background: props.type === "Expense" ? "#0166FF" : "#16A34A",
        }}
      >
        Add Record
      </button>
    </div>
  );
};
