"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Service = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes & housing",
    },
    {
      title: "Commercial Projects",
      description: "Offices & retail spaces",
    },
    {
      title: "Interior Fit-Out",
      description: "Complete interior build",
    },
    {
      title: "Project Management",
      description: "Full build oversight",
    },
    {
      title: "Structural Engineering",
      description: "Safe & solid builds",
    },
  ];

  const handleServiceClick = (service: string) => {
    // Handle service click - could navigate to service details or scroll to section
    console.log(`Clicked on: ${service}`);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/10 via-background/95 to-primary/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top Right Corner Decoration */}
        {/* <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" /> */}
        
        {/* Bottom Left Corner Decoration */}
        {/* <div className="absolute bottom-20 left-0 w-80 h-80 bg-royal rounded-full blur-3xl" /> */}
        
        {/* Center Decorative Circle */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl" /> */}
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-25">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-josefin-sans leading-tight"
            >
              <span className="block">Discover Our</span>
              <span className="block">Construction</span>
              <span className="block text-primary">Solutions</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-foreground/80 font-montserrat leading-relaxed"
            >
              From residential homes to large-scale infrastructure, we deliver high-quality construction tailored to your needs.
            </motion.p>
          </motion.div>

          {/* Right Column - Services List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleServiceClick(service.title)}
                className="group cursor-pointer py-6 px-3 border-b border-primary/20 last:border-b-0 transition-all duration-300 hover:border-primary/40 relative overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-josefin-sans mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 font-montserrat group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <motion.div
                    className="ml-4 flex-shrink-0"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiArrowRight className="w-5 h-5 text-primary group-hover:text-royal transition-colors duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
