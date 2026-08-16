"use client";
import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`fixed ${navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"} z-50 h-[12vh] w-full transition-all duration-20 `}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white">
            <FaCode className="h-5 w-5 text-black" />
          </div>

          <div>
            <h1 className="hidden text-xl font-bold text-white sm:block md:text-2xl">
              Rishabh
            </h1>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center space-x-10 lg:flex">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base font-medium text-white transition-all duration-200 hover:text-cyan-300"
              >
                {link.Label}
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4">
          {/* cv-button */}
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2 ">
            <BiDownload className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
