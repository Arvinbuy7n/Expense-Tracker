'use client'

import { useRouter } from "next/navigation"

export const StepTwo = () => {
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
                        <li className="step ml-2">Finish</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-[24px]">
                    <img src="coins.png" className="bg-blue-600 w-10 rounded-3xl p-[6px]"></img>
                    <p className="text-[24px] font-bold">Set up your cash Balance</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <input
                        type="text"
                        placeholder="  Balance"
                        className="border-2 p-3 rounded-lg bg-slate-100 w-[410px]"
                    />
                    <p className="text-[13px] text-slate-700 pr-32">
                        How much cash do you have in your wallet?
                    </p>
                    <button className="bg-blue-600 w-[405px] rounded-2xl p-2 text-white mt-5 text-[20px]"
                        onClick={() => {
                            router.push("./step3")
                        }}
                    >Confirm</button>
                </div>
            </div>
        </div>
    )
}