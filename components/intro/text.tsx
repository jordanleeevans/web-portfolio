import React from "react";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { useRoughNotationAnimation } from "@/hooks/useRoughNotationAnimation";
import { useActiveTheme } from "@/context/active-theme-context";

export default function IntroText() {
  const { ref, inView, animationDelay } = useRoughNotationAnimation();
  const { theme } = useActiveTheme();
  return (
    <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
    >
      <span className="mx-[0.1rem]">{"Hello, I'm"}</span>
      <RoughNotation
        type="highlight"
        show={inView}
        color={theme === "light" ? "#ffc379" : "#78716c"}
        animationDelay={animationDelay}
        padding={[0, 0]}
        multiline={true}
      >
        <span className="font-bold ml-2"> Jordan Evans. </span>
      </RoughNotation>
      <span className="mx-[0.2rem]">A data driven</span>
      <span className="font-bold"> software engineer</span>,
      <span className="font-bold"> data engineer </span>
      and
      <span className="font-bold"> data scientist. </span>
      On a{" "}
      <RoughNotation
        type="underline"
        color={theme === "light" ? "#fd7f7f" : "#94a3b8"}
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
