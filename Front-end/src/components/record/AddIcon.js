import * as icons from "react-icons/fa";
import { useRecord } from "../recordPro/RecordProvider";

export const AddIcon = (props) => {
  const { setCategory, setRecordIcon, setRecordColor } = useRecord();
  const Icon = icons[props.icon];

  if (Icon === undefined) {
    console.count(props.icon);
  }

  return (
    <div className="w-full h-fit flex item-center justify-between">
      <div
        onClick={() => {
          setCategory(props.title);
          setRecordColor(props.color);
          setRecordIcon(props.icon);
        }}
        className="flex gap-4 items-center"
      >
        <Icon size={20} fill={props.color} />
        <p>{props.title}</p>
      </div>
    </div>
  );
};
