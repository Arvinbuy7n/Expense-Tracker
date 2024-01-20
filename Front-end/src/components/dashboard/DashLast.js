import { RecordYes } from "../record/RecordYes";
import { DashMap } from "./DashMap";

export const DashLast = () => {
  return (
    <div className="flex gap-8 md:px-36 w-full h-[420px] py-2 md:mt-0 mt-[230px] overflow-scroll ">
      <div className="w-full bg-white rounded-xl dark:bg-[#374151]">
        <div className="flex px-[24px] py-[16px] gap-2 border-b-2 w-full">
          <p className="text-[16px] font-semibold dark:text-white text-black">
            Last Records
          </p>
        </div>
        <RecordYes />
      </div>
    </div>
  );
};
