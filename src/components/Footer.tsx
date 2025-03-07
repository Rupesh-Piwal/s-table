import React from "react";
import { RiPushpinFill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1B1B1B] p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <div className="mb-6 md:mb-0 group">
          <Link
            href="/"
            className="text-[#A3A3A3] text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-semibold transition-colors duration-300 group-hover:text-white"
          >
            <span className="font-thin">Study</span>table
          </Link>
          <p className="text-[#A3A3A3] text-xs sm:text-sm md:text-base lg:text-[16px] font-semibold transition-opacity duration-300 group-hover:opacity-80">
            © Copyright 2025 Studytable
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-8 w-full md:w-auto">
          <div className="sm:self-start">
            <Link
              className="bg-[#ECECEC] text-[#000000] flex flex-row gap-2 items-center px-3 sm:px-4 py-2 rounded-[3px] w-fit transition-all duration-300 hover:bg-white hover:shadow-md hover:translate-y-[-2px]"
              href="/"
            >
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-12">
                <RiPushpinFill />
              </span>
              <span className="text-sm sm:text-base">Notice Board</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 text-[#EDEDED]">
            <h3 className="font-medium text-base sm:text-lg relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Socials
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-3">
              <p className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1 text-sm sm:text-base">
                <span className="text-base sm:text-lg text-pink-400 transition-transform duration-300 hover:scale-125">
                  <FaInstagram />
                </span>
                <span>Instagram</span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1 text-sm sm:text-base">
                <span className="text-base sm:text-lg text-green-400 transition-transform duration-300 hover:scale-125">
                  <FaWhatsapp />
                </span>
                <span>WhatsApp</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 text-[#EDEDED]">
            <h3 className="font-medium text-base sm:text-lg relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Blogs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1 sm:gap-2">
              <p className="transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer text-sm sm:text-base">
                How we plan learning session?
              </p>
              <p className="transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer text-sm sm:text-base">
                How we plan assessment session?
              </p>
              <p className="transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer text-sm sm:text-base">
                How we manage student life?
              </p>
              <p className="transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer text-sm sm:text-base">
                The effective student
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
