"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const About1 = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const statistics = [
    {
      number: "26+",
      label: "Years of Experience",
      description: "Years of experience in sustainable building",
      color: "bg-foreground/10 text-foreground border-foreground/20",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "We prioritize quality of client satisfaction",
      color: "bg-primary text-white border-primary",
    },
    {
      number: "800+",
      label: "Projects Completed",
      description: "We have diverse successful projects",
      color: "bg-royal text-white border-royal",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="text-center mb-16">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-josefin-sans leading-tight"
          >
            At Infinity Construction, we specialize in delivering reliable, innovative, and high-quality construction services.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/80 font-montserrat max-w-4xl mx-auto leading-relaxed"
          >
            With a dedicated team and years of experience, we turn your visions into durable, functional spaces—on time and on budget. From residential to commercial builds, Infinity Construction stands for precision, trust, and excellence in every project.
          </motion.p>
        </div>

        {/* Statistics and CTA Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10  lg:items-start items-center">
          {/* Left Side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 w-[80%]"
          >
            {/* Statistics Grid - Overlapping Circles with Different Sizes */}
            <div className="relative flex items-center justify-center py-8 sm:py-12">
              {/* First Circle - Smallest */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-10 text-center"
              >
                <div className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[0].color}`}>
                  <div className="text-lg sm:text-2xl lg:text-4xl font-bold font-josefin-sans">
                    26+
                  </div>
                  <div className="text-xs sm:text-sm font-montserrat text-center px-1 leading-tight">
                    Years of <br></br>Experience
                  </div>
                </div>
              </motion.div>

              {/* Second Circle - Medium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-20 text-center -ml-4 sm:-ml-6 lg:-ml-8"
              >
                <div className={`w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[1].color}`}>
                  <div className="text-xl sm:text-3xl lg:text-5xl font-bold font-josefin-sans">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm font-montserrat text-center px-2 leading-tight">
                    Client Satisfaction
                  </div>
                </div>
              </motion.div>

              {/* Third Circle - Largest */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-30 text-center -ml-4 sm:-ml-6 lg:-ml-8"
              >
                <div className={`w-40 h-40 sm:w-48 sm:h-48 lg:w-68 lg:h-68 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[2].color}`}>
                  <div className="text-2xl sm:text-4xl lg:text-7xl font-bold font-josefin-sans">
                    800+
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-montserrat text-center px-2 leading-tight">
                    Projects Completed
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Proven Performance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Proven Performance Content */}
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 lg:p-10 shadow-xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-josefin-sans leading-tight"
              >
                <span className="block">Proven Performance,</span>
                <span className="block text-primary">Trusted Results</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-foreground/80 font-montserrat mb-8 leading-relaxed"
              >
                We bring experience, excellence, and client satisfaction to every project we take on.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#portfolio")}
                className="bg-primary hover:bg-primary text-white  px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center justify-center space-x-3 mx-auto lg:mx-0 min-w-[200px]"
              >
                <motion.span
                  className="relative z-10 text-lg  font-montserrat"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  View Our Work
                </motion.span>
                <motion.div
                  className="absolute rounded-full inset-0 bg-gradient-to-r from-primary to-royal opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-full p-2"
                >
                  <HiArrowRight className="w-5 h-5 relative z-10 text-primary" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About1;
