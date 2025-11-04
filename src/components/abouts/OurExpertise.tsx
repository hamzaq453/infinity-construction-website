"use client";

import { motion } from "framer-motion";
import { 
  HiOfficeBuilding, 
  HiCog, 
  HiCog as HiWrenchScrewdriver, 
  HiHome, 
  HiClipboardList,
  HiRefresh,
  HiLightningBolt,
  HiCube,
  HiUserGroup
} from "react-icons/hi";

const OurExpertise = () => {
  const expertise = [
    {
      icon: HiOfficeBuilding,
      title: "Civil & Structural Construction",
      description:
        "Comprehensive civil engineering and structural construction services with a focus on strength, precision, and safety.",
      features: [
        "Foundation Design",
        "Concrete Structures",
        "Steel Framework",
        "Road & Bridge Works",
      ],
    },
    {
      icon: HiCube,
      title: "Industrial & Infrastructure Projects",
      description:
        "End-to-end solutions for industrial, commercial, and infrastructure developments nationwide.",
      features: [
        "Power Plants",
        "Data Centers",
        "Warehouses & Cold Storages",
        "Housing Schemes",
      ],
    },
    {
      icon: HiLightningBolt,
      title: "MEP & HVAC Solutions",
      description:
        "Integrated mechanical, electrical, and plumbing systems with advanced HVAC technology for maximum efficiency.",
      features: [
        "Electrical Design",
        "Plumbing Networks",
        "HVAC Installation",
        "Fire Protection Systems",
      ],
    },
    {
      icon: HiCog,
      title: "Fabrication & Erection",
      description:
        "In-house fabrication and precision erection services for steel structures and industrial projects.",
      features: [
        "Steel Fabrication",
        "Precision Welding",
        "Structural Assembly",
        "Quality Assurance",
      ],
    },
    {
      icon: HiHome,
      title: "Interior & Renovation Works",
      description:
        "Creative and functional interior solutions with modern design and finishing for commercial and residential spaces.",
      features: [
        "Space Planning",
        "Custom Finishing",
        "Renovation & Remodeling",
        "Material Selection",
      ],
    },
    {
      icon: HiUserGroup,
      title: "Modern Equipment & Skilled Workforce",
      description:
        "Equipped with state-of-the-art machinery and experienced teams ensuring efficient, high-quality project delivery.",
      features: [
        "Excavators & Cranes",
        "Batching Plants",
        "Shuttering & Mixing Equipment",
        "Trained Field Teams",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-5"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-josefin-sans"
        >
          Engineering <span className="text-primary">Excellence</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto font-montserrat"
        >
          Integrated, end-to-end engineering and construction services delivered with precision, safety, and innovation.
        </motion.p>
      </div>

      {/* Expertise Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
            className="group cursor-pointer"
          >
            <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 h-full">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="text-lg font-bold text-foreground mb-3 font-josefin-sans">
                {item.title}
              </h3>
              
              <p className="text-foreground/80 font-montserrat text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs text-foreground/70 font-montserrat">{feature}</span>
                  </motion.div>
                ))}
              </div>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-josefin-sans">
                Integrated Solutions
              </h3>
              <p className="text-foreground/80 font-montserrat leading-relaxed">
                Our multi-disciplinary approach allows us to provide comprehensive solutions 
                under one roof, ensuring seamless coordination and optimal results for every project.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-josefin-sans">25+</div>
                <div className="text-sm text-foreground/60 font-montserrat">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-josefin-sans">6+</div>
                <div className="text-sm text-foreground/60 font-montserrat">Specializations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-josefin-sans">500+</div>
                <div className="text-sm text-foreground/60 font-montserrat">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-josefin-sans">100%</div>
                <div className="text-sm text-foreground/60 font-montserrat">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}
    </motion.section>
  );
};

export default OurExpertise;
