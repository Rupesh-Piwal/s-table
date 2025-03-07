import React from "react";
import { RiPushpinFill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#1B1B1B] p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <div className="mb-6 md:mb-0">
          <h2 className="text-[#A3A3A3] text-2xl md:text-3xl lg:text-[42px] font-semibold">
            Studytable
          </h2>
          <p className="text-[#A3A3A3] text-sm md:text-base lg:text-[16px] font-semibold">
            © Copyright 2025 Studytable
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-auto">
          <div className="md:self-start">
            <Link
              className="bg-[#ECECEC] text-[#000000] flex flex-row gap-2 items-center px-4 py-2 rounded-[3px] w-fit"
              href="/"
            >
              <span className="text-lg">
                <RiPushpinFill />
              </span>
              <span>Notice Board</span>
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-[#EDEDED]">
            <h3 className="font-medium">Socials</h3>
            <p className="flex items-center gap-2">
              <span className="text-lg">
                <FaInstagram />
              </span>
              <span>Instagram</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">
                <FaWhatsapp />
              </span>
              <span>WhatsApp</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[#EDEDED]">
            <h3 className="font-medium">Blogs</h3>
            <div className="space-y-1">
              <p>How we plan learning session?</p>
              <p>How we plan assessment session?</p>
              <p>How we manage student life?</p>
              <p>The effective student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};