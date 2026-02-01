import React from "react";
import RightCardContent from "./RightCardContent";

export default function RightCard(props) {
  console.log("card is here");
  console.log(props.btn);
  console.log(props.para);
  return (
    <div className="h-full w-72 border relative rounded-3xl overflow-hidden shrink-0">
      <img
        className="h-full w-full object-cover"
        // src={img}
        src={`src/images/${props.img}`}
      />
      <RightCardContent para={props.para} btn={props.btn} />
    </div>
  );
}
