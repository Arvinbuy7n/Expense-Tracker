import { DashMap } from "./DashMap";

export const DashLast = () => {
  return (
    <div className="flex gap-8 md:px-36 w-full h-[500px] py-2 md:mt-0 mt-[400px]">
      <div className="w-full bg-white rounded-xl">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 w-full">
          <p className="text-[16px] font-semibold">Last Records</p>
        </div>
        {/* <DashMap /> */}
      </div>
    </div>
  );
};
