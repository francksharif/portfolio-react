import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-16 mt-10 mb-10 ">
      <div className="mb-16">
        <p className="text-[#64ffda] font-mono mb-6 text-lg ">Hi, my name is</p>
        <h1 className="text-5xl font-bold text-[#ccd6f6] font-['Rubik'] font-bold">
          Franck Badini.
        </h1>
        <h1 className="text-5xl font-bold text-[#8892b0] font-['Rubik'] font-bold">
          I build things with coding.
        </h1>
        <p className="text-[#8892b0] text-lg mt-4 font-['Rubik'] font-semibold">
          I'm a software engineer actually completing my last year of Bachelor.
          I'm currently working as a Fullstack Developer at
          <span className="text-[#64ffda]">
            <a href="#"> Kreezus.</a>
          </span>
        </p>
      </div>
      <div>
        <a
          href="#"
          className="text-[#64ffda] font-mono border-2 border-[#64ffda] px-5 py-5 rounded-sm  hover:bg-[#64ffdb13] transition"
        >
          Check my portfolio!
        </a>
      </div>
    </div>
  );
}
