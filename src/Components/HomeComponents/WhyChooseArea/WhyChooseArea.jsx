import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

import iconOne from "../../../assets/1.png";
import iconTwo from "../../../assets/2.png";
import iconThree from "../../../assets/3.png";
import iconFour from "../../../assets/4.png";

const WhyChooseArea = () => {
  return (
    <div className="mt-20">
      <div className="mx-3 pt-20 grid md:grid-cols-3 grid-cols-1 gap-4 grid-flow-row-dense ">
        <div className="pt-5">
          <h1 className="text-2xl text-[#0C5ADB] font-semibold">
            WHY CHOOSE US
          </h1>
          <h4 className="text-4xl text-[#453F41] pt-5">
            Save your time with <br />a lot of features
          </h4>
        </div>

        <div className="col-span-2">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            <SwiperSlide>
              <div className="w-32 h-32">
                <img src={iconOne} alt="icon" />
              </div>
              <h1 className="font-semibold text-[#453F41]">Fast Performance</h1>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 h-32">
                <img src={iconTwo} alt="icon" />
              </div>
              <h1 className="font-semibold text-[#453F41]">Standard Code</h1>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 h-32">
                <img src={iconThree} alt="icon" />
              </div>
              <h1 className="font-semibold text-[#453F41]">
                Responsive Design
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 h-32">
                <img src={iconFour} alt="icon" />
              </div>
              <h1 className="font-semibold text-[#453F41]">Quick Support</h1>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseArea;
