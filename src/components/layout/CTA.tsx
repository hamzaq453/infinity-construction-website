"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import { useState, useEffect } from "react";

const CTA = () => {
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

    const section = document.querySelector('#cta');
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

  return (
    <section id="cta" className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/cta.jpg)',
        }}
      />
      
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[2px]" />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-josefin-sans leading-tight"
            >
              <span className="block">Get in Touch with</span>
              <span className="block text-primary">Infinity Construction</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-foreground/80 font-montserrat max-w-2xl mx-auto lg:mx-0"
            >
              Ready to start your next construction project? Let's build something amazing together.
            </motion.p>
          </motion.div>

          {/* Right Side - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:w-auto"
          >
            {/* Primary CTA Button - "Get Started" */}
            {/* <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(3, 93, 157, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-royal text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center justify-center space-x-3 min-w-[200px]"
            >
              <motion.span
                className="relative z-10 text-lg font-montserrat"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <HiArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button> */}

            {/* Secondary CTA Button - "Schedule Now" */}
           <a href="tel:03218413284" target="_blank">
             <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(3, 93, 157, 0.1)",
                borderColor: "rgba(3, 93, 157, 0.1)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-transparent border-1 border-white/30 hover:border-primary text-white hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group flex items-center justify-center space-x-3 min-w-[200px] backdrop-blur-sm"
            >
              <motion.span
                className="relative z-10 text-lg font-montserrat"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Call Now
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-royal opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <HiPhone className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>
           </a>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiPhone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-josefin-sans">
                Call Us Today
              </h3>
              <p className="text-foreground/70 font-montserrat">
                +1 (555) 123-4567
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-josefin-sans">
                Free Consultation
              </h3>
              <p className="text-foreground/70 font-montserrat">
                No obligation quote
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">24</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-josefin-sans">
                24/7 Support
              </h3>
              <p className="text-foreground/70 font-montserrat">
                Always here to help
              </p>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CTA;
