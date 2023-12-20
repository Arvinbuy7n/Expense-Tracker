export const RecordSelect = () => {
    return (
        <div className="flex flex-col gap-6 py-2">
            <div className="flex justify-between bg-white px-[24px] py-[16px] rounded-xl">
                <div className="flex gap-3">
                    <input
                        type="checkbox"
                        className="w-6 h-6"
                    />
                    <p className="text-[16px]">Select all</p>
                </div>
                <p className="text-[16px] text-[#94A3B8] font-semibold">-35,500₮</p>
            </div>
        </div>
    )
}