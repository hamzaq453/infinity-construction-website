"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiCheck, HiPlay } from "react-icons/hi";
import Image from "next/image";

const About = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const statistics = [
    { number: "500+", label: "Projects Complete" },
    { number: "98%", label: "Satisfaction Rating" },
    { number: "24/7", label: "Response Available" },
    // { number: "10+", label: "Years Of Experience" },
  ];

  const features = [
    "Locally Owned & Operated",
    "Certified Professionals",
    "Always Here For You 24/7",
    "Problem Solvers Heart",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Infinity Construction Team"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />

              {/* Experience Overlay */}
              <div className="absolute pt-0 pl-0 pr-5 pb-5 top-0 rounded-br-full bg-background  left-0 ">

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-accent-orange  pr-16 pb-16 pl-5 rounded-br-full py-3 shadow-lg border-background leading-tight"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-white font-josefin-sans">
                    10+
                  </div>
                  <div className="text-sm leading-tight text-white/90 font-montserrat">
                    Years Of<br></br>Experience
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Us Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-primary"></div>
                <HiArrowRight className="w-4 h-4 text-primary ml-1" />
              </div>
              <span className="text-primary font-semibold text-sm font-montserrat tracking-wide">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold text-foreground font-josefin-sans leading-tight"
            >
              <span className="block">Meet The Team Behind</span>
              <span className="block text-primary">Infinity Construction</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-foreground/80 font-montserrat leading-relaxed"
            >
              At Infinity Construction, we're more than just contractors - we
              are a team of dedicated problem solvers committed to keeping your
              construction dreams alive and your projects running smoothly.
            </motion.p>

            {/* Feature List */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <HiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-montserrat">{feature}</span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10 text-lg font-montserrat"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Get Construction Help
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Statistics and Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Statistics */}

          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary font-josefin-sans mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/70 font-montserrat">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
