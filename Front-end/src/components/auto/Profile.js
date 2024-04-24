"use client";

import { useRouter } from "next/navigation";

export const Profile = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-[#00000080] flex justify-center items-center relative">
      <div className="h-[500px] w-[380px] bg-white flex flex-col items-center p-10 rounded-2xl">
        <img src="chess.jpg" className="w-[220px] h-[220px] rounded-full"></img>
        <div className=" mt-10 py-4 rounded-2xl items-center flex flex-col gap-4 bg-cyan-400 pr-40 pl-5">
          <p className="mr-9 font-bold">Name:</p>
          <p className="mr-9 font-bold">Email:</p>
          <p className="font-bold">Password:</p>
        </div>
        <img
          src="arrow.png"
          className="w-6 h-4 absolute mr-[325px] bottom-[805px]"
          onClick={() => {
            router.push("/record");
          }}
        ></img>
      </div>
    </div>
  );
};
