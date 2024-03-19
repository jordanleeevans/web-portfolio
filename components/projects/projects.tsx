"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

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

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: Project) {
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
        <ul className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, isExpanded ? tags.length : 4).map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
          {tags.length > 4 && !isExpanded && (
            <li
              className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              +{tags.length - 4}
            </li>
          )}
          {isExpanded && (
            <li
              className="bg-red-500 hover:bg-red-700 transition-colors duration-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full cursor-pointer"
              onClick={() => setIsExpanded(false)}
            >
              - Less
            </li>
          )}
        </ul>
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
