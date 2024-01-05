import { useAuth } from "@/app/layout";

export const RecordTypes = () => {
  const { records } = useAuth();
  return (
    <div className="flex flex-col gap-[24px]">
      <div>
        <p className="text-[16px] font-semibold">Types</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input type="radio" className="w-4" />
          <p className="text-[16px] text-[#1F2937]">All</p>
        </div>
        <div className="flex gap-3">
          <input type="radio" className="w-4" />
          <p className="text-[16px] text-[#1F2937]">Income</p>
        </div>
        <div className="flex gap-3">
          <input type="radio" className="w-4" />
          <p className="text-[16px] text-[#1F2937]">Expense</p>
        </div>
      </div>
    </div>
  );
};
