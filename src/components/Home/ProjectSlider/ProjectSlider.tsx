"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./projectSlider.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

interface ProjectProps {
  src: string;
  title: string;
  description: string;
  category: string;
}

const ProjectSlider = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <div className="relative w-full h-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0}
        keyboard={{ enabled: true, pageUpDown: true }}
        mousewheel={{ enabled: true, sensitivity: 1 }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 25,
          modifier: 2,
          slideShadows: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="relative flex flex-col items-center between rounded-lg overflow-hidden transform transition-all duration-1000 projectSlider bg-background"
          >
            {/* Project Image */}
            <div className="relative w-full min-h-[400px] flex-1 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300"
              />
            </div>
            <div className="dummyProjectInfo"></div>

            {/* Project Information - Only shows on active slide */}
            <div className="w-full absolute bg-gradient-to-t from-primary to-transparent p-4 bottom-0 left-0 h-[25%] pt-2 project-info text-center pt-12 rounded-lg transform transition-transform duration-500 ease-in-out opacity-0 translate-y-0">
              <h3 className="text-white font-bold text-xl font-josefin-sans mb-2">{project.title}</h3>
              {/* <p className="text-sm text-white/90 font-montserrat mb-3 px-4">{project.description}</p> */}
              <span className="inline-block bg-royal text-white px-3 py-1 rounded-full text-xs font-montserrat">
                {project.category}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination swiper-pagination mt-6 flex justify-center gap-2"></div>
    </div>
  );
};

export default ProjectSlider;
