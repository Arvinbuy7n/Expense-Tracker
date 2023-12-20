export const RecordPay = () => {
    return (
        <div className="w-[50%] px-3 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <p className="text-[#1F2937] text-[16px]">Payee</p>
                <select className="py-3 px-3 w-full rounded-lg">
                    <option>Write here</option>
                </select>
            </div>
            <div className="flex flex-col gap-1 w-full h-full">
                <p className="text-[#1F2937] text-[16px]">Note</p>
                <textarea
                    type="text"
                    className="h-full rounded-xl p-3"
                    placeholder="Write here"
                />
            </div>
        </div>
    )
}