import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Multi-touch Page Attribution",
    description:
      "Implemented a deep neural net for multi-touch page attribution, involving end-to-end data pipeline creation and AWS infrastructure leveraging.",
    tags: [
      "Python",
      "AWS",
      "MySQL",
      "TensorFlow",
      "Sci-kit Learn",
      "Pandas",
      "ETL",
    ],
    imageUrl: "/corpcomment.png",
  },
  {
    title: "Keyword Content Analysis",
    description:
      "Developed a keyword content analysis tool that scrapes a client’s website and scores SEO keywords against the website content.",
    tags: ["Python", "Web Scraping", "ETL", "tf-idf"],
    imageUrl: "/wordanalytics.png",
  },
  {
    title: "Self-hosting services with Docker",
    description:
      "Repurposed an old PC as a server to host various services through Docker, maintained using Infrastructure as Code via Ansible playbooks.",
    tags: ["Docker", "Ansible", "Cyber Security", "Networking"],
    imageUrl: "/wordanalytics.png",
  },
  {
    title: "Development of a Multi-threaded Google Trends Data Scraper",
    description:
      "Developed a multi-threaded Python cron job that scrapes Google Trends data, employing strategies to reduce rate limiting.",
    tags: ["Python", "Web Scraping", "Google Trends", "Multi-threading"],
    imageUrl: "/wordanalytics.png",
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "TensorFlow & Keras",
  "Sci-kit Learn",
  "Pandas",
  "Docker",
  "Ansible",
  "AWS",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
