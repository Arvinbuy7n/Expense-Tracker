"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecord } from "../providers/RecordProvider";
import { useAuth } from "../providers/AuthProvider";

export const MainHead = () => {
  const [openDraw, setOpenDraw] = useState(false);
  const { getData, toggleDark } = useRecord();
  const { signOut } = useAuth();
  const router = useRouter();

  const openPage = () => {
    setOpenDraw((p) => !p);
  };

  return (
    <div className="flex justify-between md:px-36 px-6 py-4 md:py-8 bg-white h-20 md:h-0 dark:bg-black dark:border-b-2">
      <div className="flex md:gap-8 gap-3 items-center">
        <img src="vector.png" className="md:mt-0 mt-2 md:flex hidden" />
        <div className="md:flex gap-8">
          <p
            className="text-[16px] font-normal hover:font-bold dark:text-white text-black"
            onClick={() => {
              router.push("./main");
            }}
          >
            Dashboard
          </p>
          <p
            className="text-[16px] font-normal hover:font-bold dark:text-white text-black"
            onClick={() => {
              router.push("./record");
            }}
          >
            Records
          </p>
        </div>
        <input
          type="checkbox"
          className="toggle md:mr-0 md:mt-0 mt-3"
          onClick={toggleDark}
        />
      </div>

      <div className="flex flex-col gap-7 md:mr-10 justify-center relative">
        <div className="flex md:gap-7 gap-3 justify-between w-full">
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
          />

          {openDraw && (
            <div className="absolute w-[150px] border-2 bg-blue-600 flex flex-col z-10 gap-3 rounded-xl px-2 py-2 md:top-8 top-14 right-0">
              <p
                className="text-white hover:text-cyan-500"
                onClick={() => {
                  router.push("/profile");
                }}
              >
                Profile
              </p>
              <p
                className="text-white hover:text-red-500"
                onClick={() => {
                  signOut();
                }}
              >
                Log Out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
