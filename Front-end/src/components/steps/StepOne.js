"use client"

import Link from "next/link"
import { useState } from "react"

export const StepOne = () => {
    const [isLoading, setIsloading] = useState(true)

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
                        <li className="step mr-2">Balance</li>
                        <li className="step ml-2">Finish</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-[24px]">
                    <img src="money.png" className="bg-blue-600 w-10 rounded-3xl p-[6px]"></img>
                    <p className="text-[24px] font-bold">Select base currency</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <select className="border-2 w-[384px] h-14 rounded-lg font-bold bg-slate-50">
                        <option>
                            MNT - Mongolian Tugrik
                        </option>
                        <option>
                            USD - US Dollar
                        </option>
                        <option>
                            EUR - Euro
                        </option>
                    </select>
                    <p className="text-[12px] text-slate-700">
                        Your base currency should be the one you use most often. All <br></br>
                        transaction in other currencies will be calculated based on this one
                    </p>
                    <Link href="/step2">
                        <button className="bg-blue-600 w-[384px] rounded-2xl p-2 text-white mt-5 text-[20px]">Confirm</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}