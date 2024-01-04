import CheckIcon from "../../icons/checkIcon";
import demoImageOne from "../../../assets/pic/Eventvibehub.png";
import demoImageTwo from "../../../assets/pic/GamerZone.png";
import demoImageThree from "../../../assets/pic/Starbucks.png";

const DemoArea = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-5xl font-semibold text-center text-[#0C5ADB] underline ">
        Stunning Demos
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 items-center justify-center mt-5">
        <div className="flex mb-2">
          <span className="bg-[#0C5ADB] rounded-full text-white mr-1">
            {" "}
            <CheckIcon />
          </span>
          <h4 className="font-semibold text-[#453F41]">Fast Performance</h4>
        </div>
        <div className="flex mb-2">
          <span className="bg-[#0C5ADB] rounded-full text-white mr-1">
            {" "}
            <CheckIcon />
          </span>
          <h4 className="font-semibold text-[#453F41]">SEO Standard Code</h4>
        </div>
        <div className="flex mb-2">
          <span className="bg-[#0C5ADB] rounded-full text-white mr-1">
            {" "}
            <CheckIcon />
          </span>
          <h4 className="font-semibold text-[#453F41]">Quick Support</h4>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-4">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="bg-gradient-to-br from-[#0C5ADB] via-[#453F41] to-[#0C5ADB] rounded-3xl p-7 "
        >
          <div className="h-96 transition-all">
            <img
              className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
              src={demoImageTwo}
              alt={demoImageTwo}
            />
          </div>
          <div className="group flex items-center justify-between mb-4 mt-3">
            <div className="">
              <h2 className="text-sm text-[#BCBCBC]">Gamer Zone</h2>
              <p className="text-white text-2xl font-medium">
                Online Games Shop
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="bg-gradient-to-br from-[#0C5ADB] via-[#453F41] to-[#0C5ADB] rounded-3xl p-7"
        >
          <div className="h-96 transition-all">
            <img
              className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
              src={demoImageOne}
              alt={demoImageOne}
            />
          </div>
          <div className="group flex items-center justify-between mb-4 mt-3">
            <div className="">
              <h2 className="text-sm text-[#BCBCBC]">Event Management</h2>
              <p className="text-white text-2xl font-medium">
                Online Event Management
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="bg-gradient-to-br from-[#0C5ADB] via-[#453F41] to-[#0C5ADB] rounded-3xl p-7"
        >
          <div className="h-96 transition-all">
            <img
              className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
              src={demoImageThree}
              alt={demoImageThree}
            />
          </div>
          <div className="group flex items-center justify-between mb-4 mt-3">
            <div className="">
              <h2 className="text-sm text-[#BCBCBC]">
                Coffee & Ice-cream Shop
              </h2>
              <p className="text-white text-2xl font-medium">
                Online Coffee & Ice-cream Shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoArea;
