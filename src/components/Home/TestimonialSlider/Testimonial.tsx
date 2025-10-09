import React from "react";
import SwiperExample from "./TestimonialSlider";

const testimonials: React.FC = () => {
    return (<>
    <div>
        <div className="text-foreground flex flex-col gap-5 justify-center items-center lg:py-10 pt-8 pb-2">
          <h2 className="bg-primary rounded-full py-1 px-4 tracking-widest text-white xl:text-sm text-xs font-montserrat">
            Reviews
          </h2>
          <h1 className="mt-1 xl:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold font-josefin-sans tracking-wider leading-tight">
            <span className="text-primary">
              Client
            </span>{" "}
            Testimonials
          </h1>
          <p className="text-center mt-1 w-[90%] md:w-[60%] font-montserrat md:text-base text-[14.5px] text-foreground/80">
            Building dreams into reality: your trusted partner in construction excellence
            with cutting-edge solutions for comprehensive building projects.
          </p>
        </div>
        <SwiperExample/>
      </div>
    </>);
};

export default testimonials;