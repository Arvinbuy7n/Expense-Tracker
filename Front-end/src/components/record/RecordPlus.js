import * as icons from "react-icons/fa";

export const RecordPlus = (props) => {
  const Icon1 = icons[props.icon];

  return (
    <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] pt-2 md:px-5 px-3 rounded-2xl dark:bg-[#374151]">
      <div className="flex gap-4 p-2">
        <input type="checkbox" className="w-6" />
        <div
          className="flex items-center justify-center text-white px-4 rounded-full"
          style={{ backgroundColor: props.color }}
        >
          <Icon1 size={24} />
        </div>
        <div className="flex flex-col py-1">
          <p className="text -[18px] dark:text-[#D1D5DB]">{props.title}</p>
          <div className="flex gap-3">
            <p className="text-[#6B7280] text-[14px] dark:text-[#D1D5DB]">{props.date}</p>
            <p className="text-[#6B7280] text-[14px] dark:text-[#D1D5DB]">{props.time}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <p
          className="pt-5"
          style={{ color: props.type == "Expense" ? "#F54949" : "#23E01F" }}
        >
          {props.amount}
        </p>
        <p
          className="text-[16px] font-semibold pt-5"
          style={{ color: props.type == "Expense" ? "#F54949" : "#23E01F" }}
        >
          ₮
        </p>
      </div>
    </div>
  );
};
