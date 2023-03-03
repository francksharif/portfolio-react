import github from "../assets/github.png";
import link from "../assets/link.png";

export default function Project() {
  return (
    <div className=" p-5 shadow-2xl bg-[#112240] mt-14">
      <div>
        <h3 className="text-xl text-[#64ffda] font-semibold">Project Title</h3>
        <div className="my-6 mb-8">
          <p className="text-[#a8b2d1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            aliquid, voluptates ut nostrum hic dignissimos quasi nulla velit
            deleniti odio et? Atque consequuntur explicabo autem.
          </p>
        </div>
      </div>
      <div className="text-[#64ffda] font-mono  mb-5">
        <span>React </span>
        <span>Express </span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="flex items-center space-x-2">
        <a href="#" target="_blank">
          <img src={github} alt="github image" />
        </a>
        <a href="#" target="_blank">
          <img src={link} alt="link icon" />
        </a>
      </div>
    </div>
  );
}
