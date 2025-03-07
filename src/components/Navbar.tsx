"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex justify-center items-center group">
          <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#707070] to-[#A3A3A3] p-1.5 mr-3 shadow-lg">
            <BookOpen className="h-6 w-6 text-[#191919]" />
          </div>

          <h1 className="text-3xl sm:text-4xl tracking-tight text-[#191919] transition-colors">
            <span className="font-normal">STUDY</span>
            <span className="font-bold">table</span>
            <span className="block h-0.5 w-0 group-hover:w-full bg-[#191919] transition-all duration-300 ease-in-out" />
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
