"use client";

import {useState } from "react";
import { Addition } from "./Addition";
import { useRouter } from "next/navigation";
import { RecordContext, useRecord } from "./recordPro/RecordProvider";

export const MainHead = () => {
  const [openDraw, setOpenDraw] = useState(false);
  const { getData, toggleDark } = useRecord();
  const router = useRouter();

  const openPage = () => {
    setOpenDraw((p) => !p);
  };

  return (
    <div className="flex justify-between md:px-36 px-8 py-4 md:py-7 w-full bg-white h-20 md:h-24 dark:bg-black dark:border-b-2">
      <div className="flex gap-8">
        <img src="vector.png" className="w-[28px] h-[28px] md:mt-0 mt-2 md:flex hidden"></img>
        <div className="md:flex gap-8">
          <p
            className="text-[16px] font-normal hover:font-bold dark:text-white"
            onClick={() => {
              router.push("./main");
            }}
          >
            Dashboard
          </p>
          <p
            className="text-[16px] font-normal hover:font-bold dark:text-white"
            onClick={() => {
              router.push("./record");
            }}
          >
            Records
          </p>
        </div>
        <input type="checkbox" className="toggle md:mr-0 md:mt-0 mr-8 mt-3" onClick={toggleDark}/>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex h-fit gap-7 justify-between w-full">
          <button
            className="flex  bg-[#0166FF] text-white rounded-3xl px-4 pt-2"
            onClick={getData}
          >
            +Records
          </button>
          <img
            src="chess.jpg"
            className="w-10 h-10 rounded-full"
            onClick={openPage}
          ></img>
        </div>
        {openDraw ? <Addition openPage={openPage} /> : null}
      </div>
    </div>
  );
};
