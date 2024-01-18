"use client";

import { useState } from "react";
import { RecordExp } from "./RecordExp";
import { useAuth } from "@/app/layout";
import { RecordProvider } from "../recordPro/RecordProvider";
import { useRecord } from "../recordPro/RecordProvider";

export const RecordAdd = () => {
  const [type, setType] = useState("Expense");

  const { getData } = useRecord();

  return (
    <div className="fixed h-screen w-screen bg-[#00000080] top-[-300px] left-0 flex justify-center items-center mt-[300px] w-full">
      <div className="flex flex-col justify-center bg-white w-[800px] h-fit rounded-lg relative">
        <div className="flex w-full h-fit justify-between px-6 md:py-6 py-4">
          <p className="text-[20px] font-semibold">Add Record</p>
          <img src="x.png" className="w-5 h-5" onClick={getData}></img>
        </div>
        <div className="flex w-full md:px-6 md:py-8 p-4 gap-5 border-t-2 border-slate-200">
          <RecordExp type={type} setType={setType} />
        </div>
      </div>
    </div>
  );
};
