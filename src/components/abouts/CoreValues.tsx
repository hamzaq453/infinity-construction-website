"use client";

import { motion } from "framer-motion";
import { 
  HiShieldCheck, 
  HiLightBulb, 
  HiClock, 
  HiHeart, 
  HiUserGroup,
  HiCheckCircle,
  HiClipboardList
} from "react-icons/hi";

const CoreValues = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: "Integrity First",
      description: "We conduct every project with honesty, ethics, and transparency building trust that lasts.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500"
    },
    {
      icon: HiLightBulb,
      title: "Quality & Innovation",
      description: "Our team continuously improves methods and technologies to deliver durable, modern solutions.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500"
    },
    {
      icon: HiClock,
      title: "Reliability & Value",
      description: "Consistency, efficiency, and cost-effectiveness define our approach to every project.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500"
    },
    {
      icon: HiHeart,
      title: "Client Commitment",
      description: "We prioritize open communication, free consultancy, and long-term satisfaction for our clients.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500"
    },
    {
      icon: HiClipboardList,
      title: "Comprehensive Solutions",
      description: "From design to construction and finishing, we deliver complete engineering services under one roof.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-500"
    },
    {
      icon: HiCheckCircle,
      title: "Built to Last",
      description: "Inspired by our motto, “When we build, let us think that we build for ever,” we create structures made to endure.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-500"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-josefin-sans"
        >
          Built on <span className="text-primary">Strong Values</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto font-montserrat"
        >
          These fundamental principles guide every decision we make and every project we undertake, 
          ensuring consistent excellence and client satisfaction.
        </motion.p>
      </div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            className="group cursor-pointer"
          >
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 h-full">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className={`w-8 h-8 ${value.textColor}`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 font-josefin-sans">
                {value.title}
              </h3>
              
              <p className="text-foreground/80 font-montserrat leading-relaxed">
                {value.description}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16"
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
              <HiCheckCircle className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              Living Our Values
            </h3>
            
            <p className="text-lg text-foreground/80 font-montserrat leading-relaxed max-w-3xl mx-auto">
              These values are not just words on paper - they are the foundation of our company culture. 
              Every team member embodies these principles, ensuring that every project reflects our 
              commitment to excellence, integrity, and client satisfaction.
            </p>
          </div>
        </div>
      </motion.div> */}
    </motion.section>
  );
};

export default CoreValues;
