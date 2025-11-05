"use client";

import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

interface ServiceInclusion {
  title: string;
  description: string;
}

interface OverviewProps {
  heading: string;
  description: string;
  services?: ServiceInclusion[];
}

// Dummy data for now
const dummyServices: ServiceInclusion[] = [
  {
    title: "Foundation Design",
    description: "Comprehensive foundation engineering for industrial structures. Deep foundations, piling, and soil stabilization to ensure uncompromised stability and longevity."
  },
  {
    title: "Concrete Structures",
    description: "High-quality concrete construction with precision engineering. From basic structures to complex reinforced concrete systems, we deliver durability and strength."
  },
  {
    title: "Steel Framework",
    description: "Robust steel framework solutions designed for industrial applications. Custom fabrication and erection services that meet the highest engineering standards."
  },
  {
    title: "Road & Bridge Works",
    description: "Complete road and bridge construction services. From planning to completion, we build infrastructure that connects communities and supports economic growth."
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control and assurance protocols throughout every project phase. We ensure compliance with international standards and best practices."
  },
  {
    title: "Project Management",
    description: "Expert project management services ensuring timely delivery, budget adherence, and seamless coordination across all construction phases."
  }
];

const Overview = ({ heading, description, services = dummyServices }: OverviewProps) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading and Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-josefin-sans leading-tight">
            {heading}
          </h2>

          {/* Description Paragraph */}
          <p className="text-foreground/80 font-montserrat text-base md:text-lg leading-relaxed">
            infinity construction company provides a wide range of services to meet your construction needs.
            We are a team of experienced professionals who are dedicated to providing you with the best possible service.
            We are a team of experienced professionals who are dedicated to providing you with the best possible service.
          </p>
        </motion.div>

        {/* Service Inclusions Grid - 2 rows x 3 columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dummyServices.map((service, index) => (
            <motion.div key={index} className="group">
              <div className="bg-background/30 backdrop-blur-sm border border-primary/10 rounded-xl p-4 hover:border-primary/30 hover:bg-background/50 transition-all duration-300 flex items-start gap-4 h-full">
                <HiCheckCircle className="w-6 border-2 border-primary rounded-full h-6 md:w-7 md:h-7 text-white" />
                {/* Content - Right Side */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 font-josefin-sans group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 font-montserrat text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
