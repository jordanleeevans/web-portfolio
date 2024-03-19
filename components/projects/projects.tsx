"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import TagList from "@/components/projects/tag-list";

export default function Projects() {
  return (
    <section>
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

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section
      className={`group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition ${
        isExpanded && tags.length > 4 ? "sm:h-auto" : "sm:h-[20rem]"
      }`}
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <TagList
          tags={tags}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        height={300}
        width={300}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-200 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3"
      />
    </section>
  );
}
