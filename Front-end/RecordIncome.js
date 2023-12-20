export const RecordIncome = () => {
    return (
        <div className="w-[50%] flex flex-col gap-6">
            <div className="bg-[#F3F4F6] rounded-3xl flex justify-between">
                <button className="px-16 py-2 rounded-3xl">Expense</button>
                {/* <Link href="/income"> */}
                    <p className="px-16 py-2 text-[#1F2937] bg-[#16A34A]">Income</p>
                {/* </Link> */}
            </div>
            <input
                type="text"
                placeholder="  ₮ 000.00"
                className=" w-full rounded-xl bg-[bg-slate-200] border-2 py-5"
            />
            <div className="w-full flex flex-col gap-1">
                <p className="text-[16px] text-[#1F2937]">Category</p>
                <select className="w-full py-4 px-3 rounded-lg">
                    <option>  Choose</option>
                </select>
            </div>
            <div className="flex w-full gap-5">
                <div className="w-[50%] flex flex-col gap-1">
                    <p className="text-[16px] text-[#1F2937]">Date</p>
                    <input
                        type="date"
                        className="py-3 px-2 rounded-lg"
                    />
                </div>
                <div className="w-[50%] flex flex-col gap-1">
                    <p className="text-[16px] text-[#1F2937]">Time</p>
                    <select className="w-full py-3 rounded-lg px-2">
                        <option>4:15 PM</option>
                    </select>
                </div>
            </div>
            <button className="bg-[#0166FF] py-2 text-white rounded-3xl mt-2">Add Record</button>
        </div>
    )
}