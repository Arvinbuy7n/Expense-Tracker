import { EachToday } from "./EachToday";

export const RecordToday = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <p className="text-[16px] font-semibold">Today</p>
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
          <div className="flex gap-4">
            <input type="checkbox" className="w-6" />
            <img
              src="house.png"
              className="w-9 h-9 mt-[6px] bg-blue-600 p-[7px] rounded-3xl"
            ></img>
            <div className="flex flex-col py-1">
              <p className="text -[16px]">Lending & Renting</p>
              <p className="text-[#6B7280] text-[12px]">14:00</p>
            </div>
          </div>
          <p className="mt-2 text-[#23E01F] text-[16px] mr-4">-1,000₮</p>
        </div>
        {/* <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
          <div className="flex gap-4">
            <input type="checkbox" className="w-6" />
            <img
              src="knife.png"
              className="w-9 h-9 mt-[6px] bg-[#F54949] p-[7px] rounded-3xl"
            ></img>
            <div className="flex flex-col py-1">
              <p className="text -[16px]">Food & Drinks</p>
              <p className="text-[#6B7280] text-[12px]">14:00</p>
            </div>
          </div>
          <p className="mt-2 text-[#F54949] text-[16px] mr-4">-1,000₮</p>
        </div>
        <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
          <div className="flex gap-4">
            <input type="checkbox" className="w-6" />
            <img
              src="knife.png"
              className="w-9 h-9 mt-[6px] bg-[#F54949] p-[7px] rounded-3xl"
            ></img>
            <div className="flex flex-col py-1">
              <p className="text -[16px]">Food & Drinks</p>
              <p className="text-[#6B7280] text-[12px]">14:00</p>
            </div>
          </div>
          <p className="mt-2 text-[#EAB308] text-[16px] mr-4">-1,000₮</p>
        </div>
        <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
          <div className="flex gap-4">
            <input type="checkbox" className="w-6" />
            <img
              src="knife.png"
              className="w-9 h-9 mt-[6px] bg-[#F54949] p-[7px] rounded-3xl"
            ></img>
            <div className="flex flex-col py-1">
              <p className="text -[16px]">Food & Drinks</p>
              <p className="text-[#6B7280] text-[12px]">14:00</p>
            </div>
          </div>
          <p className="mt-2 text-[#EAB308] text-[16px] mr-4">-1,000₮</p>
        </div>
        <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-4 rounded-2xl">
          <div className="flex gap-4">
            <input type="checkbox" className="w-6" />
            <img
              src="knife.png"
              className="w-9 h-9 mt-[6px] bg-[#F54949] p-[7px] rounded-3xl"
            ></img>
            <div className="flex flex-col py-1">
              <p className="text -[16px]">Food & Drinks</p>
              <p className="text-[#6B7280] text-[12px]">14:00</p>
            </div>
          </div>
          <p className="mt-2 text-[#EAB308] text-[16px] mr-4">-1,000₮</p>
        </div> */}
      </div>
    </div>
  );
};
