export const RecordTypes = () => {
    return (
        <div className="flex flex-col gap-[24px]">
            <div>
                <p className="text-[16px] font-semibold">Types</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        className="w-5"
                    />
                    <p className="text-[16px] text-[#1F2937]">All</p>
                </div>
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        className="w-5"
                    />
                    <p className="text-[16px] text-[#1F2937]">Income</p>
                </div>
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        className="w-5"
                    />
                    <p className="text-[16px] text-[#1F2937]">Expense</p>
                </div>
            </div>
        </div>
    )
}