import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function ActionButtons() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        delay: 0.6,
        duration: 0.5,
      }}
    >
      <Link
        href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl outline-none hover:scale-105 active:scale-95 border border-black/10 dark:bg-gray-800 dark:text-gray-50"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        Contact me{" "}
        <BsArrowRight className="inline opacity-70 group-hover:translate-x-1 transition" />
      </Link>
      <a
        className="group bg-white text-gray-900 px-7 py-3 flex items-center justify-center rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 cursor-pointer border border-black/10 dark:bg-gray-500  dark:text-gray-50"
        href="/Jordan_Evans_CV.pdf"
        download
      >
        Download CV{" "}
        <HiDownload
          className="inline opacity-60 group-hover:translate-y-1 transition"
          target="_blank"
        />
      </a>
      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 cursor-pointer border border-black/10 focus:scale-110 dark:bg-gray-500 dark:text-gray-50"
        href="https://www.linkedin.com/in/jordanleeevans"
        target="_blank"
      >
        <BsLinkedin className="text-2xl text-gray-700 dark:text-gray-400" />
      </a>
      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 border border-black/10 dark:bg-gray-500 dark:text-gray-50"
        href="https://github.com/jordanleeevans"
        target="_blank"
      >
        <FaGithubSquare className="text-2xl text-gray-700 dark:text-gray-400" />
      </a>
    </motion.div>
  );
}
