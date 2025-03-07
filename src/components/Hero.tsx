"use client";
import Link from "next/link";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroBanner from "../../public/herobanner.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between sm:px-6 py-8 sm:py-12">
      {/* Background blobs */}
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

      {/* Content container */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-4 backdrop-blur-sm self-center lg:self-start"
        >
          <Sparkles size={16} className="text-black" />
          <span className="text-sm font-medium">AI-Powered Learning</span>
        </motion.div>

        {/* Main text content */}
        <motion.div
          className="text-center lg:text-left z-10 w-full"
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
              Your <br className="hidden lg:block" /> Performance For
            </motion.span>
            <br className="hidden lg:block" />
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
            className="text-[#7B7B7B] font-normal text-base sm:text-lg lg:text-[20px] mt-4 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: "easeOut",
            }}
          >
            Your personal AI-Tutor for all academic needs. Whether it's school
            exams, boards, or competitive exams, we plan, manage, and help you
            clear your doubts instantly. For students of class 10th, 11th, and
            12th (CBSE) and preparing for all medical or engineering entrance
            exams.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 mt-6"
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
              className="group"
            >
              <Link
                className="flex flex-row items-center gap-2 text-sm sm:text-[17px] font-medium text-[#000000] transition-colors duration-300 py-2"
                href="/"
              >
                <span className="relative">
                  Sign In
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300" />
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        className="mt-8 lg:mt-0 z-10 w-full lg:w-1/2 flex justify-center lg:justify-end"
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
          <Image
            src={HeroBanner}
            alt="Hero Banner"
            width={450}
            height={400}
            className="max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
