"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import employees from "@/data/employees.json";
import slugify from "slugify";

interface ImageProps {
  src: string;
  name: string;
  designation: string;
  bgColor: string;
}

const generateSlug = (name: string) => slugify(name, { lower: true, strict: true });

const TeamSlider = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter(); // Next.js router for navigation

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
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 76.5,
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
          // renderBullet: (index, className) =>
          //   `<span class="${className} size-8 rounded-full" style="background-image:linear-gradient(to top, ${images[index].bgColor} 90%, transparent); margin: 0 5px;"></span>`,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative flex flex-col items-center between rounded-lg overflow-hidden transform transition-all duration-1000 teamSlider bg-theme-gradient"
            // style={{ backgroundColor: image.bgColor }}
            onClick={() => router.push(`/${generateSlug(image.name)}`)} // Navigate to portfolio page
          >
            {/* Image with gradient overlay */}
            <div className="relative w-full min-h-[300px] flex-1 overflow-hidden">
              <Image
                src={image.src}
                alt={image.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300"
              />
            </div>
            <div className="dummyTeamInfo"></div>

            {/* Name and Designation */}
            <div
              className="w-full absolute bottom-0 left-0 h-[40%] pt-16 team-info text-center rounded-lg transform transition-transform duration-500 ease-in-out opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-4"
              // style={{
              //   background: `linear-gradient(to top,  45%, transparent)`,
              // }}
              style={{
                background: `linear-gradient(to top, hsl(180, 69%, 58%), hsl(200, 85%, 51%),transparent)`,
              }}
            >
              <p className="text-white font-bold text-lg">{image.name}</p>
              <p className="text-sm text-white">{image.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination swiper-pagination mt-6 flex justify-center gap-2"></div>
    </div>
  );
};

export default TeamSlider;
