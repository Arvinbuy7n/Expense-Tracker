import { DashChart } from "./DashChart"
import { DashHansh } from "./DashHansh"
import { DashLast } from "./DashLast"
import { MainHead } from "../MainHead"

export const Dashboard = () => {
    return (
        <div className="w-full h-full flex flex-col max-w-[1800px] m-auto">
            <MainHead />
            <div className="flex flex-col gap-5 py-10">
                <DashHansh />
                <DashChart />
                <DashLast />
            </div>
        </div>
    )
}