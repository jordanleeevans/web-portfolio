import React from "react";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { useRoughNotationAnimation } from "@/hooks/rough-notation";
export default function IntroText() {
  const { ref, inView, animationDelay } = useRoughNotationAnimation();
  return (
    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
    >
      Hello, I'm
      <RoughNotation
        className="mx-2 my-10"
        type="highlight"
        show={inView}
        color="#ffc379"
        animationDelay={animationDelay}
        padding={[0, 0]}
        multiline={true}
      >
        <span className="font-bold ml-2"> Jordan Evans. </span>
      </RoughNotation>
      A data driven
      <span className="font-bold"> software engineer</span>,
      <span className="font-bold"> data engineer </span>
      and
      <span className="font-bold"> data scientist. </span>
      On a{" "}
      <RoughNotation
        type="underline"
        color="#fd7f7f"
        show={inView}
        animationDelay={animationDelay}
        padding={[0, 0]}
        multiline={true}
      >
        da-ta-day
      </RoughNotation>{" "}
      basis I solve problems and build things with code👍🏼
    </motion.h1>
  );
}
