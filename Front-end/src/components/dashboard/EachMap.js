 export const EachMap = (props) => {
        return (
            <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 border-b-2">
                <div className="flex gap-4">
                    <img src="house.png" className="w-9 h-9 mt-[6px] bg-blue-600 p-[7px] rounded-3xl"></img>
                    <div className="flex flex-col py-1">
                        <p className="text -[16px]">{props.title}</p>
                        <p className="text-[#6B7280] text-[12px] font-normal">3 hours ago</p>
                    </div>
                </div>
                <p className="mt-2 text-[#84CC16] pr-3 mt-2">-1,000₮</p>
            </div >
        )
    }
