"use client";
import React from "react";
import TeamSlider from "./TeamSlider";
import Link from "next/link";
import teamData from "@/data/teamData.json";

const TeamSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-10 md:gap-4 xl:px-20 lg:px-12 py-12 bg-card-foreground">
      {/* Left Section */}
      <div className="md:w-[80%] w-[85%] lg:w-[50%] h-full flex flex-col justify-center">
        <div className="flex flex-col gap-2 justify-between">
          <h2 className="bg-[#252525] rounded-br-full md:py-1 py-1 px-4 tracking-widest rounded-tr-full uppercase text-white xl:text-sm text-xs font-extralight w-fit inline-block">
            Experts
          </h2>
          <h1 className="xl:mt-2 mt-1 xl:text-4xl md:text-3xl sm:text-2xl text-2xl font-black tracking-wider leading-tight uppercase">
            Meet Our {"  "}
            <span className="text-[#3FD1E1]">Team</span>
          </h1>
          <div className="lg:w-[90%] text-justify w-full space-y-2 md:py-8 py-4 font-thin md:text-base text-[14.5px]">
            <p>
              Dev&apos;s Inn Technologies, your gateway to cutting-edge IT
              services for businesses and brands. We are your strategic
              partner in navigating the ever-evolving digital landscape. With
              a relentless commitment to innovation and excellence.
            </p>
            <p>
              We provide tailored IT solutions that empower your organization
              to thrive in the modern world.
            </p>
          </div>
          <Link
            href="/services"
            className="bg-theme-gradient md:py-[10px] py-2 text-white md:px-5 px-3 rounded-full text-sm sm:text-base font-normal inline-block tracking-wide w-fit lg:my-2 mb-7"
          >
            Our Services
          </Link>
        </div>
      </div>
      {/* Right Section (Team Slider) */}
      <div className="lg:w-[628px] md:w-[635px] w-[280px] h-full lg:px-0">
        <TeamSlider images={teamData} />
      </div>
    </div>
  );
};

export default TeamSection;
