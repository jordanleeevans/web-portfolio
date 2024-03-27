"use client";
import SectionHeading from "@/components/section-heading";
import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

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

const fadeOutAnimationVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  const isClient = typeof window !== "undefined";
  const threshold = isClient && window.innerWidth > 640 ? 0.5 : 0.3;
  const { ref, inView } = useSectionInView("Skills", threshold);
  return (
    <motion.section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
      variants={fadeOutAnimationVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              key={index}
              className="inline-flex h-12 animate-shimmer delay-[2000ms] items-center justify-center rounded-md border border-gray-300 bg-[linear-gradient(110deg,#f3f4f6,45%,#d1d5db,55%,#f3f4f6)] bg-[length:200%_100%] px-6 font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:bg-[linear-gradient(110deg,#1a202c,45%,#2d3748,55%,#1a202c)] dark:border-gray-700 dark:text-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
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
    </motion.section>
  );
}
