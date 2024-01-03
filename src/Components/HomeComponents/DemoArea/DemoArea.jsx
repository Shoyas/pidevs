import CheckIcon from "../../icons/checkIcon";

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

      <div className="mt-10 text-center ">
        <h1>Here will be demo. Designed will get from Sagor.</h1>
      </div>
    </div>
  );
};

export default DemoArea;
