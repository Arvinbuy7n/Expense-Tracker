"use client";

import { FaPlusCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { AddIcon } from "../record/AddIcon";
import { useRecord } from "../recordPro/RecordProvider";

export const RecordExp = (props) => {
  const {
    isAddition,
    setAddition,
    categoryList,
    records,
    category,
    recordColor,
    recordIcon,
    setOpenDraw,
    setData,
  } = useRecord();

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
          recordIcon,
          e.target.time.value
        );
        setOpenDraw(false);
      }}
    >
      <div className="md:w-[50%] w-full flex flex-col md:gap-6 gap-4">
        <div className="bg-[#F3F4F6] rounded-3xl md:flex md:w-0 w-40 justify-between md:ml-0 ml-24">
          <div
            onClick={() => {
              props.setType("Expense");
            }}
            className="md:px-16 pl-12 py-2 rounded-3xl"
            style={{
              background: props.type === "Expense" ? "#0166FF" : "transparent",
              color: props.type === "Expense" ? "white" : "#000000",
            }}
          >
            Expense
          </div>
          <div
            onClick={() => {
              props.setType("Income");
            }}
            className="md:px-16 pl-12 py-2 text-black rounded-3xl "
            style={{
              background: props.type === "Income" ? "#16A34A" : "transparent",
              color: props.type === "Income" ? "white" : "#000000",
            }}
          >
            Income
          </div>
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
          <div
            className="flex justify-between w-full py-4 px-3 rounded-lg bg-slate-100 text-[#94A3B8] relative"
            onClick={() => {
              setAddition();
            }}
          >
            <p>{category}</p>
            <MdArrowDropDown size={20} />
          </div>
          {isAddition ? (
            <div className="absolute md:top-[63%] top-[67%] md:w-[47%] w-[91%] flex flex-col bg-[#FFFFFF] h-[270px] rounded-xl border-2 overflow-scroll ">
              <div className="flex gap-3 p-4 border-b-2">
                <FaPlusCircle color="#0166FF" size={22} onClick={setData} />
                <p className="text-[16px]">Add Category</p>
              </div>
              <div
                className="flex flex-col gap-7 text-[16px] font-normal p-5"
                onClick={setAddition}
              >
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
        </div>
        <div className="flex w-full gap-5">
          <div className="w-[50%] flex flex-col gap-1">
            <p className="text-[16px] text-[#1F2937]">Date</p>
            <input
              name="date"
              type="date"
              className="py-3 px-2 rounded-lg bg-slate-100 text-black"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-1">
            <p className="text-[16px] text-[#1F2937]">Time</p>
            <input
              name="time"
              type="time"
              className="w-full py-3 rounded-lg px-2 bg-slate-100 text-black"
            />
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
      <div className="md:flex hidden w-[50%] px-3 flex flex-col gap-3">
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
