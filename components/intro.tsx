"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/selfie.jpg"
              alt="Jordan Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.3,
              duration: 0.5,
            }}
          >
            ✌🏼
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm
        <RoughNotation
          className="mx-2 my-10"
          type="highlight"
          show={true}
          color="#ffc379"
          animationDelay={1000}
          padding={[0, 0]}
          multiline={true}
        >
          <span className="font-bold ml-2"> Jordan Evans. </span>
        </RoughNotation>
        A data driven
        <span className="font-bold"> software engineer</span>,
        <span className="font-bold"> data engineer </span>
        and
        <span className="font-bold"> data scientist. </span>
        On a{" "}
        <RoughNotation
          type="box"
          color="#fd7f7f"
          show={true}
          animationDelay={1500}
          padding={[0, 0]}
          multiline={true}
        >
          da-ta-day
        </RoughNotation>{" "}
        basis I solve problems and build things with code👍🏼
      </motion.p>
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl outline-none hover:scale-105 active:scale-95 border border-black/10"
        >
          Contact me{" "}
          <BsArrowRight className="inline opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center justify-center rounded-full font-medium text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 cursor-pointer border border-black/10"
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
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 cursor-pointer border border-black/10 focus:scale-110"
          href="https://www.linkedin.com/in/jordanleeevans"
          target="_blank"
        >
          <BsLinkedin className="text-2xl text-[#0077b5]" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:bg-gray-100 hover:shadow-xl outline-none hover:scale-105 active:scale-95 border border-black/10"
          href="https://github.com/jordanleeevans"
          target="_blank"
        >
          <FaGithubSquare className="text-2xl text-[#333] " />
        </a>
      </motion.div>
    </section>
  );
}
