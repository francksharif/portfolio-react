import Project from "./Project";

export default function Work() {
  return (
    <div
      className="container mx-auto px-16 mt-48 md:max-w-screen-lg "
      id="Work"
    >
      <h3 className="text-[#ccd6f6] text-2xl font-mono">
        <span className="text-[#64ffda] font-mono">02.</span>My Portfolio
      </h3>

      {/** Projects */}
      <div className="md:grid md:grid-cols-2 gap-4">
        <Project />
      </div>
    </div>
  );
}
