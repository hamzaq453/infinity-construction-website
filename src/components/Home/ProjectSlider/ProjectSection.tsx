"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectSlider from "./ProjectSlider";

const ProjectSection: React.FC = () => {
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

    const section = document.querySelector('#portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);
  // Sample project data - you can replace this with your actual project data
  const projectData = [
    {
      src: "/sevice1.jpeg", // You can add more project images to your public folder
      title: "Modern Residential Complex",
      description: "A stunning residential development featuring contemporary design and sustainable building practices.",
      category: "Residential"
    },
    {
      src: "/about.jpg",
      title: "Commercial Office Building",
      description: "State-of-the-art commercial space designed for maximum efficiency and employee comfort.",
      category: "Commercial"
    },
    {
      src: "/hero.jpeg",
      title: "Industrial Warehouse",
      description: "Large-scale industrial facility built to meet modern manufacturing and storage requirements.",
      category: "Industrial"
    },
    {
      src: "/cta.jpg",
      title: "Luxury Hotel Project",
      description: "Premium hospitality project featuring world-class amenities and architectural excellence.",
      category: "Hospitality"
    },
    {
      src: "/sevice1.jpeg",
      title: "Educational Campus",
      description: "Modern educational facility designed to foster learning and innovation for future generations.",
      category: "Education"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-josefin-sans leading-tight mb-6"
          >
            <span className="block">Our Recent</span>
            <span className="block text-primary">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/80 font-montserrat max-w-3xl mx-auto"
          >
            Explore our portfolio of successful construction projects that showcase our expertise and commitment to excellence.
          </motion.p>
        </div>

        {/* Project Slider - Full Width */}
        <div className="w-full">
          <ProjectSlider projects={projectData} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
