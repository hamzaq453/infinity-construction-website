"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Residential Construction", href: "#residential" },
        { name: "Industrial Construction", href: "#industrial" },
      ],
    },

    { name: "Portfolio", href: "/portfolio" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-primary/30 shadow-2xl"
            : "bg-background/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Company Name */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-300 z-10"
              >
                <Image
                  src="/logo1.png"
                  alt="Infinity Construction"
                  width={200}
                  height={200}
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <motion.button
                        initial="initial"
                        whileHover="hover"
                        animate="initial"
                        whileTap={{ y: 0 }}
                        className="flex items-center space-x-1 text-foreground text-montserrat transition-all duration-300 font-medium relative px-3 py-2 rounded-lg"
                      >
                        <span className="relative z-10 tracking-wider">
                          {item.name}
                        </span>
                        <motion.div
                          animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <HiChevronDown className="w-4 h-4" />
                        </motion.div>
                        {/* Animated border effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
                          variants={{
                            initial: { opacity: 0, scale: 0.75, y: 0 },
                            hover: { opacity: 1, scale: 1, y: -2 },
                          }}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.button
                                key={dropdownItem.name}
                                initial="initial"
                                animate="visible"
                                whileHover="hover"
                                variants={{
                                  initial: { opacity: 0, x: -20 },
                                  visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                      delay: index * 0.1,
                                      duration: 0.2,
                                    },
                                  },
                                  hover: {
                                    backgroundColor: "rgba(3, 93, 157, 0.1)",
                                    transition: { duration: 0.2 },
                                  },
                                }}
                                onClick={() =>
                                  scrollToSection(dropdownItem.href)
                                }
                                className="w-full text-left px-6 py-3 text-foreground transition-all duration-300 border-b border-primary/10 last:border-b-0 relative overflow-hidden flex items-center"
                              >
                                {/* Animated arrow on the left */}
                                <motion.div
                                  className="absolute left-6 w-4 h-4 flex items-center justify-center"
                                  variants={{
                                    initial: { opacity: 0, x: -8 },
                                    hover: { opacity: 1, x: 0 },
                                  }}
                                >
                                  <svg
                                    className="w-4 h-4 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </motion.div>
                                <motion.span
                                  className="relative z-10"
                                  variants={{
                                    initial: { x: 0 },
                                    hover: { x: 24 },
                                  }}
                                >
                                  {dropdownItem.name}
                                </motion.span>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <motion.button
                        initial="initial"
                        whileHover="hover"
                        animate="initial"
                        whileTap={{ y: 0 }}
                        onClick={() => scrollToSection(item.href)}
                        className="text-foreground tracking-wider transition-all duration-300 font-medium relative px-3 py-2 rounded-lg"
                      >
                        <span className="relative z-10">{item.name}</span>
                        {/* Animated border effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
                          variants={{
                            initial: { opacity: 0, scale: 0.75, y: 0 },
                            hover: { opacity: 1, scale: 1, y: -2 },
                          }}
                        />
                      </motion.button>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary hover:bg-royal text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group text-montserrat tracking-wide"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Free Consultation
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300 p-2"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu - Right Side */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-primary/30 shadow-2xl z-50 lg:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20">
              <h2 className="text-xl font-bold text-foreground">Menu</h2>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors duration-300 p-2"
              >
                <HiX className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-6 pt-10 space-y-3  overflow-y-auto h-full">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.dropdown ? (
                    <div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ x: 0 }}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-left"
                      >
                        <span className="text-lg">{item.name}</span>
                        <motion.div
                          animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <HiChevronDown className="w-5 h-5" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-4 mt-2 space-y-3"
                          >
                            {item.dropdown.map(
                              (dropdownItem, dropdownIndex) => (
                                <motion.button
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: dropdownIndex * 0.1,
                                    duration: 0.2,
                                  }}
                                  whileHover={{ x: 10 }}
                                  whileTap={{ x: 0 }}
                                  onClick={() =>
                                    scrollToSection(dropdownItem.href)
                                  }
                                  className="w-full text-left text-foreground/80 transition-all duration-300 py-2 text-base relative group flex items-center px-4"
                                >
                                  {/* Animated arrow on the left - only visible on hover */}
                                  <div className="absolute left-4 w-4 h-4 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                    <svg
                                      className="w-4 h-4 text-primary"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </div>
                                  <span className="relative z-10 group-hover:translate-x-6 transition-transform duration-200">
                                    {dropdownItem.name}
                                  </span>
                                </motion.button>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ x: 0 }}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-3 text-lg relative group"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <Link href="/contact">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="pt-6"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(3, 93, 157, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-primary hover:bg-royal text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group"
                  >
                    <motion.span
                      className="relative z-10 text-lg"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Free Consultation
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
