import Typewriter from "typewriter-effect";
import imagesOne from "../../../assets/v1.png";
import imagesTwo from "../../../assets/v2.png";

const HeroArea = () => {
  return (
    <div className="mt-20 mx-3">
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-5xl font-semibold text-center text-[#453F41]">
          Create fast & powerful
        </h1>
        <div className="mx-auto">
          <h1 className="text-5xl font-semibold text-center flex text-[#453F41]">
            website for&nbsp;
            <span className="text-[#0C5ADB] underline">
              <Typewriter
                options={{
                  strings: [
                    "Web Agency ",
                    "Digital Agency",
                    "Creative Agency",
                    "Marketing Agency",
                    "Corporate",
                    "Portfolio",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <h4 className="text-xl z-10 text-center text-gray-500">
          Let your creativity shine and start <br />
          building your website today and impress your visitors.
        </h4>
      </div>
      <div className="flex ">
        <div className="w-96 rotate-45 flex-none ">
          <img src={imagesOne} alt="PiDevs" />
        </div>
        <div className="grow">{""}</div>
        <div className="w-96 rotate-[-45deg] flex-none">
          <img src={imagesTwo} alt="PiDevs" />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
