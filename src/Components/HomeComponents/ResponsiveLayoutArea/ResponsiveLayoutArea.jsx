import { Link } from "react-router-dom";
import responsiveImageOne from "../../../assets/pidevs-layout.webp";

const ResponsiveLayoutArea = () => {
  return (
    <div className="mt-20 mx-3">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 items-center justify-center mt-5">
        <div className="mb-2">
          <img src={responsiveImageOne} alt="pidevs-image" />
        </div>
        <div className="mb-2">
          <h1 className="text-5xl font-semibold text-[#453F41]">
            Responsive Layout <br />
            Retina Ready Design
          </h1>
          <h4 className="text-xl mt-5 text-[#453F41]">
            All the pages of our designed website are responsive. We used CSS
            framework & RAW CSS to build the website.
          </h4>
          <div className="hidden lg:block mt-5">
            <Link
              to="/works"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group"
            >
              <span className="w-60 h-48 rounded rotate-[-40deg] bg-[#0C5ADB] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Check It Live
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayoutArea;
