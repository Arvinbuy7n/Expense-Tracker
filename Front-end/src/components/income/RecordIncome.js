import { RecordPay } from "../expense/RecordPay"
import { RecordInc } from "./RecordInc"

export const RecordIncome = () => {
    return (
        <div className="flex flex-col justify-center bg-slate-300 w-[800px] h-fit rounded-lg absolute mb-40">
            <div className="flex w-full h-fit justify-between px-6 py-6">
                <p className="text-[20px] font-semibold">Add Record</p>
                <img src="x.png" className="w-5 h-5"></img>
            </div>
            <div className="flex w-full px-6 py-8 gap-5 border-t-2 border-slate-200">
                <RecordInc />
                <RecordPay />
            </div>
        </div>
    )
}