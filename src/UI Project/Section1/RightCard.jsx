import React from "react";
import RightCardContent from "./RightCardContent";

export default function RightCard(props) {
  return (
    <div className="h-full w-72 border relative rounded-3xl overflow-hidden shrink-0">
      <img
        className="h-full w-full object-cover"
        src={props.img} 
        alt="man"
      />
      <RightCardContent/>
    </div>
  );
}
