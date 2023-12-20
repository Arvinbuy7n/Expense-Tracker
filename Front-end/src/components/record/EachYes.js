export const EachYes = (props) => {
    return (
        <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
            <div className="flex gap-4">
                <input
                    type="checkbox"
                    className="w-6"
                />
                <img src="knife.png" className="w-9 h-9 mt-[6px] bg-[#F54949] p-[7px] rounded-3xl"></img>
                <div className="flex flex-col py-1">
                    <p className="text -[16px]">{props.title}</p>
                    <p className="text-[#6B7280] text-[12px]">14:00</p>
                </div>
            </div>
            <p className="mt-2 text-[#EAB308] pr-3 mt-3">-1,000₮</p>
        </div >
    )
}