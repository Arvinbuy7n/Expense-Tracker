import { RecordPlus } from "./RecordPlus";
import { useRecord } from "../recordPro/RecordProvider";

export const RecordYes = () => {
  const { recordList, categoryList, filterCategory } = useRecord();
  console.log(categoryList);
  return (
    <div className="w-full flex flex-col gap-5 py-5">
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        {recordList
          .filter((item) => {
            if (!filterCategory.length) return true;
            return !filterCategory.includes(item.category);
          })
          .map((item, index) => {
            return (
              <RecordPlus
                key={index}
                title={item.category}
                amount={item.amount}
                date={item.date}
                time={item.time}
                icon={item.icon}
                color={item.color}
                type={item.type}
              />
            );
          })}
      </div>
    </div>
  );
};
