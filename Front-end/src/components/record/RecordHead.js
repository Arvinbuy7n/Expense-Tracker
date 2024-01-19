export const RecordHead = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 mt-2">
        <button className="bg-[#E5E7EB] rounded-xl px-2 py-1 h-8">{"<"}</button>
        <p className="text-[16px] mt-1 dark:text-white">Last Day</p>
        <button className="bg-[#E5E7EB] rounded-xl px-2 py-1 h-8">{">"}</button>
      </div>
      <select className="md:w-[180px] w-[140px] p-3 rounded-lg font-semibold text-[14px] dark:bg-[#374151] dark:text-[#D1D5DB]">
        <option>Newest fisrt</option>
        <option>Oldest fisrt</option>
      </select>
    </div>
  );
};
