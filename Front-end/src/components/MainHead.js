"use client";

import { useState } from "react";
import { Addition } from "./Addition";
import { useAuth } from "@/app/layout";
import { useRouter } from "next/navigation";

export const MainHead = () => {
  const [openDraw, setOpenDraw] = useState(false);
  const { getData } = useAuth();
  const router = useRouter();

  const openPage = () => {
    setOpenDraw((p) => !p);
  };

  return (
    <div className="flex justify-between px-36 py-7 w-full bg-white h-24">
      <div className="flex gap-8">
        <img src="vector.png" className="w-[28px] h-[28px]"></img>
        <p
          className="text-[16px] font-normal hover:font-bold"
          onClick={() => {
            router.push("./main");
          }}
        >
          Dashboard
        </p>
        <p
          className="text-[16px] font-normal hover:font-bold"
          onClick={() => {
            router.push("./record");
          }}
        >
          Records
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex h-fit gap-7 justify-between w-full">
          <button
            className="bg-[#0166FF] text-white rounded-3xl px-4 text-xl"
            onClick={getData}
          >
            + Records
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
