/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
          <span className="absolute bottom-0 right-0 text-4xl">✌️</span>
        </div>
      </div>
    </section>
  );
}
