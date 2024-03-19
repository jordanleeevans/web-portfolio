import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
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
  );
}
