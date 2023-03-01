import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex items-center justify-between py-8 px-12">
      {/* Logo */}
      <div>
        <a href="#" className="text-2xl font-bold uppercase text-[#64ffda]">
          Franck
        </a>
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex justify-center space-x-8 text-[#b4bede] font-mono">
          <li>
            <a href="#" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">01.</span>Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">02.</span>About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">03.</span>Work
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">04.</span>Contact
            </a>
          </li>
        </ul>
        {/* Resume button*/}
        <div>
          <a
            href="#"
            className="text-[#64ffda] font-mono border-2 border-[#64ffda] px-4 py-3 rounded-md hover:bg-[#64ffdb13] transition"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "font-mono text-lg text-[#64ffda] absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <div className="text-left">
          <li className="py-6 text-2xl ">
            <a href="#">
              <span className="text-white ">01</span>.Home
            </a>
          </li>
          <li className="py-6 text-2xl">
            <a href="#">
              <span className="text-white ">02</span>.About
            </a>
          </li>
          <li className="py-6 text-2xl">
            <a href="#">
              <span className="text-white ">03</span>.Work
            </a>
          </li>
          <li className="py-6 text-2xl">
            <a href="#">
              <span className="text-white ">04</span>.Contact
            </a>
          </li>
        </div>
        <li className="py-2 mt-4 text-2xl border-2 px-5 border-[#64ffda] rounded-lg">
          <a href="#">Resume</a>
        </li>
      </ul>

      {/*  Hmaburger */}
      <div
        className="md:hidden text-[#64ffda] cursor-pointer z-10 text-2xl "
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
}
