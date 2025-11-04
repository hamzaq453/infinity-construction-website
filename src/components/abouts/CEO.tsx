"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const CEOSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-background py-10 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CEO Image */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-royal/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <Image
                  priority={true}
                  quality={80}
                  width={600}
                  height={800}
                  src="/about/Ceo.png"
                  alt="CEO"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* CEO Content */}
          <motion.div
            className="order-2 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 tracking-wide font-josefin-sans">
              A Message From <span className="text-primary">Our Founder</span>
            </h2>

            <div className="relative p-8 bg-background/30 backdrop-blur-sm rounded-3xl border border-primary/20">
              {/* <div className="absolute top-4 left-4 text-6xl text-primary/10 font-montserrat">&ldquo;</div> */}
              {/* <div className="absolute bottom-4 right-4 text-6xl text-primary/20 font-josefin-sans rotate-180">&rdquo;</div> */}

              <blockquote className="text-base pt-6 sm:text-lg lg:text-xl text-foreground/90 leading-relaxed italic  font-montserrat">
                <span className="font-bold text-primary">
                  Infinity Construction Company
                </span>{" "}
                values integrity; our practices are honest; our conduct is legal
                and ethical. Although we are motivated by a fair return on our
                investment, we are always striving for win-win partnerships with
                customers who share our desire to design and build memorial
                structures that add value to the communities in which they are
                built and assist cemetery owners in keeping the promise of
                prosperity that they have made to their lot holders.
                <br />
                <br />
                We are committed to effectively communicating to our customers
                the benefits of the{" "}
                <span className="font-bold text-primary">
                  Infinity Construction Company
                </span>{" "}
                design/build process, and poured-in-place construction
                methodology. We will ensure that our customers receive real and
                measurable value
              </blockquote>
            </div>

            <div className="flex justify-between items-center space-x-6 p-6 bg-gradient-to-r from-primary/10 to-royal/10 rounded-2xl border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-royal shadow-md">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <div className="font-montserrat">
                  <h3 className="text-xl sm:text-2xl uppercase font-semibold text-primary mb-1">
                    Salman Javed
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 font-medium">
                    CEO & Founder
                  </p>
                </div>
              </div>
              <div />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -40 - i * 5, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + ((i * 11) % 80)}%`,
              top: `${70 + ((i * 7) % 20)}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CEOSection;
