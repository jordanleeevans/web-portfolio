"use client";
import SectionHeading from "@/components/section-heading";
import React, { useState, useEffect, useMemo } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRoughNotationAnimation } from "@/hooks/rough-notation";

export default function About() {
  const { ref, inView, animationDelay } = useRoughNotationAnimation();
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
      id="about"
    >
      <RoughNotation
        type="box"
        show={inView}
        color="#bae1ff"
        animationDelay={animationDelay}
        strokeWidth={4}
      >
        <SectionHeading>About Me</SectionHeading>
      </RoughNotation>
      <p className="mb-3">
        Graduating from the University of Bristol with a degree in{" "}
        <b>Physics</b> during the chaotic year that was 2020, I decided to
        explore the world of <i>software engineering</i>. During my time at
        university, I enrolled in a few coding courses and found that it was a
        great blend of problem-solving and creativity. Fast forward to today, I
        am now a <b>software engineer</b> at Cubed - a SaaS company that
        provides channel marketing solutions using <i>machine learning</i> and{" "}
        <i>data analytics</i>. My stack includes <b>MySQL</b>,{" "}
        <b>Python (Django)</b>, and <b>React</b>. I am also familiar with{" "}
        <b>TypeScript</b>, <b>Ansible</b> and <b>Docker</b>.
      </p>
      <p>
        Outside of work, you can find me playing video games, like the
        stereotypical developer, or <i>skateboarding</i>...not so much like the
        stereotypical developer. I also love self-improvement and learning. I am
        in the process of learning my mother tongue, <b>Welsh</b>, and I am
        developing a home lab where I can experiment with different technologies
        and tools.
      </p>
    </motion.section>
  );
}
