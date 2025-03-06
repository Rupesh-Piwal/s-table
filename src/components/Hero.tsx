"use client";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroBanner from "../../public/herobanner.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between sm:px-6 py-8 sm:py-12">
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] -z-10">
        <motion.div
          className="w-full h-full rounded-full bg-[#707070] opacity-30 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] -z-10">
        <motion.div
          className="w-full h-full rounded-full bg-[#000000] opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      <motion.div
        className="text-center lg:text-left z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#000000] leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
          >
            Optimize
          </motion.span>{" "}
          <motion.span
            className="text-[#707070]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
          >
            Your <br /> Performance For
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.7,
            }}
          >
            JEE, NEET,
          </motion.span>{" "}
          <motion.span
            className="text-[#707070]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.9,
            }}
          >
            and
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 1.1,
            }}
          >
            Boards
          </motion.span>
        </h2>

        <motion.p
          className="text-[#7B7B7B] font-normal text-base sm:text-lg lg:text-[20px] mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: "easeOut",
          }}
        >
          Your personal AI-Tutor for all academic needs. Whether it's school
          exams, <br className="hidden md:block" /> boards, or competitive
          exams, we plan, manage, and help you clear your{" "}
          <br className="hidden md:block" /> doubts instantly. For students of
          class 10th, 11th, and 12th (CBSE) and{" "}
          <br className="hidden md:block" /> preparing for all medical or
          engineering entrance exams.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 1.5,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Link
              className="w-full sm:w-[219px] h-[42px] text-[#E5E5E5] bg-[#000000] text-sm sm:text-[17px] font-semibold py-1.5 px-4 rounded-md text-center flex items-center justify-center shadow-sm"
              href="/"
            >
              Apply for admission
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Link
              className="flex flex-row items-center gap-2 text-sm sm:text-[17px] font-medium text-[#000000] hover:text-[#707070] transition-colors duration-300"
              href="/"
            >
              Sign In <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 lg:mt-0 z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: 0.8,
        }}
      >
        <motion.div
          whileHover={{
            y: -8,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
        >
          <Image src={HeroBanner} alt="Hero Banner" width={450} height={400} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
