import { useAuth } from "@/app/layout";

export const EachCategory = (props) => {
  const { filter, setFilter,setRefresh,refresh } = useAuth();

  return (
    <div className="w-full h-fit flex item-center justify-between">
      <div className="flex gap-2">
        <img
        src={
          filter.includes(props.title) ? "hide1.png" : "eye.png"
        }

          className="w-5 h-5 mt-[2px]"
          onClick={() => {
            if(filter.includes(props.category)){
              setFilter(filter.filter((item)=>item!==props.category));
            } else {
              filter.push(props.title);
              setFilter(filter);
              setRefresh(refresh + 1);
            }
            console.log(filter);
          }}
        />
        
        <p>{props.title}</p>
      </div>
      <img className="w-5 h-5" src="let.png"></img>
    </div>
  );
};
