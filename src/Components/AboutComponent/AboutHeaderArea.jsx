import aboutImage from "../../assets/about.webp";

const AboutHeaderArea = () => {
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 items-center justify-center mt-5">
        <div className="mb-2">
          <img src={aboutImage} alt="pidevs-image" />
        </div>
        <div className="mb-2">
          <h1 className="text-5xl font-semibold text-[#453F41]">
            About PiDevs
          </h1>
          <h4 className="text-xl mt-5 text-[#453F41]">
            At PiDevs, we are passionate about transforming your ideas into
            visually stunning and impactful digital experiences.
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 items-center justify-center mt-5">
        <div className="mb-2">
          <h1 className="text-5xl font-semibold text-[#453F41]">
            About PiDevs
          </h1>
          <h4 className="text-xl mt-5 text-[#453F41]">
            At PiDevs, we are passionate about transforming your ideas into
            visually stunning and impactful digital experiences.
          </h4>
        </div>

        <div className="mb-2">
          <img src={aboutImage} alt="pidevs-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeaderArea;
