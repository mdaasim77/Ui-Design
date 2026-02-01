import { motion } from "motion/react";
import RightCard from "./RightCard";

export default function RightContent(props) {
  console.log("Right content");
  console.log(props.users);
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 500, opacity: 1 }}
      transition={{ duration: 1 }}
      id="rightcard"
      className="h-full w-2/3 p-6 flex gap-10 flex-nowrap overflow-x-auto"
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
  );
}
