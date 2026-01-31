import React from "react";
import RightCard from "./RightCard";

export default function RightContent(props) {
  return (
    <div className="h-full w-2/3 p-6 flex gap-10 flex-nowrap overflow-x-auto">
      {props.users.map(function (elem) {
        return <RightCard img={elem.img} />;
      })}
    </div>
  );
}
