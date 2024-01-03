import { EachYes } from "./EachYes";

export const RecordYes = () => {
  const data = [
    "Food & Drinks",
    // "Food & Drinks",
    // "Food & Drinks",
    // "Food & Drinks",
    // "Food & Drinks",
    // "Food & Drinks",
    // "Food & Drinks",
  ];

  return (
    <div className="w-full flex flex-col gap-5 py-5">
      <p className="text-[16px] font-semibold">Yesterday</p>
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        {data.map((each, index) => {
          return <EachYes key={index} title={each} />;
        })}
      </div>
    </div>
  );
};
