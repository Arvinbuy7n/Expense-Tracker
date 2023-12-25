import { BarChart } from "./BarChart";

export const DashChart = () => {

    return (
        <div className="flex gap-8 px-36 w-full h-[320px]">
            <div className="w-1/2 bg-white rounded-xl">
                <div className="flex px-[24px] py-[16px] gap-2 border-b-2 w-full">
                    <p className="text-[16px] font-semibold">Income - Expense</p>
                </div>
            </div>
            <div className="w-1/2 bg-white rounded-xl">
                <div className="flex px-[24px] py-[16px] gap-2 border-b-2 w-full">
                    <p className="text-[16px] font-semibold">Income - Expense</p>
                </div>
            </div>
        </div>
    )
}