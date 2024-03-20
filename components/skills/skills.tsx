"use client";
import SectionHeading from "@/components/section-heading";
import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/active-section";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              key={index}
              className="inline-flex h-12 animate-shimmer delay-[2000ms] items-center justify-center rounded-md border border-gray-300 bg-[linear-gradient(110deg,#f3f4f6,45%,#d1d5db,55%,#f3f4f6)] bg-[length:200%_100%] px-6 font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
