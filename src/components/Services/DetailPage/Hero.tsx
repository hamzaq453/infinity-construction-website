"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiSparkles } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ 
  title, 
  tagline = "Excellence in every project, delivered with precision and care.",
  ctaText = "Get a Quote",
  ctaLink = "/contact"
}: HeroProps) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background py-28">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-royal/5" />
        
        {/* Animated Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-royal/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
        />

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(3, 93, 157, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(3, 93, 157, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20"
          >
            <HiSparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium font-montserrat text-sm">Our Service</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-josefin-sans leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-royal bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Tagline/Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-10 font-montserrat max-w-2xl mx-auto leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link href="/portfolio">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(3, 93, 157, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-royal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center gap-3"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  View Our Work
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-royal opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <HiArrowRight className="w-5 h-5 relative z-10" />
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-royal text-foreground hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 group"
              >
                <HiPhone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Scroll Indicator (optional) */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;

