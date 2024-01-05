export const DashHansh = () => {
  return (
    <div className=" flex gap-8 px-36 w-full h-[250px]">
      <div className="w-1/3 relative">
        <img
          src="noise.png"
          className="bg-blue-600 w-full h-[250px] rounded-2xl"
        ></img>
        <div className="absolute top-0 left-0 flex gap-2 px-10 py-10">
          <img src="whit.png" className="w-7 h-7"></img>
          <p className="text-white text-2xl font-normal">Geld</p>
        </div>
        <img
          src="logo.png"
          className="absolute bottom-0 right-0 py-10 px-10"
        ></img>
        <div className="flex flex-col absolute left-0 bottom-0 pb-8 pl-10 gap-1">
          <p className="text-[16px] text-[#FFFFFF] font-normal">Cash</p>
          <p className="text-[24px] text-[#FFFFFF] font-semibold">10,000,00</p>
        </div>
      </div>
      <div className="w-1/3 bg-white rounded-xl">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 ">
          <img src="green.png" className="w-2 h-2 mt-2"></img>
          <p className="text-[16px] font-semibold">Your Income</p>
        </div>
        <div className="p-6 flex flex-col gap-1">
          <div className="flex">
            <p className="text-[36px] font-semibold">0</p>
            <p className="text-[36px] font-semibold">₮</p>
          </div>
          <p className="text-[18px] text-[#64748B] font-normal">
            Your Income Amount
          </p>
          <div className="flex gap-2 mt-4">
            <img src="lend.png" className="w-[24px] h-[24px]"></img>
            <p className="text-[18px] text-black">32% from last month</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white rounded-xl">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 ">
          <img src="blue.png" className="w-2 h-2 mt-2"></img>
          <p className="text-[16px] font-semibold">Total Expenses</p>
        </div>
        <div className="p-6 flex flex-col gap-1">
          <div className="flex">
            <p className="text-[36px] font-semibold">0</p>
            <p className="text-[36px] font-semibold">₮</p>
          </div>
          <p className="text-[18px] text-[#64748B] font-normal">
            Your Income Amount
          </p>
          <div className="flex gap-2 mt-4">
            <img src="led.png" className="w-[24px] h-[24px]"></img>
            <p className="text-[18px] text-black">32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
