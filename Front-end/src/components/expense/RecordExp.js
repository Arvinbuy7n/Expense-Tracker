"use client";

import { FaPlusCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useAuth } from "@/app/layout";
import { AddIcon } from "../record/AddIcon";

export const RecordExp = (props) => {
  const {
    isAddition,
    setAddition,
    addCat,
    categoryList,
    records,
    category,
    recordColor,
    recordIcon,
  } = useAuth();

  return (
    <form
      className="w-full flex gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        records(
          e.target.amount.value,
          category,
          props.type,
          e.target.date.value,
          e.target.payee.value,
          e.target.note.value,
          recordColor,
          recordIcon
        );
        // amount, category, type, date, payee, note, color, icon
      }}
    >
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
          name="amount"
          placeholder="  ₮ 000.00"
          className=" w-full rounded-xl bg-slate-100 border-2 pt-8 pb-4 relative"
        />
        <p className="absolute top-[183px] ml-4 text-slate-600">Amount</p>
        <div className="w-full flex flex-col gap-1">
          <p className="text-[16px] text-[#1F2937]">Category</p>
          <div className="flex justify-between w-full py-4 px-3 rounded-lg bg-slate-100 text-[#94A3B8] relative">
            <p>{category}</p>
            <MdArrowDropDown
              size={20}
              onClick={() => {
                setAddition();
              }}
            />
          </div>
          {isAddition ? (
            <div className="absolute top-[63%] w-[47%] flex flex-col bg-[#FFFFFF] h-[300px] rounded-xl border-2 overflow-scroll ">
              <div className="flex gap-3 p-4 border-b-2">
                <FaPlusCircle color="#0166FF" size={22} onClick={addCat} />
                <p className="text-[16px]">Add Category</p>
              </div>
              <div className="flex flex-col gap-7 text-[16px] font-normal p-5">
                {categoryList.map((item, index) => {
                  return (
                    <AddIcon
                      key={index}
                      title={item.cate}
                      color={item.color}
                      icon={item.icon}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}
          {/* {isCategory ? <AddCategory /> : null} */}
        </div>
        <div className="flex w-full gap-5">
          <div className="w-[50%] flex flex-col gap-1">
            <p className="text-[16px] text-[#1F2937]">Date</p>
            <input
              name="date"
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
          type="submit"
        >
          Add Record
        </button>
      </div>
      <div className="w-[50%] px-3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-[#1F2937] text-[16px]">Payee</p>
          <input
            name="payee"
            className="py-3 px-3 w-full rounded-lg bg-slate-100 text-[#94A3B8]"
          />
        </div>
        <div className="flex flex-col gap-1 w-full h-full">
          <p className="text-[#1F2937] text-[16px]">Note</p>
          <textarea
            type="text"
            name="note"
            className="h-full rounded-xl p-3 bg-slate-100"
            placeholder="Write here"
          />
        </div>
      </div>
    </form>
  );
};
