"use client";

import { motion } from "framer-motion";
import CoreValues from "../../components/abouts/CoreValues";
import OurExpertise from "../../components/abouts/OurExpertise";

import CEOSection from "@/components/abouts/CEO";
import Offer from "@/components/abouts/Offer";
import AboutHeroVariant3 from "@/components/abouts/AboutHero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-royal/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-primary font-medium font-montserrat">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-josefin-sans"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-primary to-royal bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-foreground/70 max-w-3xl mx-auto font-montserrat"
            >
              Discover the story behind Infinity Construction - 25+ years of
              excellence in creating lasting structures that enhance communities
              and shape the future.
            </motion.p>
          </div>
        </div>
      </motion.section> */}
         <AboutHeroVariant3/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-20"
        >
          
       

          {/* Core Values */}
          <CoreValues />

          <Offer />

          <CEOSection />




          {/* Our Expertise */}
          <OurExpertise />

         
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
