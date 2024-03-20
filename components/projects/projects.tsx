"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/active-section";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <section ref={ref} id="projects" className="scroll-m-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
