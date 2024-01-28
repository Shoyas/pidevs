import Marquee from "react-fast-marquee";
import projectOne from "../../../assets/projects-img/pc-builder-1.webp";
import projectTwo from "../../../assets/projects-img/athena-1.webp";
import projectThree from "../../../assets/projects-img/creative-agency-1.webp";
import projectFour from "../../../assets/projects-img/e-school-1.webp";
import projectFive from "../../../assets/projects-img/hot-gadget-1.webp";
import projectSix from "../../../assets/projects-img/power-x-1.webp";
import projectSeven from "../../../assets/projects-img/reform-car-hunter-1.webp";

const DoneProjectArea = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-7xl font-semibold text-center text-[#0C5ADB]">35+</h1>
      <h1 className="text-4xl font-semibold text-center text-[#453F41]">
        Projects we have done
      </h1>
      <Marquee pauseOnHover={true} className="mt-20 mb-20">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 w-96">
            <img src={projectOne} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectTwo} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectThree} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectFour} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectFive} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectSix} alt="project-image" />
          </div>
          <div className="flex items-center gap-2 w-96">
            <img src={projectSeven} alt="project-image" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default DoneProjectArea;
