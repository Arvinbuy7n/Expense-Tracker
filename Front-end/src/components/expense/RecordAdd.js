"use client"

import { useState } from "react"
import { RecordExp } from "./RecordExp"
import { RecordPay } from "./RecordPay"

export const RecordAdd = () => {
    const [type, setType] = useState("Expense")

    return <div>
        <div className="flex flex-col justify-center bg-slate-300 w-[800px] h-fit rounded-lg relative">
            <div className="flex w-full h-fit justify-between px-6 py-6">
                <p className="text-[20px] font-semibold">Add Record</p>
                <img src="x.png" className="w-5 h-5"></img>
            </div>
            <div className="flex w-full px-6 py-8 gap-5 border-t-2 border-slate-200">

                <RecordExp type={type} setType={setType} />
                <RecordPay />

            </div>
        </div>
    </div>
}