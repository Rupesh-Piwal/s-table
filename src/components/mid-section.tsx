"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MidSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 md:gap-8 items-start bg-[#2A2A2A] text-white p-4 md:p-12 rounded-lg shadow-xl">
        <h2 className="text-[20px] md:text-3xl lg:text-4xl font-semibold tracking-tight">
          How We Came to This
        </h2>
        <p className="text-[16px] md:text-lg text-gray-300 leading-relaxed lg:max-w-2xl font-thin">
          We observed and researched for three years across a variety of
          students. We found that the best students need more attention to excel
          further, while those struggling need more attention to improve their
          abilities. Every student deserves personal attention. Based on the
          principle of &quot;Personal Attention,&quot; we built our algorithm
          and AI tutor to cater to each child uniquely…
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-base font-medium text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <span className="relative">
              Read the Full Story
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center my-[30px] lg:h-[400px]">
        <h2 className="text-[18px] lg:text-[38px] font-bold text-center">
          Crafted for all your academic needs
        </h2>
        <motion.div
          className="mt-8 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="#"
            className="group bg-black text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            Get Your Entry
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="transition-opacity duration-300"
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MidSection;
