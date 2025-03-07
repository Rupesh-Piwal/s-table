import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const MidSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 items-start bg-[#2A2A2A] text-white p-12 rounded-lg shadow-xl">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
          How We Came to This
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          We observed and researched for three years across a variety of
          students. We found that the best students need more attention to excel
          further, while those struggling need more attention to improve their
          abilities. Every student deserves personal attention. Based on the
          principle of "Personal Attention," we built our algorithm and AI tutor
          to cater to each child uniquely…
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
      <div className="flex flex-col gap-3 items-center justify-center lg:h-[400px]">
        <h2 className="lg:text-[38px] font-semibold text-center">
          Carfted for your all academic needs
        </h2>
        <Link
          className="lg:w-[176px] text-center bg-[#212121] px-[10px] py-[6px] rounded-[5px] text-[#E5E5E5]"
          href="/"
        >
          Get your Entry
        </Link>
      </div>
    </div>
  );
};

export default MidSection;
