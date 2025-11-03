"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  heading?: string;
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    number: "01",
    title: "Mission",
    description:
      "To empower learners by providing accessible and high-quality educational resources and qualified teachers.",
  },
  {
    number: "02",
    title: "Vision",
    description:
      "To become the leading global platform for lifelong learning and personal development and educational resources and teachers.",
  },
  {
    number: "03",
    title: "History",
    description:
      "Established in 2000, the website has evolved from offering basic tutorials to comprehensive courses serving millions of people.",
  },
];

const Features = ({
  heading = "Our Features",
  description,
  features = defaultFeatures,
}: FeaturesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {(heading || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-josefin-sans leading-tight">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-foreground/80 font-montserrat text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Features Container */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-12 lg:px-14">
            <div className="flex justify-center gap-8 lg:gap-10 flex-wrap">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative w-full sm:w-[290px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Box */}
                  <div className="relative bg-background/90 backdrop-blur-sm border border-primary/10 rounded-[15%] p-[60px_40px] sm:p-[100px_40px_60px] shadow-[0_15px_45px_rgba(3,93,157,0.15)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(3,93,157,0.25)] h-full">
                    {/* Animated Background Overlay */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-royal rounded-[15%]"
                      initial={{ scaleY: 0, transformOrigin: "top" }}
                      animate={{
                        scaleY: hoveredIndex === index ? 1 : 0,
                        transformOrigin:
                          hoveredIndex === index ? "bottom" : "top",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {/* Number */}
                    <motion.h1
                      className={`absolute left-10 top-[60px] text-6xl sm:text-7xl font-bold z-[1] font-josefin-sans transition-all duration-500 ${
                        hoveredIndex === index
                          ? "opacity-100 text-white -translate-y-10"
                          : "opacity-10 text-primary"
                      }`}
                    >
                      {feature.number}
                    </motion.h1>

                    {/* Title */}
                    <motion.h3
                      className={`relative text-2xl sm:text-3xl font-bold z-[2] mb-4 font-josefin-sans transition-colors duration-500 ${
                        hoveredIndex === index ? "text-white" : "text-primary"
                      }`}
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className={`relative text-base sm:text-lg z-[2] leading-relaxed font-montserrat transition-colors duration-500 ${
                        hoveredIndex === index
                          ? "text-white"
                          : "text-foreground/70"
                      }`}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

