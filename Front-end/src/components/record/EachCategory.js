export const EachCategory = (props) => {
  return (
    <div className="w-full h-fit flex item-center justify-between">
      <div className="flex gap-2">
        <img src="eye.png" className="w-5 h-5 mt-[2px]"></img>
        <p>{props.title}</p>
      </div>
      <img className="w-5 h-5" src="let.png"></img>
    </div>
  );
};
