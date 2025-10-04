'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const strings = [
    { text: "Building Dreams", color: "text-accent-orange" },
    { text: "Creating Excellence", color: "text-primary" },
    { text: "Delivering Quality", color: "text-accent-orange" },
    { text: "Transforming Spaces", color: "text-primary" },
  ];

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const fullText = currentString.text;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayedText, currentStringIndex, isDeleting, strings]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-xs" />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl  lg:text-7xl font-bold text-foreground mb-6 font-josefin-sans"
          >
            <span className="block mb-2">Infinity Construction</span>
            <div className="min-h-[1.2em] flex items-center justify-center">
              <span className={`${strings[currentStringIndex].color}`}>
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-12 font-montserrat max-w-2xl mx-auto leading-relaxed"
          >
            26+ Years of Excellence | 800+ Projects Completed
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 93, 157, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center gap-3 hover:bg-accent"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Get Free Quote
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <HiArrowRight className="w-5 text-bold h-5 relative z-10" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#portfolio')}
              className="bg-transparent border-2 border-accent-orange text-foreground hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 group"
            >
              <HiPlay className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              View Our Work
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
