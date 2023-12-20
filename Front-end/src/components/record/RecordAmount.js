export const RecordAmout = () => {
  return (
    <div className="w-full flex flex-col gap-3 mt-6">
      <p className="text-[16px]">Amount Range</p>
      <div className="flex w-full justify-between">
        <button className="bg-slate-100 rounded-xl pl-3 pr-20 py-3">0</button>
        <button className="bg-slate-100 rounded-xl pl-3 pr-20 py-3">
          1000
        </button>
      </div>
      <div className="flex flex-col w-full mt-2">
        <input type="range" min={0} max={1000} className="text-black"></input>
        <div className="flex w-full justify-between">
          <p>0</p>
          <p>1000</p>
        </div>
      </div>
    </div>
  );
};
