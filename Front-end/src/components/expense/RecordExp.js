"use client";

import { useState } from "react";

import { useAuth } from "@/app/layout";

export const RecordExp = (props) => {

  return (
    <div className="w-[50%] flex flex-col gap-6">
      <div className="bg-[#F3F4F6] rounded-3xl flex justify-between">
        <button
          onClick={() => {
            props.setType("Expense");
          }}
          className="px-16 py-2 text-black rounded-3xl"
          style={{
            background: props.type === "Expense" ? "#0166FF" : "transparent",
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
        <select className="w-full py-4 px-3 rounded-lg bg-slate-100 text-[#94A3B8]">
          <option> Choose</option>
          <option>
            <div className="flex gap-4">
              <img src="plusc.png" className="bg-blue-500"></img>
              <p>Add Category</p>
            </div>
          </option>
        </select>
      </div>
      <div className="flex w-full gap-5">
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-[16px] text-[#1F2937]">Date</p>
          <input type="date" className="py-3 px-2 rounded-lg bg-slate-100 text-[#94A3B8]" />
        </div>
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-[16px] text-[#1F2937]">Time</p>
          <select className="w-full py-3 rounded-lg px-2 bg-slate-100 text-[#94A3B8]">
            <option>4:15 PM</option>
          </select>
        </div>
      </div>
      <button className="bg-[#0166FF] py-2 text-white rounded-3xl mt-2">
        Add Record
      </button>
    </div>
  );
};
