import github from "../assets/github2.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

export default function Contact() {
  return (
    <div
      className="container mx-auto px-16 mt-48 md:max-w-screen-lg"
      id="Contact"
    >
      <h3 className="text-[#ccd6f6] text-2xl font-mono">
        <span className="text-[#64ffda] font-mono">03.</span>Contact Me
      </h3>

      <div className="mt-10">
        <p className="text-[#8892b0] font-['Rubik']">
          You can contact me through these platforms, i'm always open for
          discussions and opportunities.
        </p>

        <div className="flex mt-4 space-x-2">
          <a href="https://github.com/francksharif" target="_blank">
            {" "}
            <img src={github} alt="github icon" />
          </a>
          <a
            href="linkedin.com/in/franck-sharif-badini-58700a205"
            target="_blank"
          >
            {" "}
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="badinisharif23@gmail.com" target="_blank">
            <img src={mail} alt="mail icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
