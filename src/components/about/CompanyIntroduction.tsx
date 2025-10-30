"use client";

import { motion } from "framer-motion";
import { HiOfficeBuilding, HiCalendar, HiUsers, HiSparkles } from "react-icons/hi";

const CompanyIntroduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-josefin-sans"
            >
              Company <span className="text-primary">Introduction</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/80 font-montserrat leading-relaxed mb-6"
            >
              Infinity Construction Company stands as a beacon of excellence in the construction industry, 
              founded in 1997 with a vision to create lasting structures that enhance communities. 
              With over 25 years of experience, we have established ourselves as a multi-disciplinary 
              construction company.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/80 font-montserrat leading-relaxed mb-8"
            >
              Our expertise spans across architecture, civil engineering, MEP (Mechanical, Electrical, 
              Plumbing), fabrication, and interior design. We are committed to delivering innovative 
              solutions that meet the highest standards of quality and sustainability.
            </motion.p>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl"
            >
              <blockquote className="text-xl font-semibold text-foreground font-josefin-sans italic">
                "When we build, let us think that we build for ever."
              </blockquote>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <HiCalendar className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-2xl font-bold text-primary font-josefin-sans">25+</div>
              <div className="text-sm text-foreground/60 font-montserrat">Years Experience</div>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <HiOfficeBuilding className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-2xl font-bold text-primary font-josefin-sans">500+</div>
              <div className="text-sm text-foreground/60 font-montserrat">Projects</div>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <HiUsers className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-2xl font-bold text-primary font-josefin-sans">100+</div>
              <div className="text-sm text-foreground/60 font-montserrat">Team Members</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            {/* Main Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-royal/10 rounded-2xl p-8 border border-primary/20"
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto"
                >
                  <HiSparkles className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
                  Founded in 1997
                </h3>
                <p className="text-foreground/70 font-montserrat leading-relaxed">
                  Over two decades of excellence in construction, building lasting relationships 
                  and creating structures that stand the test of time.
                </p>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
            >
              <HiOfficeBuilding className="w-6 h-6 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center"
            >
              <HiSparkles className="w-5 h-5 text-royal" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyIntroduction;
