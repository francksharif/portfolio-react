import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);
  return (
    <div className=" flex items-center justify-between mb-16 py-8 px-12 md:px-24 md:mb-32">
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
            <a href="#Home" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">01.</span>Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">02.</span>About
            </a>
          </li>
          <li>
            <a href="#Work" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">03.</span>Work
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-[#64ffda]">
              <span className="text-[#64ffda]">04.</span>Contact
            </a>
          </li>
        </ul>
        {/* Resume button*/}
        <div>
          <a
            href="#"
            className="text-[#64ffda] font-mono border-2 border-[#64ffda] px-4 py-3 rounded-sm hover:bg-[#64ffdb13] transition"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden md:hidden"
            : "font-mono text-lg text-[#64ffda] top-16 right-12 py-4 absolute bg-[#112240] flex flex-col justify-center items-center"
        }
      >
        <div className="text-left px-8 py-3">
          <li className="py-3 text-xl " onClick={handleClose}>
            <a href="#Home">
              <span className="text-white ">01</span>.Home
            </a>
          </li>
          <li className="py-3 text-xl" onClick={handleClose}>
            <a href="#About">
              <span className="text-white ">02</span>.About
            </a>
          </li>
          <li className="py-3 text-xl" onClick={handleClose}>
            <a href="#Work">
              <span className="text-white ">03</span>.Work
            </a>
          </li>
          <li className="py-3 text-xl" onClick={handleClose}>
            <a href="#Contact">
              <span className="text-white ">04</span>.Contact
            </a>
          </li>
        </div>
        <li
          className="py-1 mt-4 text-xl border-2 px-3 border-[#64ffda] rounded-sm"
          onClick={handleClose}
        >
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
