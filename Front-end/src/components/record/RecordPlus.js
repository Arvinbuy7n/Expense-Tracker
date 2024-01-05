import { useAuth } from "@/app/layout";
import * as icons from "react-icons/fa";

export const RecordPlus = (props) => {
  const {} = useAuth();
  const Icon1 = icons[props.icon];

  console.log(Icon1, props.icon);

  return (
    <div className="w-full h-fit flex item-center justify-between bg-[#FFFFFF] py-1 px-5 rounded-2xl">
      <div className="flex gap-4 py-2">
        <input type="checkbox" className="w-6" />
        <div
          className="flex items-center justify-center text-white p-3 rounded-full"
          style={{ backgroundColor: props.color }}
        >
          <Icon1 size={26} />
        </div>
        <div className="flex flex-col py-1">
          <p className="text -[18px]">{props.title}</p>
          <div className="flex gap-3">
            <p className="text-[#6B7280] text-[14px]">{props.date}</p>
            <p className="text-[#6B7280] text-[14px]">{props.time}</p>
          </div>
        </div>
      </div>
      <p className="py-4">{props.amount}</p>
    </div>
  );
};
