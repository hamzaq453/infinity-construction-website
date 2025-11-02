"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { HiOfficeBuilding, HiSparkles } from "react-icons/hi";

const ClientLoo = () => {
  const clientLogos = [
    { name: "Descon", src: "/Infinity Clients/Descon.png", alt: "Descon" },
    { name: "UOL", src: "/Infinity Clients/UOL.webp", alt: "UOL" },
    { name: "ARL", src: "/Infinity Clients/ARL.png", alt: "ARL" },
    { name: "Nishat", src: "/Infinity Clients/Nishat.png", alt: "Nishat" },
    { name: "Emporium", src: "/Infinity Clients/Emporium.png", alt: "Emporium" },
    { name: "Mobilink", src: "/Infinity Clients/Mobilink.png", alt: "Mobilink" },
    { name: "Airlink", src: "/Infinity Clients/Airlink.png", alt: "Airlink" },
    { name: "Mobiserve", src: "/Infinity Clients/Mobiserve.jpg", alt: "Mobiserve" },
    { name: "Rudolf", src: "/Infinity Clients/Rudolf.png", alt: "Rudolf" },
    { name: "Mangla", src: "/Infinity Clients/Mangla.png", alt: "Mangla" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-x-hidden">
      {/* Background Elements */}
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
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"
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
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-royal/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium font-montserrat">Our Clients</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-josefin-sans"
          >
            Trusted By <span className="bg-gradient-to-r from-primary to-royal bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto font-montserrat"
          >
            We're proud to work with some of the most respected names in the industry.
          </motion.p>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden"
        >
          {/* Light Background Container */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl h-40 flex items-center justify-center shadow-2xl relative w-full overflow-hidden">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r rounded-2xl from-primary/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l rounded-2xl from-primary/95 to-transparent z-10 pointer-events-none" />
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-royal/5 rounded-full blur-2xl" />

            <div className="w-full overflow-hidden max-w-full">
              <Marquee 
                speed={50} 
                gradient={false}
                pauseOnHover={true}
                className="flex items-center gap-8 overflow-hidden"
                style={{ 
                  overflow: 'hidden', 
                  width: '100%',
                  maxWidth: '100%'
                }}
              >
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 0.9, y: -8 }}
                  className="flex items-center justify-center mx-6 group cursor-pointer"
                >
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 opacity-100 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      height={200}
                      width={200}
                      className=" transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-duplicate`}
                  whileHover={{ scale: 0.9, y: -8 }}
                  className="flex items-center justify-center mx-6 group cursor-pointer"
                >
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 opacity-100 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      height={200}
                      width={200}
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              </Marquee>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            <HiOfficeBuilding className="w-5 h-5 text-primary" />
            <span className="text-foreground/80 font-montserrat">
              <span className="font-bold text-primary">{clientLogos.length}+</span> Trusted Partners
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ClientLoo;

