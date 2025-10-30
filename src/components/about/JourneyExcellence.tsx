"use client";

import { motion } from "framer-motion";
import { 
  HiCalendar, 
  HiOfficeBuilding, 
  HiUsers, 
  HiLocationMarker,
  HiStar,
  HiStar as HiTrophy
} from "react-icons/hi";

const JourneyExcellence = () => {
  const achievements = [
    {
      year: "1997",
      title: "Company Founded",
      description: "Infinity Construction Company was established with a vision to build lasting structures.",
      icon: HiCalendar
    },
    {
      year: "25+",
      title: "Years of Experience",
      description: "Over two decades of excellence in construction and engineering solutions.",
      icon: HiTrophy
    },
    {
      year: "500+",
      title: "Projects Completed",
      description: "Successfully delivered projects across residential, commercial, and industrial sectors.",
      icon: HiOfficeBuilding
    },
    {
      year: "100+",
      title: "Team Members",
      description: "Highly skilled and experienced professionals dedicated to quality construction.",
      icon: HiUsers
    }
  ];

  const clients = [
    "Descon",
    "UOL",
    "PSO", 
    "Shell",
    "Government Projects",
    "Private Sector"
  ];

  const coverage = [
    "Punjab Province",
    "Capital Territory",
    "Major Cities",
    "Industrial Zones"
  ];

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
          Our Journey of <span className="text-primary">Excellence</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto font-montserrat"
        >
          From our founding in 1997 to becoming a trusted name in construction, 
          our journey has been marked by continuous growth, innovation, and excellence.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group cursor-pointer"
          >
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 h-full">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <achievement.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary font-josefin-sans mb-2"
              >
                {achievement.year}
              </motion.div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 font-josefin-sans">
                {achievement.title}
              </h3>
              
              <p className="text-foreground/70 font-montserrat text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clients & Coverage */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Major Clients */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <HiStar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-josefin-sans">
              Major Clients
            </h3>
          </div>
          
          <p className="text-foreground/80 font-montserrat leading-relaxed mb-6">
            We have had the privilege of working with prestigious clients across both 
            private and government sectors, building lasting relationships based on trust and quality.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/70 font-montserrat font-medium">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coverage Areas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background/30 backdrop-blur-sm border border-royal/20 rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center">
              <HiLocationMarker className="w-6 h-6 text-royal" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-josefin-sans">
              Coverage Areas
            </h3>
          </div>
          
          <p className="text-foreground/80 font-montserrat leading-relaxed mb-6">
            Our services extend across Punjab and Capital Territory, bringing our expertise 
            to diverse locations and contributing to regional development.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {coverage.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-royal rounded-full"></div>
                <span className="text-foreground/70 font-montserrat font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="bg-gradient-to-r from-primary/10 to-royal/10 rounded-2xl p-8 border border-primary/20">
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
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <HiTrophy className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              A Legacy of Excellence
            </h3>
            
            <p className="text-lg text-foreground/80 font-montserrat leading-relaxed max-w-3xl mx-auto">
              Our journey of excellence continues as we build on our strong foundation of 
              experience, expertise, and client satisfaction. Every project is an opportunity 
              to demonstrate our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default JourneyExcellence;
