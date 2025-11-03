"use client";
import React from "react";
import { motion } from "framer-motion";

interface Value {
  id: number;
  tag: string;
  title: string;
  description: string;
}

interface ProcessProps {
  values?: Value[];
  heading?: string;
  description?: string;
}

const defaultValues: Value[] = [
  {
    id: 1,
    tag: "INNOVATION",
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest technologies and methodologies to deliver innovative solutions that keep our clients ahead of the competition in today's rapidly evolving digital landscape.",
  },
  {
    id: 2,
    tag: "EXCELLENCE",
    title: "Quality-First Approach",
    description:
      "Every project we undertake is executed with meticulous attention to detail and uncompromising quality standards, ensuring exceptional results that exceed client expectations.",
  },
  {
    id: 3,
    tag: "COLLABORATION",
    title: "Partnership-Driven Success",
    description:
      "We believe in building strong, collaborative relationships with our clients, working closely as partners to understand their vision and transform it into digital reality.",
  },
  {
    id: 4,
    tag: "RELIABILITY",
    title: "Trusted Technology Partner",
    description:
      "With years of experience and a proven track record, we provide reliable, scalable solutions that businesses can depend on for their long-term digital transformation goals.",
  },
];

const OurValues: React.FC<ProcessProps> = ({ 
  values = defaultValues,
  heading = "Our Values",
  description = "Explore what sets us apart and drives exceptional results for our clients"
}) => {

  return (
    <section className="relative w-full py-24 bg-background text-foreground overflow-hidden">
      {/* Ultra-Enhanced Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer sophisticated gradient base (static) */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-royal/6 via-transparent to-primary/6" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-royal/4 to-royal/8" />

        {/* Large static gradient orbs */}
        <div className="absolute top-1/6 right-1/6 w-[500px] h-[500px] bg-gradient-conic from-primary/15 via-royal/10 to-royal/6 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/6 left-1/6 w-[420px] h-[420px] bg-gradient-conic from-royal/12 via-primary/8 to-royal/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-gradient-radial from-primary/8 via-royal/5 to-transparent rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] bg-gradient-radial from-royal/6 via-primary/4 to-transparent rounded-full blur-2xl opacity-30" />

        {/* Static grid and mesh overlays */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(3, 93, 157, 0.04) 1px, transparent 1px),
              linear-gradient(rgba(3, 93, 157, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(3, 93, 157, 0.01) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
            opacity: 0.2,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(3, 93, 157, 0.02) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(3, 56, 143, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px",
            opacity: 0.15,
          }}
        />

        {/* Depth and shadow layers (static) */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-primary/2" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/2 via-transparent to-background/10" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/2 to-background/8" />
        <div className="absolute inset-0 bg-gradient-conic from-transparent via-primary/1 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Header background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6 font-josefin-sans"
          >
            <span className="inline-block relative">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground"
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {heading}
              </motion.span>
              <motion.div
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 to-royal/60 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-montserrat"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/60 to-primary/20 origin-top"
          />

          {/* Animated glow effect for timeline */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-8 w-1 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/10 blur-sm"
          />

          {/* Timeline Items */}
          <div className="space-y-20">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 * index,
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left Side - Tag and Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4 * index,
                    }}
                    viewport={{ once: true }}
                    className="w-1/2 pr-16 text-right"
                  >
                    <div className="relative inline-block mb-1">
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 1.5,
                        }}
                        className="inline-block px-4 py-1 rounded-full bg-gradient-to-br from-primary to-royal group-hover:from-royal group-hover:to-primary border border-primary/30 backdrop-blur-md mb-3 shadow-lg shadow-primary/20"
                      >
                        <span className="text-xs text-white font-medium tracking-wider font-montserrat">
                          {value.tag}
                        </span>
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-500 font-josefin-sans"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative">
                        {value.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 to-royal/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          layoutId={`desktop-underline-${value.id}`}
                        />
                      </span>
                    </motion.h3>
                  </motion.div>

                  {/* Enhanced Center Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5 * index,
                    }}
                    viewport={{ once: true }}
                    className="relative flex-shrink-0 z-20"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-primary/40 ${
                        index === 0
                          ? "bg-gradient-to-br from-primary to-royal"
                          : "bg-background border-primary/60"
                      } shadow-lg shadow-primary/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-primary/50`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className={`w-full h-full rounded-full ${
                          index === 0
                            ? "bg-gradient-to-br from-primary to-royal"
                            : "bg-primary/20"
                        }`}
                      />
                    </div>

                    {/* Node glow effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1,
                      }}
                      className="absolute inset-0 bg-primary/30 rounded-full blur-md -z-10"
                    />
                  </motion.div>

                  {/* Right Side - Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.6 * index,
                    }}
                    viewport={{ once: true }}
                    className="w-1/2 pl-12"
                  >
                    <div className="relative bg-gradient-to-br from-background/30 via-background/20 to-background/10 backdrop-blur-md rounded-2xl p-5 border border-primary/15 hover:border-primary/40 transition-all duration-700 hover:bg-gradient-to-br hover:from-background/40 hover:via-background/30 hover:to-background/20 group-hover:shadow-2xl group-hover:shadow-primary/20 hover:scale-[1.02] overflow-hidden">
                      {/* Enhanced background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-royal/3 to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/2 to-transparent opacity-50" />

                      {/* Floating inner particles */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [-10, -30, -10],
                              x: [-5, 5, -5],
                              opacity: [0.1, 0.4, 0.1],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 8 + i,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 1.5,
                            }}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full blur-[0.5px]"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + i * 10}%`,
                            }}
                          />
                        ))}
                      </div>

                      <p className="relative z-10 text-foreground/85 leading-relaxed group-hover:text-foreground/95 transition-colors duration-500 text-[15px] font-montserrat">
                        {value.description}
                      </p>

                      {/* Enhanced glow effects */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/6 via-royal/6 to-royal/6 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/3 via-royal/3 to-royal/3 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-700 -z-20" />

                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: [-100, 200],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 2,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.3 * index,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start bg-gradient-to-br from-background/30 via-background/20 to-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary/15 hover:border-primary/40 transition-all duration-700 hover:bg-gradient-to-br hover:from-background/40 hover:via-background/30 hover:to-background/20 hover:shadow-xl hover:shadow-primary/15 hover:scale-[1.02] overflow-hidden"
                  >
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 mt-1 mr-6">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-primary/40 ${
                          index === 0
                            ? "bg-gradient-to-br from-primary to-royal"
                            : "bg-background border-primary/60"
                        } shadow-lg shadow-primary/30`}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                          className={`w-full h-full rounded-full ${
                            index === 0
                              ? "bg-gradient-to-br from-primary to-royal"
                              : "bg-primary/20"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-royal/15 to-primary/10 border border-primary/30 backdrop-blur-md mb-3 shadow-lg shadow-primary/20">
                        <span className="text-xs text-primary font-medium tracking-wider font-montserrat">
                          {value.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 font-josefin-sans">
                        {value.title}
                      </h3>

                      <p className="text-foreground/80 leading-relaxed font-montserrat">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.2,
            }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-primary/30 to-royal/20 rounded-full border border-primary/30 backdrop-blur-sm">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-br from-primary/40 to-royal/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
export type { Value, ProcessProps };