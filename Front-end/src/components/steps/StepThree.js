"use client";

import { useRouter } from "next/navigation";

export const StepThree = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col bg-white gap-36 py-10 max-w-[1800px] m-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-2 justify-center">
          <img src="vector.png" className="w-6 h-6 mt-1"></img>
          <p className="font-bold text-2xl">Geld</p>
        </div>
        <div className="flex justify-center">
          <ul className="steps steps-vertical lg:steps-horizontal flex">
            <li className="step step-info mr-5">Currency</li>
            <li className="step step-info mr-2">Balance</li>
            <li className="step step-info ml-2">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-20">
        <div className="flex flex-col items-center gap-[10px]">
          <img
            src="check.png"
            className="bg-blue-600 w-10 rounded-3xl p-[6px]"
          ></img>
          <p className="text-[24px] font-bold text-[#0F172A]">Good Job!</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[16px] text-[#475569]">
            Your very first account has been created. Now <br></br>
            continue to dashboard and start tracking
          </p>
          <button
            className="bg-blue-600 w-[384px] rounded-[20px] p-2 text-white mt-5 text-[20px]"
            onClick={() => {
              router.push("./main");
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
