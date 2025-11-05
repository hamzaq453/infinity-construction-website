"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  HiEye, 
  HiExternalLink,
  HiSparkles,
  HiOfficeBuilding,
  HiHome,
  HiCog
} from "react-icons/hi";

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const portfolioImages = [
    // Existing images from new folder
    {
      id: "new-commercial-2",
      src: "/portfolio/new/Commercial-2.png",
      title: "Modern Commercial Complex",
      category: "Commercial",
      description: "A stunning modern commercial complex featuring contemporary architecture and sustainable design.",
      size: "large",
      featured: true
    },
    {
      id: "new-residential-1", 
      src: "/portfolio/new/Residential-1.png",
      title: "Modern Residential Project",
      category: "Residential",
      description: "Beautiful residential project with modern amenities and elegant design.",
      size: "medium",
      featured: true
    },
    {
      id: "new-industrial-1",
      src: "/portfolio/new/Industrial-1.jpg", 
      title: "Industrial Facility",
      category: "Industrial",
      description: "State-of-the-art industrial facility with advanced infrastructure.",
      size: "medium",
      featured: true
    },
    {
      id: "new-industrial-4",
      src: "/portfolio/new/Industrial-4.jpeg",
      title: "Industrial Warehouse",
      category: "Industrial", 
      description: "Massive industrial warehouse facility with advanced logistics infrastructure.",
      size: "large",
      featured: false
    },
    {
      id: "new-residential-2",
      src: "/portfolio/new/Residential-2.png",
      title: "Residential Development",
      category: "Residential",
      description: "Modern residential development with premium amenities.",
      size: "medium",
      featured: false
    },
    {
      id: "new-commercial-1",
      src: "/portfolio/new/Commercial-1.jpg",
      title: "Commercial Building",
      category: "Commercial",
      description: "High-rise commercial building with premium amenities and city views.",
      size: "medium",
      featured: false
    },
    {
      id: "new-residential-3",
      src: "/portfolio/new/Residential-3.png",
      title: "Residential Complex",
      category: "Residential",
      description: "Elegant residential complex with modern architecture.",
      size: "large",
      featured: false
    },
    {
      id: "new-industrial-2",
      src: "/portfolio/new/Industrial-2.jpg",
      title: "Industrial Plant",
      category: "Industrial",
      description: "Modern industrial plant facility with advanced systems.",
      size: "small",
      featured: false
    },
    {
      id: "new-commercial-3",
      src: "/portfolio/new/Commercial-3.png",
      title: "Commercial Office",
      category: "Commercial",
      description: "Modern commercial office building with glass facade.",
      size: "small",
      featured: false
    },
    {
      id: "new-industrial-3",
      src: "/portfolio/new/Industrial-3.jpg",
      title: "Industrial Structure",
      category: "Industrial",
      description: "Robust industrial structure with advanced engineering.",
      size: "small",
      featured: false
    },
    // pic1 through pic15
    {
      id: "pic1",
      src: "/portfolio/pic1.jpeg",
      title: "Commercial Office Building",
      category: "Commercial",
      description: "Modern commercial office building with glass facade and premium amenities.",
      size: "small",
      featured: false
    },
    {
      id: "pic2",
      src: "/portfolio/pic2.jpeg",
      title: "Industrial Facility One",
      category: "Industrial",
      description: "Large-scale industrial facility with advanced infrastructure.",
      size: "small",
      featured: false
    },
    {
      id: "pic3",
      src: "/portfolio/pic3.jpeg",
      title: "Residential Project Two",
      category: "Residential",
      description: "Modern residential development with premium finishes.",
      size: "small",
      featured: false
    },
    {
      id: "pic4",
      src: "/portfolio/pic4.jpeg",
      title: "Industrial Complex",
      category: "Industrial",
      description: "Comprehensive industrial complex with state-of-the-art facilities.",
      size: "large",
      featured: false
    },
    {
      id: "pic5",
      src: "/portfolio/pic5.jpeg",
      title: "Commercial Shopping Center",
      category: "Commercial",
      description: "Modern commercial shopping center with retail spaces.",
      size: "small",
      featured: false
    },
    { 
      id: "pic6",
      src: "/portfolio/pic6.jpeg",
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Massive warehouse facility with modern logistics systems.",
      size: "small",
      featured: false
    },
    {
      id: "pic7",
      src: "/portfolio/pic7.jpeg",
      title: "Residential Development",
      category: "Residential",
      description: "Modern residential development with quality construction.",
      size: "small",
      featured: false
    },
    {
      id: "pic8",
      src: "/portfolio/pic8.jpeg",
      title: "Industrial Structure",
      category: "Industrial",
      description: "Robust industrial structure built to last.",
      size: "small",
      featured: false
    },
    {
      id: "pic9",
      src: "/portfolio/pic9.jpeg",
      title: "Commercial Building",
      category: "Commercial",
      description: "Modern commercial building with contemporary architecture.",
      size: "small",
      featured: false
    },
    {
      id: "pic10",
      src: "/portfolio/pic10.jpeg",
      title: "Industrial Plant",
      category: "Industrial",
      description: "Advanced industrial plant with modern equipment.",
      size: "small",
      featured: false
    },
    {
      id: "pic11",
      src: "/portfolio/pic11.jpeg",
      title: "Residential Project Three",
      category: "Residential",
      description: "Quality residential project with attention to detail.",
      size: "large",
      featured: false
    },
    {
      id: "pic12",
      src: "/portfolio/pic12.jpeg",
      title: "Industrial Facility Two",
      category: "Industrial",
      description: "Large industrial facility with advanced systems.",
      size: "small",
      featured: false
    },
    {
      id: "pic13",
      src: "/portfolio/pic13.jpeg",
      title: "Commercial Complex",
      category: "Commercial",
      description: "Modern commercial complex with premium facilities.",
      size: "small",
      featured: false
    },
    {
      id: "pic14",
      src: "/portfolio/pic14.jpeg",
      title: "Industrial Complex Two",
      category: "Industrial",
      description: "Comprehensive industrial complex with modern infrastructure.",
      size: "small",
      featured: false
    },
    {
      id: "pic15",
      src: "/portfolio/pic15.jpeg",
      title: "Residential Development Two",
      category: "Residential",
      description: "Quality residential development with premium features.",
      size: "small",
      featured: false
    },
    // pic-a through pic-z
    {
      id: "pic-a",
      src: "/portfolio/pic-a.jpeg",
      title: "Commercial Building A",
      category: "Commercial",
      description: "Modern commercial building with contemporary architecture.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-b",
      src: "/portfolio/pic-b.jpeg",
      title: "Residential Project A",
      category: "Residential",
      description: "Beautiful residential project with modern architecture.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-c",
      src: "/portfolio/pic-c.jpeg",
      title: "Industrial Facility C",
      category: "Industrial",
      description: "Large industrial facility with robust construction.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-d",
      src: "/portfolio/pic-d.jpeg",
      title: "Commercial Office Complex",
      category: "Commercial",
      description: "Modern commercial office complex with premium facilities.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-e",
      src: "/portfolio/pic-e.jpeg",
      title: "Commercial Retail Center",
      category: "Commercial",
      description: "Modern commercial retail center with modern design.",
      size: "large",
      featured: false
    },
    {
      id: "pic-f",
      src: "/portfolio/pic-f.jpeg",
      title: "Residential Building A",
      category: "Residential",
      description: "Elegant residential building with contemporary design.",
      size: "small",
      featured: false
    },
    {
      id: "pic-g",
      src: "/portfolio/pic-g.jpeg",
      title: "Industrial Project G",
      category: "Industrial",
      description: "Modern industrial project with advanced infrastructure.",
      size: "small",
      featured: false
    },
    {
      id: "pic-h",
      src: "/portfolio/pic-h.jpeg",
      title: "Residential Development A",
      category: "Residential",
      description: "Quality residential development with premium amenities.",
      size: "small",
      featured: false
    },
    {
      id: "pic-i",
      src: "/portfolio/pic-i.jpeg",
      title: "Commercial Mall",
      category: "Commercial",
      description: "Modern commercial mall with retail and entertainment spaces.",
      size: "small",
      featured: false
    },
    {
      id: "pic-j",
      src: "/portfolio/pic-l.jpeg",
      title: "Residential Project B",
      category: "Residential",
      description: "Beautiful residential project with modern design.",
      size: "large",
      featured: false
    },
    {
      id: "pic-k",
      src: "/portfolio/pic-k.jpeg",
      title: "Industrial Facility K",
      category: "Industrial",
      description: "Large-scale industrial facility with advanced systems.",
      size: "large",
      featured: false
    },
    {
      id: "pic-l",
      src: "/portfolio/pic-j.jpeg",
      title: "Commercial Building B",
      category: "Commercial",
      description: "Modern commercial building with premium amenities.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-m",
      src: "/portfolio/pic-m.jpeg",
      title: "Industrial Structure M",
      category: "Industrial",
      description: "Robust industrial structure built for durability.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-n",
      src: "/portfolio/pic-n.jpeg",
      title: "Residential Complex B",
      category: "Residential",
      description: "Beautiful residential complex with quality construction.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-o",
      src: "/portfolio/pic-o.jpeg",
      title: "Industrial Plant O",
      category: "Industrial",
      description: "Advanced industrial plant with modern equipment.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-p",
      src: "/portfolio/pic-p.jpeg",
      title: "Commercial Plaza",
      category: "Commercial",
      description: "Modern commercial plaza with retail and office spaces.",
      size: "large",
      featured: false
    },
    {
      id: "pic-q",
      src: "/portfolio/pic-q.jpeg",
      title: "Industrial Facility Q",
      category: "Industrial",
      description: "Large industrial facility with advanced infrastructure.",
      size: "small",
      featured: false
    },
    {
      id: "pic-r",
      src: "/portfolio/pic-r.jpeg",
      title: "Residential Project C",
      category: "Residential",
      description: "Quality residential project with modern architecture.",
      size: "small",
      featured: false
    },
    {
      id: "pic-s",
      src: "/portfolio/pic-s.jpeg",
      title: "Industrial Complex S",
      category: "Industrial",
      description: "Comprehensive industrial complex with modern systems.",
      size: "small",
      featured: false
    },
    {
      id: "pic-t",
      src: "/portfolio/pic-t.jpeg",
      title: "Commercial Office Building",
      category: "Commercial",
      description: "Modern commercial office building with glass facade.",
      size: "small",
      featured: false
    },
    {
      id: "pic-u",
      src: "/portfolio/pic-u.jpeg",
      title: "Industrial Structure U",
      category: "Industrial",
      description: "Modern industrial structure with advanced engineering.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-v",
      src: "/portfolio/pic-v.jpeg",
      title: "Residential Complex C",
      category: "Residential",
      description: "Beautiful residential complex with quality finishes.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-w",
      src: "/portfolio/pic-w.jpeg",
      title: "Commercial Center",
      category: "Commercial",
      description: "Modern commercial center with retail and business spaces.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-x",
      src: "/portfolio/pic-x.jpeg",
      title: "Residential Development C",
      category: "Residential",
      description: "Modern residential development with premium amenities.",
      size: "medium",
      featured: false
    },
    {
      id: "pic-y",
      src: "/portfolio/pic-y.jpeg",
      title: "Commercial Building C",
      category: "Commercial",
      description: "Modern commercial building with contemporary design.",
      size: "large",
      featured: false
    },
    {
      id: "pic-z",
      src: "/portfolio/pic-z.jpeg",
      title: "Residential Project D",
      category: "Residential",
      description: "Quality residential project with elegant design.",
      size: "large",
      featured: false
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

  const categories = ["All", "Residential", "Commercial", "Industrial"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 py-12 flex flex-col items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/15 rounded-full"
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Breadcrumb */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-foreground/60 mb-8 font-montserrat"
            >
              <span>Home</span>
              <span>/</span>
              <span className="text-primary">Portfolio</span>
            </motion.div> */}

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-josefin-sans leading-tight">
                Portfolio
                
                <span className="text-primary"> Gallery</span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary to-royal mb-8"
              />
            </motion.div>

            {/* Description with Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-4xl"
            >
              <p className="text-lg text-foreground/80 font-montserrat leading-relaxed mb-8">
                Explore our comprehensive collection of construction projects that demonstrate our 
                expertise across residential, commercial, and industrial sectors. Each project 
                represents our commitment to quality, innovation, and client satisfaction.
              </p>
              
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-3 gap-8 max-w-2xl"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans mb-2"
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-foreground/60 font-montserrat">Projects Completed</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans mb-2"
                  >
                    15+
                  </motion.div>
                  <div className="text-sm text-foreground/60 font-montserrat">Years Experience</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-3xl md:text-4xl font-bold text-primary font-josefin-sans mb-2"
                  >
                    100%
                  </motion.div>
                  <div className="text-sm text-foreground/60 font-montserrat">Client Satisfaction</div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-background/30 text-foreground/70 hover:text-foreground hover:bg-primary/10 border border-primary/20"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <span className="font-montserrat">{category}</span>
            </motion.button>
          ))}
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
                  
                  {/* Category Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full z-10"
                  >
                    {image.category === "Residential" && <HiHome className="w-5 h-5 text-primary" />}
                    {image.category === "Commercial" && <HiOfficeBuilding className="w-5 h-5 text-primary" />}
                    {image.category === "Industrial" && <HiCog className="w-5 h-5 text-primary" />}
                    {image.category === "Mixed-Use" && <HiSparkles className="w-5 h-5 text-primary" />}
                  </motion.div>
                  
                  {/* Content Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-4 text-white z-10"
                  >
                    <h3 className="text-lg font-bold mb-1 font-josefin-sans">
                     
                      {image.title}
                    </h3>
                    {/* <p className="text-sm text-white/80 mb-3 font-montserrat line-clamp-2">
                      {image.description}
                    </p> */}
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
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
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
        </motion.div> */}

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

export default PortfolioPage;
