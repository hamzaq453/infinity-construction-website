"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  HiEye, 
  HiExternalLink, 
  HiArrowRight,
  HiSparkles
} from "react-icons/hi";
import Link from "next/link";

const Project1 = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      id: "pic1",
      src: "/portfolio/pic1.png",
      title: "Modern Residential Complex",
      category: "Residential",
      description: "A stunning modern residential complex featuring contemporary architecture and sustainable design.",
      size: "large", // large, medium, small
      featured: true
    },
    {
      id: "pic2", 
      src: "/portfolio/pic2.png",
      title: "Commercial Office Building",
      category: "Commercial",
      description: "State-of-the-art commercial office building with glass facade and modern amenities.",
      size: "medium",
      featured: false
    },
    {
      id: "pic3",
      src: "/portfolio/pic3.png", 
      title: "Luxury Villa",
      category: "Residential",
      description: "Elegant luxury villa with premium finishes and panoramic views.",
      size: "medium",
      featured: false
    },
    {
      id: "pic4",
      src: "/portfolio/pic4.png",
      title: "Industrial Warehouse",
      category: "Industrial", 
      description: "Massive industrial warehouse facility with advanced logistics infrastructure.",
      size: "large",
      featured: true
    },
    {
      id: "pic5",
      src: "/portfolio/pic5.png",
      title: "Shopping Mall",
      category: "Commercial",
      description: "Multi-level shopping mall with modern retail spaces and entertainment areas.",
      size: "medium",
      featured: false
    },
    {
      id: "pic6",
      src: "/portfolio/pic6.png",
      title: "Apartment Complex",
      category: "Residential",
      description: "High-rise apartment complex with premium amenities and city views.",
      size: "medium",
      featured: false
    },
    {
      id: "pic7",
      src: "/portfolio/pic7.png",
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "Impressive corporate headquarters with sustainable design and green technology.",
      size: "medium",
      featured: false
    },
    {
      id: "pic8",
      src: "/portfolio/pic8.png",
      title: "Mixed-Use Development",
      category: "Mixed-Use",
      description: "Innovative mixed-use development combining residential, commercial, and recreational spaces.",
      size: "large",
      featured: true
    }
  ];

  const getImageDimensions = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case "large":
        return "h-96";
      case "medium":
        return "h-64";
      case "small":
        return "h-48";
      default:
        return "h-48";
    }
  };

  const filteredImages = portfolioImages;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium font-montserrat">Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-josefin-sans"
          >
            Our <span className="bg-gradient-to-r from-primary to-royal bg-clip-text text-transparent">
              Amazing Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto font-montserrat"
          >
            Discover our portfolio of exceptional construction projects that showcase our expertise, 
            innovation, and commitment to excellence in every build.
          </motion.p>
        </motion.div>


        {/* Brick Wall Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${getImageDimensions(image.size)} group cursor-pointer`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(image.src)}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative overflow-hidden rounded-2xl ${getImageHeight(image.size)} bg-background/30 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300`}
                >
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {image.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium font-montserrat z-10"
                    >
                      Featured
                    </motion.div>
                  )}
                  
                  
                  {/* Content Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white z-10"
                  >
                    <h3 className="text-lg font-bold mb-2 font-josefin-sans">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3 font-montserrat line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-primary/20 px-2 py-1 rounded-full font-montserrat">
                        {image.category}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-primary/20 rounded-full"
                      >
                        <HiEye className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-royal text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group font-montserrat"
          >
            <motion.span
              className="relative z-10 flex items-center space-x-2"
              whileHover={{ x: 5 }}
            >
              <span>View All Projects</span>
              <HiArrowRight className="w-5 h-5" />
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-royal to-primary opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          </Link>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Project Image"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <HiExternalLink className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project1;
