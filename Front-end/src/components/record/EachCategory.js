"use client";

import { useRecord } from "../providers/RecordProvider";

export const EachCategory = (props) => {
  const { filterCategory, setFilterCategory, setRefresh, refresh } =
    useRecord();

  return (
    <div className="w-full h-fit flex item-center justify-between">
      <div className="flex gap-2">
        <img
          src={filterCategory.includes(props.title) ? "hide.jpeg" : "eyes.webp"}
          className="w-5 h-5 mt-[2px]"
          onClick={() => {
            if (filterCategory.includes(props.title)) {
              setFilterCategory((prev) =>
                prev.filter((item) => item !== props.title)
              );
            } else {
              setFilterCategory((prev) => [...prev, props.title]);
            }
            setRefresh(refresh + 1);
            console.log(filterCategory);
          }}
        />
        <p className="text-black dark:text-white">{props.title}</p>
      </div>
      <img className="w-5 h-5" src="let.png"></img>
    </div>
  );
};
