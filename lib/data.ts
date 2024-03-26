import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";

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
    title: "Digital Analytics Manager/Software Development",
    location: "X4 Software",
    description:
      "Fresh faced out of university, during the unprecedented year that was 2020, I enrolled in a digital analytics manager role at X4 Software. This quickly evolved into much more, as I took on software responibilities too. I ensured the web scraping logic was current using JavaScript, jQuery and Mocha.",
    icon: React.createElement(SiJavascript),
    date: "Nov 2020 - July 2021",
  },
  {
    title: "Data/Backend Engineer",
    location: "Yard",
    description:
      "Developed server-side logic and APIs using Python (Django) and MySQL, adhered to SOLID principles, and employed test-driven development. I created data pipelines and databases, and developed an OCR tool in a successful partnership with DAPTEC at Cardiff Met University.",
    icon: React.createElement(IoAnalytics),
    date: "Aug 2021 - June 2023",
  },
  {
    title: "Senior Software Engineer",
    location: "Cubed",
    description:
      "As a Senior Software Engineer at Cubed, I manage a high-volume data service handling over 100 million daily requests and oversee the AWS infrastructure. I independently develop deep learning models for complex problems, maintain numerous databases and cron commands, and enhance system monitoring and machine learning tools.",
    icon: React.createElement(FaPython),
    date: "June 2023 - Present",
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
    imageUrl: "/page-attribution.png",
  },
  {
    title: "Keyword Content Analysis",
    description:
      "Developed a keyword content analysis tool that scrapes a client’s website and scores SEO keywords against the website content.",
    tags: ["Python", "Web Scraping", "ETL", "tf-idf"],
    imageUrl: "/keyword-content-analysis-zoomed.png",
  },
  {
    title: "Self-hosting services with Docker",
    description:
      "Repurposed an old PC as a server to host various services through Docker, maintained using Infrastructure as Code via Ansible playbooks.",
    tags: ["Docker", "Ansible", "Cyber Security", "Networking"],
    imageUrl: "/home-lab.png",
  },
  {
    title: "Development of a Multi-threaded Google Trends Data Scraper",
    description:
      "Developed a multi-threaded Python cron job that scrapes Google Trends data, employing strategies to reduce rate limiting.",
    tags: ["Python", "Web Scraping", "Google Trends", "Multi-threading"],
    imageUrl: "/google-trends.png",
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
