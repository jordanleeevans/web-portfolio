"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/active-section";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref, inView } = useSectionInView("experience", 0.4);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solig rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #f3f4f6",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
