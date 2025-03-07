"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-6">
      <div className="container mx-auto px-4">
        <Link href="/" className="flex justify-center items-center group">
          <h1 className="text-4xl tracking-tight text-primary transition-colors">
            <span className="font-normal">STUDY</span>
            <span className="font-bold">table</span>
            <span className="block h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300 ease-in-out" />
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
