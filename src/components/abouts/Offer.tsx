"use client";

import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

const Offer = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className=""   
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
              <HiHome className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              Free Residential Design Offer
            </h3>
            
            <p className="text-lg text-foreground/80 font-montserrat leading-relaxed max-w-3xl mx-auto">
              Turn your dream home into reality <span className="font-bold">Absolutely Free!</span><br/>
              Contact us today to get your residential design consultation at no cost and experience the creativity and precision of <b>Infinity Construction Company.</b>
            </p>

            <p className="text-sm text-foreground/60 font-montserrat mt-4">*Conditions apply</p>

            <div className="mt-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-royal text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group font-montserrat"
                >
                  <span className="relative z-10">Contact Us Now</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-royal to-primary opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Offer;