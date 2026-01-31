import React from "react";
import Parent from "./Props/Parent";
import Section1 from "./UI Project/Section1/Section1";
import Section2 from "./UI Project/Section2/Section2";
import "remixicon/fonts/remixicon.css";

export default function App() {
  const users = [
    {
      img: "girl.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Designer",
    },
    {
      img: "man2.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Manager",
    },
    {
      img: "man3.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Programer",
    },
  ];
  return (
    <div>
      <Section1 />
      <Section2 />
      {/* <Parent /> */}
    </div>
  );
}
