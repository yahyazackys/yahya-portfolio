// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/stitmuaraenim.png",
        },
        {
          title: "title",
          path: "/hayed.png",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {" "}
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image alt="" src={image.path} width={500} height={300} />{" "}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(65,47,123)] via-[rgba(89,65,169)] opacity-0 group-hover:opacity-80 transition-all duration-700">
                        {" "}
                      </div>{" "}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] xl:text-[15px] tracking-[0.2em]">
                          <div className="delay-100 uppercase"> Live </div>{" "}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase">
                            Project{" "}
                          </div>{" "}
                          <div className="translate-y-[500%] group-hover:translate-y-0 text-xl transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </SwiperSlide>
        );
      })}{" "}
    </Swiper>
  );
};

export default WorkSlider;
