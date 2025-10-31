"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animatedData from "../../lotties/Downloading.json";
import Link from "next/link";

const AboutHeroVariant3: React.FC = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <section className="w-full min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-royal/10 rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-royal/5" />
      </div> */}

        {/* Main Content */}
        <div className="w-full px-4 text-center ">
          <div className="backdrop-blur-sm bg-background/30 border border-primary/20 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="text-4xl pt-5 md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight  font-bold text-foreground tracking-tight relative mb-8 font-josefin-sans"
            >
              Building Trust and Quality{" "}
              <span className="text-primary">Since 1997</span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="relative mb-8"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-montserrat">
                At{" "}
                <span className="font-semibold text-primary">
                  Infinity Construction Company
                </span>
                , we combine experience, technology, and creativity to design
                and construct spaces that inspire progress. From concept to
                completion we build with precision, passion, and purpose.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="relative mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/portfolio" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-4  bg-gradient-to-r from-primary to-royal text-white rounded-xl font-semibold text-base sm:text-lg tracking-wide relative overflow-hidden group shadow-lg hover:shadow-xl font-montserrat"
                >
                  <span className="relative z-10">Explore Our Projects</span>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-royal to-primary opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-primary text-white px-4 sm:pl-4 sm:pr-1 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center justify-center space-x-2 sm:space-x-2 min-w-full sm:min-w-[200px]"
              >
                <a
                  href="/portfolio/portfolio.pdf"
                  download="Infinity Construction Company Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative tracking-wide z-10 text-base sm:text-lg font-montserrat"
                >
                  Our Portfolio
                </a>

                <Lottie
                  animationData={animatedData}
                  loop={true}
                  autoplay={true}
                  className="w-10 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0"
                />
              </motion.button>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mb-8"
            >
              <p className="text-base md:text-lg text-foreground/70 font-medium font-montserrat italic">
                " Committed to excellence in every structure we build. "
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
              }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-primary/20"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans"
                >
                  26+
                </motion.div>
                <p className="text-foreground/70 text-sm md:text-base font-montserrat">
                  Years Experience
                </p>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans"
                >
                  800+
                </motion.div>
                <p className="text-foreground/70 text-sm md:text-base font-montserrat">
                  Projects Completed
                </p>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans"
                >
                  100%
                </motion.div>
                <p className="text-foreground/70 text-sm md:text-base font-montserrat">
                  Quality Assured
                </p>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans"
                >
                  98%
                </motion.div>
                <p className="text-foreground/70 text-sm md:text-base font-montserrat">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroVariant3;
