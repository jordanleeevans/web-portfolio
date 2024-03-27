"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import { useActiveTheme } from "@/context/active-theme-context";

export default function Experience() {
  const isClient = typeof window !== "undefined";
  const threshold = isClient && window.innerWidth > 640 ? 0.5 : 0.01;
  const { ref, inView } = useSectionInView("Experience", threshold);
  const { theme } = useActiveTheme();

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
    <section id="experience" ref={ref} className="mb-28">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.1)",
                boxShadow: "none",
                border: "1px solig rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid #f3f4f6"
                    : "7px solid rgba(255, 255, 255, 0.1)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "#f3f4f6" : "#29303d",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-400">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
