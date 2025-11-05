"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiHome, HiOfficeBuilding, HiCog, HiUsers } from "react-icons/hi";
import { useState, useEffect } from "react";
import Link from "next/link";
const Service = () => {
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

    const section = document.querySelector('#services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);
  const serviceCategories = [
    {
      title: "Residential Construction",
      description: "Custom homes, apartments, and housing developments tailored to your lifestyle needs.",
      icon: HiHome,
      features: ["Custom Homes", "Multi-Family Units", "Renovations", "Smart Homes"],
      color: "from-primary to-royal",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      hoverColor: "hover:border-primary/40",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      href: "/residential"
    },
    {
      title: "Industrial Construction",
      description: "Large-scale industrial facilities, warehouses, and manufacturing plants built to last.",
      icon: HiOfficeBuilding,
      features: ["Manufacturing Plants", "Warehouses", "Industrial Facilities", "Heavy Infrastructure"],
      color: "from-royal to-dark",
      bgColor: "bg-royal/5",
      borderColor: "border-royal/20",
      hoverColor: "hover:border-royal/40",
      iconBg: "bg-royal/10",
      iconColor: "text-royal",
      href: "/industrial"
    }
  ];

  const handleCategoryClick = (category: string) => {
    // Handle category click - could navigate to category details or scroll to section
    console.log(`Clicked on: ${category}`);
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
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
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-foreground/80 font-montserrat leading-relaxed"
            >
              From residential homes to large-scale infrastructure, we deliver high-quality construction tailored to your needs.
            </motion.p>
          </motion.div>

          {/* Right Column - Service Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
             <>
             <Link href={category.href}>
             <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className={`group cursor-pointer relative overflow-hidden rounded-2xl border-2 ${category.borderColor} ${category.hoverColor} transition-all duration-500 hover:shadow-2xl`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Card Content */}
                  <div className={`relative z-10 p-8 ${category.bgColor} backdrop-blur-sm`}>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                  transition: { duration: 0.3 }
                }}
                      className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${category.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      className="text-2xl font-bold text-foreground font-josefin-sans mb-4 group-hover:text-white transition-colors duration-300"
                    >
                      {category.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                      className="text-foreground/80 font-montserrat mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    >
                      {category.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                      className="space-y-2 mb-6"
                    >
                      {category.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover:bg-white transition-colors duration-300`}
                          />
                          <span className="text-sm font-montserrat text-foreground/70 group-hover:text-white/80 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center space-x-2 text-sm font-semibold font-montserrat"
                    >
                      <span className={`${category.iconColor} group-hover:text-white transition-colors duration-300`}>
                        Explore Services
                      </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                        <HiArrowRight className={`w-4 h-4 ${category.iconColor} group-hover:text-white transition-colors duration-300`} />
                      </motion.div>
                  </motion.div>
                </div>

                  {/* Hover Overlay Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
              </motion.div></Link>
             </>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
