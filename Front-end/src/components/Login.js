"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/layout";
import { AuthProvider } from "./providers/AuthProvider";

export const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { login } = useAuth();

  return (
    <div className="w-full h-screen flex bg-white">
      <div className="md:w-[50%] w-full flex flex-col justify-center items-center gap-10 ">
        <div className="gap-9 flex flex-col md:pl-20">
          <div className="flex justify-center gap-2">
            <img src="vector.png" className="w-6 h-6 mt-1"></img>
            <p className="font-bold text-2xl">Geld</p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold text-[24px] text-[#0F172A] mr-10">
              Welcome Back
            </p>
            <p className="text-slate-700 text-[16px] font-normal">
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
            className="border-2 p-3 rounded-lg bg-slate-100 w-[382px]"
          />
          <input
            type={isHidden ? "password" : "text"}
            placeholder="  Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="border-2 p-3 rounded-lg bg-slate-100 w-[382px]"
          />
          <div className="absolute ml-80 mt-20">
            <button
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className="text-[15px]"
            >
              {isHidden ? "Show" : "Hide"}
            </button>
          </div>
          <button
            className="bg-[#0166FF] text-white p-3 text-[20px] rounded-2xl w-[384px]"
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            Log in
          </button>
        </div>
        <div className="flex gap-2 mt-3 md:pl-10">
          <p className="text-[16px] text-[#0F172A]">Don’t have account?</p>
          <p
            className="text-[#0166FF] text-[16px]"
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
