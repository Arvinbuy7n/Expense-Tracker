import { useAuth } from "@/app/layout";
import { RecordPlus } from "../record/RecordPlus";
import { EachMap } from "./EachMap";

export const DashMap = () => {
  //   const { recordList } = useAuth();

  //   return (
  //     <div className="w-full flex flex-col gap-5 py-5">
  //       <div className="flex flex-col gap-4 text-[16px] font-normal">
  //         {recordList.map((item, index) => {
  //           return (
  //             <RecordPlus
  //               key={index}
  //               title={item.category}
  //               amount={item.amount}
  //               date={item.date}
  //               time={item.time}
  //               icon={item.icon}
  //               color={item.color}
  //               type={item.type}
  //             />
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  const data = ["Lending & Renting"];

  return (
    <div className="w-full flex flex-col gap-5 py-2">
      <div className="flex flex-col gap-4 text-[16px] font-normal">
        {data.map((each, index) => {
          return <EachMap key={index} title={each} />;
        })}
      </div>
    </div>
  );
};
