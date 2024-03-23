"use client";

export const RecordAmout = () => {
  return (
    <div className="w-full md:flex hidden flex-col gap-3 mt-2">
      <p className="text-[16px] dark:text-white">Amount Range</p>
      <div className="md:flex w-[90%] justify-between gap-3">
        <button className="bg-slate-100 rounded-xl pl-3 pr-12 py-3">0</button>
        <button className="bg-slate-100 rounded-xl pl-3 pr-10 py-3">
          1000
        </button>
      </div>
      <div className="flex flex-col w-full mt-2">
        <input type="range" min={0} max={1000} className="text-black"></input>
        <div className="flex w-full justify-between">
          <p className="dark:text-white">0</p>
          <p className="dark:text-white">1000</p>
        </div>
      </div>
    </div>
  );
};
