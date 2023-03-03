import arrow from "../assets/right-arrow.png";

export default function About() {
  return (
    <div
      className="container mx-auto px-16 mt-48 md:max-w-screen-lg"
      id="About"
    >
      <h3 className="text-[#ccd6f6] text-2xl font-mono">
        <span className="text-[#64ffda] font-mono">01.</span>About Me
      </h3>

      <div className="mt-10">
        <p className="text-[#8892b0] font-['Rubik']">
          My name Is Franck, i'm currently in my last year of Computer Science
          Bachelor at Shenyang University of Chemical Technology in China. and
          i'm working as a part time Fullstack Developer at Kreezus. My interest
          is in web development, artificial intelligence and blockchain
          technologies.
        </p>
        <p className="text-[#8892b0] font-['Rubik'] mt-2">
          Here are the technologies i work the most with:
        </p>
        <div className="flex space-x-14 mt-6 font-mono text-sm">
          <div>
            <ul>
              <li className="flex items-center  mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Javascript</span>
              </li>

              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Python</span>
              </li>

              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Django</span>
              </li>

              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">React.Js</span>
              </li>
            </ul>
          </div>

          <div>
            <ul className="font-mono">
              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Node.Js</span>
              </li>
              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Express.Js</span>
              </li>
              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Git</span>
              </li>
            </ul>
          </div>

          <div>
            <ul className="font-mono">
              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Firebase</span>
              </li>

              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">PostgreSQL</span>
              </li>
              <li className="flex items-center mb-1">
                <img src={arrow} alt="" />
                <span className="text-[#64ffda]">Linux</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
