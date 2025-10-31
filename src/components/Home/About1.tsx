"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Lottie from "lottie-react";
import animatedData from "../../lotties/Downloading.json";

const About1 = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);

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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="text-center mb-16">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-josefin-sans leading-tight"
          >
            At <span className="text-primary">Infinity Construction</span>, we
            bring multi-disciplinary engineering and construction expertise
            together under one roof.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/80 font-montserrat max-w-4xl mx-auto leading-relaxed"
          >
            Backed by years of successful project delivery and a strong client
            base, we ensure every project is executed with precision,
            coordination, and cost-efficiency. Whether small or large, each
            build reflects our commitment to trust and excellence.
          </motion.p>
        </div>

        {/* Statistics and CTA Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10  lg:items-start items-center">
          {/* Left Side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 w-[80%]"
          >
            {/* Statistics Grid - Overlapping Circles with Different Sizes */}
            <div className="relative flex items-center justify-center py-8 sm:py-12">
              {/* First Circle - Smallest */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-10 text-center"
              >
                <div
                  className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[0].color}`}
                >
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
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-20 text-center -ml-4 sm:-ml-6 lg:-ml-8"
              >
                <div
                  className={`w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[1].color}`}
                >
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
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative z-30 text-center -ml-4 sm:-ml-6 lg:-ml-8"
              >
                <div
                  className={`w-40 h-40 sm:w-48 sm:h-48 lg:w-68 lg:h-68 rounded-full border-2 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${statistics[2].color}`}
                >
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
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Proven Performance Content */}
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 lg:p-10 shadow-xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-josefin-sans leading-tight"
              >
                <span className="">Comprehensive Solutions,</span>
                <span className="text-primary"> Lasting Trust</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-foreground/80 font-montserrat mb-8 leading-relaxed"
              >
                We deliver every project with precision, coordination, and
                client satisfaction.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-royal text-white pl-4 pr-1 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center justify-center space-x-2 mx-auto lg:mx-0 min-w-[200px]"
              >
                <a
                  href="/portfolio/portfolio.pdf"
                  download="Infinity Construction Company Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative tracking-wide z-10 text-lg font-montserrat"
                >
                  Our Portfolio
                </a>
                {/* <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <HiArrowRight className="w-5 h-5" />
                </motion.div> */}

                <Lottie
                  animationData={animatedData}
                  loop={true}
                  autoplay={true}
                  // style={{ width: 40, height: 40 }}
                  className="w-14 h-14"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About1;
