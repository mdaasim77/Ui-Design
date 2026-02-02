import { motion } from "motion/react";
import RightCard from "./RightCard";

export default function RightContent(props) {
  console.log("Right content");
  console.log(props.users);
  return (
    <div
      id="rightcard"
      className="p-6 overflow-x-auto h-full w-2/3"
    >
      <motion.div
      className=" flex gap-10 flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {props.users.map((elem, idx) => {
          return (
            <RightCard
              key={idx}
              id={idx}
              img={elem.img}
              para={elem.para}
              btn={elem.btn}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
