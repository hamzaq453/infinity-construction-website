import React from "react";
import SwiperExample from "./TestimonialSlider";

const testimonials: React.FC = () => {
    return (<>
    <div>
        <div className="text-foreground flex flex-col gap-5 justify-center items-center lg:py-16 pt-8 pb-2">
          {/* <h2 className="bg-primary rounded-full py-1 px-4 tracking-widest text-white xl:text-sm text-xs font-montserrat">
            Reviews
          </h2> */}
          <h1 className="mt-1 xl:text-6xl md:text-3xl sm:text-2xl text-2xl font-bold font-josefin-sans tracking-wide leading-tight">
            What <span className="text-primary">Our Clients </span>Say
          </h1>
          <p className="text-center mt-1 w-[90%] md:w-[60%] font-montserrat md:text-lg text-[14.5px] text-foreground/80">
            Hear from our clients about their experience working with us.
          </p>
        </div>
        <SwiperExample/>
      </div>
    </>);
};

export default testimonials;