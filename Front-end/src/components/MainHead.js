"use client"

import Link from "next/link"
import { useState } from "react"
import { Addition } from "./Addition"

export const MainHead = () => {
    const [openDraw, setOpenDraw] = useState(false)

    const openPage = () => {
        setOpenDraw((p) => !p);
    }

    return (
        <div className="flex justify-between px-36 py-7 w-full bg-white h-24">
            <div className="flex gap-8">
                <img src="vector.png" className="w-[28px] h-[28px]"></img>
                <Link href="/main">
                    <p className="text-[16px] font-normal hover:font-bold">Dashboard</p>
                </Link>
                <Link href="/record">
                    <p className="text-[16px] font-normal hover:font-bold">Records</p>
                </Link>

            </div>
            <div className="flex flex-col gap-7">
                <div className="flex h-fit gap-7">
                   <button className="bg-[#0166FF] text-white rounded-3xl px-4 text-xl">+ Records</button>
                   <img src="face.png" className="w-[40px] h-[40px]" onClick={openPage}></img>
                </div>
                {
                   openDraw ? (<Addition
                   openPage={openPage}
                   />) : null
                }
            </div>
        </div>
    )
}