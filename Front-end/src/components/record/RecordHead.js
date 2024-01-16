export const RecordHead = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <button className="bg-[#E5E7EB] rounded-xl px-2 py-1 h-8">{"<"}</button>
        <p className="text-[16px] mt-1">Last Day</p>
        <button className="bg-[#E5E7EB] rounded-xl px-2 py-1 h-8">{">"}</button>
      </div>
      <select className="w-[180px] p-3 rounded-lg font-semibold text-[16px]">
        <option>Newest fisrt</option>
        <option>Oldest fisrt</option>
      </select>
    </div>
  );
};
