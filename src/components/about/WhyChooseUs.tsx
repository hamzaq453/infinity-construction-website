"use client";

import { motion } from "framer-motion";
import { 
  HiCheckCircle, 
  HiClock, 
  HiCurrencyDollar, 
  HiUserGroup, 
  HiHeart,
  HiSparkles,
  HiShieldCheck,
  HiLightBulb
} from "react-icons/hi";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: HiCheckCircle,
      title: "One-Stop Engineering Solution",
      description: "Complete construction services under one roof - from design to completion, we handle everything.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500"
    },
    {
      icon: HiClock,
      title: "25+ Years of Proven Experience",
      description: "Over two decades of successful project delivery with a track record of excellence and reliability.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500"
    },
    {
      icon: HiCurrencyDollar,
      title: "Cost-Effective Solutions",
      description: "High-quality construction at competitive prices, ensuring maximum value for your investment.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500"
    },
    {
      icon: HiUserGroup,
      title: "Highly Skilled Technical Team",
      description: "Expert professionals with specialized knowledge and extensive experience in construction.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-500"
    },
    {
      icon: HiHeart,
      title: "Customer Satisfaction Focus",
      description: "Your success is our success. We prioritize your needs and exceed expectations every time.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500"
    },
    {
      icon: HiShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets the highest standards.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-500"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: HiClock },
    { number: "500+", label: "Projects Completed", icon: HiCheckCircle },
    { number: "100%", label: "Client Satisfaction", icon: HiHeart },
    { number: "6+", label: "Specializations", icon: HiLightBulb }
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
          Why <span className="text-primary">Infinity Construction?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto font-montserrat"
        >
          We stand out in the construction industry through our commitment to excellence, 
          innovation, and client satisfaction. Here's what makes us your ideal construction partner.
        </motion.p>
      </div>

      {/* Reasons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
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
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 h-full">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 ${reason.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className={`w-7 h-7 ${reason.textColor}`} />
              </motion.div>
              
              <h3 className="text-lg font-bold text-foreground mb-3 font-josefin-sans">
                {reason.title}
              </h3>
              
              <p className="text-foreground/80 font-montserrat text-sm leading-relaxed">
                {reason.description}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-gradient-to-r from-primary/10 to-royal/10 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
              Our Track Record
            </h3>
            <p className="text-foreground/80 font-montserrat">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-2xl font-bold text-primary font-josefin-sans mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60 font-montserrat">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-primary/10 to-royal/10 rounded-2xl p-8 border border-primary/20">
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
            <HiSparkles className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
            Ready to Build Together?
          </h3>
          
          <p className="text-lg text-foreground/80 font-montserrat leading-relaxed max-w-2xl mx-auto mb-6">
            Let's discuss your project and discover how our expertise can bring your vision to life 
            with quality, innovation, and excellence.
          </p>
          
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
              <span>Start Your Project</span>
              <HiSparkles className="w-5 h-5" />
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-royal to-primary opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
