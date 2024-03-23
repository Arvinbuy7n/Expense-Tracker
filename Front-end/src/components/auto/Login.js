"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../providers/AuthProvider";

export const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { toggleDark } = useAuth();

  const router = useRouter();

  const { login } = useAuth();

  return (
    <div className="w-full h-screen flex bg-white">
      <div className="md:w-[50%] w-full flex flex-col justify-center items-center gap-10 dark:bg-[#374151]">
        <input
          type="checkbox"
          className="toggle md:ml-20 ml-2"
          onClick={toggleDark}
        />
        <div className="md:gap-9 gap-5 flex flex-col md:pl-20">
          <div className="flex justify-center gap-2">
            <img
              src="vector.png"
              className="md:w-6 md:h-6  w-4 h-4 md:mt-1 mt-[5px]"
            ></img>
            <p className="font-bold md:text-2xl text-[18px] text-black dark:text-white">
              Geld
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold md:text-[24px] text-[16px] text-[#0F172A]  dark:text-white">
              Welcome Back
            </p>
            <p className="text-slate-700 md:text-[16px] text-[13px] font-normal dark:text-white">
              Welcome back, Please enter your details
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-80 gap-4 relative">
          <input
            type="text"
            placeholder="  Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="border-2 md:p-3 p-2 rounded-lg bg-slate-100 w-[340px] md:w-[384px] text-black"
          />
          <input
            type={isHidden ? "password" : "text"}
            placeholder="  Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="border-2 md:p-3 p-2 rounded-lg bg-slate-100 w-[340px] md:w-[384px] text-black"
          />
          <div className="absolute md:ml-[330px] ml-72 md:mt-20 mt-[70px]">
            <button
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className="text-[15px] text-black"
            >
              {isHidden ? "Show" : "Hide"}
            </button>
          </div>
          <button
            className="bg-[#0166FF] text-white md:p-3 p-2 md:text-[20px] text-[16px] rounded-2xl w-[340px] md:w-[384px]"
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            Log in
          </button>
        </div>
        <div className="flex gap-2 mt-3 md:pl-10">
          <p className="md:text-[16px] text-[12px] text-[#0F172A] dark:text-white">
            Don’t have account?
          </p>
          <p
            className="text-[#0166FF] md:text-[16px] text-[12px]"
            onClick={() => {
              router.push("/sign");
            }}
          >
            Sign up
          </p>
        </div>
      </div>
      <div className="w-[50%] md:flex hidden bg-[#0166FF]"></div>
    </div>
  );
};
