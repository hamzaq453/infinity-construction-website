"use client";

import { motion } from "framer-motion";
import { HiSparkles, HiArrowRight } from "react-icons/hi";
import { IconType } from "react-icons";
import Link from "next/link";
import Offer from "../abouts/Offer";

interface Service {
  icon: IconType;
  title: string;
  slug?: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface ServicesListProps {
  pageTitle: string;
  heading: {
    firstLine: string;
    secondLine: string;
  };
  description: string;
  services: Service[];
  serviceType?: "residential" | "industrial";
}

const ServicesList = ({ pageTitle, heading, description, services, serviceType = "residential" }: ServicesListProps) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 mt-16"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium font-montserrat">{pageTitle}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-josefin-sans leading-tight max-w-4xl mx-auto"
          >
            <span className="block">{heading.firstLine}</span>
            <span className="block bg-gradient-to-r from-primary to-royal bg-clip-text text-transparent">
              {heading.secondLine}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/80 font-montserrat leading-relaxed max-w-4xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const detailPageUrl = service.slug 
              ? `/${serviceType}/${service.slug}`
              : `/${serviceType}`;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Link href={detailPageUrl} className="block h-full">
                  <div className={`bg-background/30 backdrop-blur-sm border ${service.borderColor} rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-xl cursor-pointer`}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${service.color} group-hover:text-primary transition-colors duration-300`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 font-josefin-sans group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm lg:text-base font-montserrat leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center hover:text-primary space-x-2 text-sm font-semibold font-montserrat text-foreground/80 group-hover:text-primary transition-colors duration-300"
                    >
                      <span>Explore More</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16">
          <Offer />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

