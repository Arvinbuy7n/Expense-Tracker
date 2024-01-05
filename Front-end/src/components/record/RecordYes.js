import { useAuth } from "@/app/layout";
import { EachYes, RecordPlus } from "./RecordPlus";

export const RecordYes = () => {
  const { recordList } = useAuth();

  console.log("RecordList", recordList);

  return (
    <div className="w-full flex flex-col gap-5 py-5">
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        {recordList.map((item, index) => {
          return (
            <RecordPlus
              key={index}
              title={item.category}
              amount={item.amount}
              date={item.date}
              time={item.time}
              icon={item.icon}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};
