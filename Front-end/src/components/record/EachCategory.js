import { useAuth } from "@/app/layout";

export const EachCategory = (props) => {
  const { filterCategory, setFilterCategory, setRefresh, refresh } = useAuth();

  return (
    <div className="w-full h-fit flex item-center justify-between">
      <div className="flex gap-2">
        <img
          src={filterCategory.includes(props.title) ? "hide.jpeg" : "eyes.webp"}
          className="w-5 h-5 mt-[2px]"
          onClick={() => {
            // console.log(filterCategory, filterCategory.includes(props.title));
            if (filterCategory.includes(props.title)) {
              setFilterCategory(
                filterCategory.filter((item) => item !== props.title)
              );
            } else {
              filterCategory.push(props.title);
              setFilterCategory(filterCategory);
              setRefresh(refresh + 1);
            }
            // console.log(filterCategory);
          }}
        />

        <p>{props.title}</p>
      </div>
      <img className="w-5 h-5" src="let.png"></img>
    </div>
  );
};
