import { useAuth } from "@/app/layout";
import { EachYes } from "./EachYes";

export const RecordYes = () => {
  const { recordList } = useAuth();

  return (
    <div className="w-full flex flex-col gap-5 py-5">
      {/* <p className="text-[16px] font-semibold">Yesterday</p> */}
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        {recordList.map((item, index) => {
          return <EachYes key={index} title={item} />;
        })}
      </div>
    </div>
  );
};
