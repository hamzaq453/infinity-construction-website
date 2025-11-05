"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialSlider.css";
import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";


interface CardContent {
  stars: number;
  content: string;
  avator: string;
  name: string;
  designation: string;
}
const slides: CardContent[] = [
  {
    stars: 5,
    content:
      `Infinity Construction delivered quality work on our project. Their attention to detail exceeded expectations. Highly recommended!`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Farasat Mahmood",
    designation: "AWT Housing",
  },
  {
    stars: 5,
    content:
      `Outstanding commercial construction services. The team was punctual, professional, and delivered our office building ahead of schedule.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Qadeer Mohammad",
    designation: "Faazia Housing",
  },
  {
    stars: 5,
    content:
    `Excellent renovation work on our historic building. They preserved the original character while modernizing the infrastructure perfectly.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Syed Amjad Ahmad",
    designation: "Canal Garden",
  },
  {
    stars: 5,
    content:
      `Professional, reliable, and skilled team. They transformed our vision into reality with exceptional craftsmanship and attention to detail.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Adeel Qureshi",
    designation: "Phase 7 DHA",
  },
  {
    stars: 5,
    content:
    `Infinity Construction made our dream home a reality. Their expertise in custom construction and project management was outstanding.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Usman Zia",
    designation: "Phase 1 DHA",
  },
  {
    stars: 5,
    content:
    `Reliable, professional, and delivers quality work every time. They've been our go-to construction company for multiple projects.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Shahzad Ahmad",
    designation: "Valencia",
  },
  {
    stars: 5,
    content:
    `Exceptional service from start to finish. The team's communication, quality of work, and project management were top-notch.`,
    avator: "/images/home/testimonials/avator1.png",
    name: "Javed Iqbal",
    designation: "Sui Gas",
  },
];

const SwiperExample: React.FC = () => {
  return (
    <>
      <div className="py-10">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-3">
          <div className="">
            <Swiper
              className="testimonialSlider"
              modules={[Pagination, Navigation, Autoplay]}
              centeredSlides={false}
              initialSlide={6}
              spaceBetween={0}
              slidesPerView={2.5}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".testimonials-pagination",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                  spaceBetween: 40,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 1.7,
                  spaceBetween: 10,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <TestimonialsCard
                    stars={slide.stars}
                    content={slide.content}
                    avator={slide.avator}
                    name={slide.name}
                    designation={slide.designation}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-7 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
            <div className="testimonials-pagination swiper-pagination"></div> 
            <div className="flex items-center gap-8">
              <div
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
                data-carousel-prev
              >
                <span className="group-hover:text-white size-8 text-primary"><HiArrowLeft /></span>
              </div>
              <div
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-primary w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
                data-carousel-next
              >  <span className="group-hover:text-white size-8 text-primary"><HiArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperExample;
