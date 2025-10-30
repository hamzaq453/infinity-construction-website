"use client";

import { motion } from "framer-motion";
import { HiEye, HiLightBulb, HiHeart, HiUserGroup } from "react-icons/hi";

const VisionMission = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-josefin-sans"
        >
          Our <span className="text-primary">Vision & Mission</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto font-montserrat"
        >
          Guided by our core values of integrity, quality, and customer satisfaction, 
          we are committed to building lasting partnerships and delivering exceptional results.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
            >
              <HiEye className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              Our Vision
            </h3>
            
            <p className="text-foreground/80 font-montserrat leading-relaxed mb-6">
              To design and build long-lasting structures that enhance communities. 
              We envision a future where every project we undertake becomes a landmark 
              of quality, innovation, and sustainability.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Sustainable construction practices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Community-focused development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Innovation in construction technology</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-background/30 backdrop-blur-sm border border-royal/20 rounded-2xl p-8 hover:border-royal/40 transition-all duration-300 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-16 h-16 bg-royal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal/20 transition-colors duration-300"
            >
              <HiLightBulb className="w-8 h-8 text-royal" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              Our Mission
            </h3>
            
            <p className="text-foreground/80 font-montserrat leading-relaxed mb-6">
              To provide cost-effective, quality-driven engineering solutions under one roof. 
              We are committed to delivering excellence through honesty, integrity, and 
              win-win partnerships with our clients.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-royal rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Cost-effective solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-royal rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Quality-driven approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-royal rounded-full"></div>
                <span className="text-foreground/70 font-montserrat">Win-win partnerships</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="bg-gradient-to-r from-primary/10 to-royal/10 rounded-2xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4 font-josefin-sans">
                Our Core Principles
              </h4>
              <p className="text-foreground/80 font-montserrat leading-relaxed">
                We believe in building relationships as strong as our structures. 
                Our commitment to honesty, integrity, and customer satisfaction drives 
                every decision we make.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiHeart className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground font-montserrat">Integrity</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <HiUserGroup className="w-6 h-6 text-royal" />
                </div>
                <span className="text-sm font-medium text-foreground font-montserrat">Partnership</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VisionMission;
