import React from "react";
import Parent from "./Props/Parent";
import Section1 from "./UI Project/Section1/Section1";
import Section2 from "./UI Project/Section2/Section2";
import "remixicon/fonts/remixicon.css";
import { motion } from "motion/react";
motion

export default function App() {
  const users = [
    {
      img: "girl.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Designer",
    },
    {
      img: "man2.jpg",
      para: "Thios iais mthe good aole, map",
      btn: "Manager",
    },
    {
      img: "man3.jpg",
      para: "li am the biy who is billones",
      btn: "Programer",
    },
    {
      img: "man.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Programer",
    }, {
      img: "girl.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Designer",
    },
    {
      img: "man2.jpg",
      para: "Thios iais mthe good aole, map",
      btn: "Manager",
    },
    {
      img: "man3.jpg",
      para: "li am the biy who is billones",
      btn: "Programer",
    },
    {
      img: "man.jpg",
      para: "lorem13 wjddncw ubc dfi aideu  uie dqiu duif",
      btn: "Programer",
    }, 
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      {/* <Parent /> */}
    </div>
  );
}
