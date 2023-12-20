import Link from "next/link"

export const StepThree = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-white gap-36 py-10 max-w-[1800px] m-auto">
            <div className="flex flex-col gap-10">
                <div className="flex gap-2 justify-center">
                    <img src="vector.png" className="w-6 h-6 mt-1"></img>
                    <p className="font-bold text-2xl">Geld</p>
                </div>
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-info">Currency</li>
                    <li className="step step-info">Balance</li>
                    <li className="step step-info">Finish</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3 mt-20">
                <div className="flex flex-col items-center gap-[10px]">
                    <img src="check.png" className="bg-blue-600 w-10 rounded-3xl p-[6px]"></img>
                    <p className="text-[24px] font-bold text-[#0F172A]">Good Job!</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="text-[16px] text-[#475569]">
                        Your very first account has been created. Now <br></br>
                        continue to dashboard and start tracking
                    </p>
                    <Link href="/main">
                        <button className="bg-blue-600 w-[384px] rounded-[20px] p-2 text-white mt-5 text-[20px]">Go to Dashboard</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}