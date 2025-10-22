"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiMail, 
  HiPhone, 
  HiUser,
  HiChatAlt2,
  HiCheckCircle,
  HiExclamationCircle,
  HiLocationMarker,
  HiClock,
  HiOfficeBuilding,
  HiGlobeAlt,
  HiArrowRight,
  HiSparkles
} from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Contact3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeTab, setActiveTab] = useState<"form" | "info">("form");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const contactMethods = [
    {
      icon: HiMail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "info@infinityconstruction.com",
      href: "mailto:info@infinityconstruction.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500"
    },
    {
      icon: HiPhone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500"
    },
    {
      icon: HiLocationMarker,
      title: "Visit Us",
      description: "Come to our office",
      value: "123 Construction Ave, NY",
      href: "#",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500"
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-600", label: "Facebook" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-700", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500", label: "Instagram" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600", label: "YouTube" },
    { icon: FaWhatsapp, href: "#", color: "hover:text-green-500", label: "WhatsApp" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Parallax Effect */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <HiSparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium font-montserrat">Get In Touch</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-josefin-sans"
            >
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-primary to-royal bg-clip-text text-transparent">
                Amazing Together
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-foreground/70 max-w-3xl mx-auto font-montserrat"
            >
              Ready to transform your vision into reality? Our expert team is here to bring your construction dreams to life with precision, quality, and innovation.
            </motion.p>
          </div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2 font-josefin-sans"
                >
                  {stat.number}
                </motion.div>
                <div className="text-foreground/70 font-montserrat">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.section>

      {/* Main Content with Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-2">
            <div className="flex space-x-2">
              <motion.button
                onClick={() => setActiveTab("form")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "form"
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <HiChatAlt2 className="w-4 h-4" />
                  <span className="font-montserrat">Send Message</span>
                </div>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "info"
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <HiOfficeBuilding className="w-4 h-4" />
                  <span className="font-montserrat">Contact Info</span>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4 font-josefin-sans">
                    Send Us a Message
                  </h2>
                  <p className="text-foreground/70 font-montserrat">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                        Full Name *
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-foreground/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                        Email Address *
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-foreground/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                          placeholder="Enter your email"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                        Phone Number
                      </label>
                      <div className="relative">
                        <HiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-foreground/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                        Subject *
                      </label>
                      <div className="relative">
                        <HiChatAlt2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-foreground/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                          placeholder="What's this about?"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-transparent border-2 border-foreground/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 font-montserrat resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(3, 93, 157, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary to-royal text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                  >
                    <motion.span
                      className="relative z-10 flex items-center justify-center space-x-2"
                      animate={isSubmitting ? { opacity: 0.8 } : { opacity: 1 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <HiArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.span>
                    
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-green-500 flex items-center justify-center"
                      >
                        <div className="flex items-center space-x-2">
                          <HiCheckCircle className="w-5 h-5" />
                          <span>Message Sent Successfully!</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-red-500 flex items-center justify-center"
                      >
                        <div className="flex items-center space-x-2">
                          <HiExclamationCircle className="w-5 h-5" />
                          <span>Error! Please try again</span>
                        </div>
                      </motion.div>
                    )}

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-royal to-primary opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className={`p-8 rounded-3xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 group relative overflow-hidden ${method.bgColor}`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 rounded-2xl ${method.bgColor} ${method.textColor} mb-4 inline-block`}
                      >
                        <method.icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 font-josefin-sans">
                        {method.title}
                      </h3>
                      <p className="text-foreground/70 mb-4 font-montserrat">
                        {method.description}
                      </p>
                      <p className={`font-semibold ${method.textColor} font-montserrat`}>
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media & Additional Info */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-josefin-sans">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-2xl bg-transparent border border-foreground/10 text-foreground/60 ${social.color} transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 group`}
                        title={social.label}
                      >
                        <social.icon className="w-6 h-6 mx-auto" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-josefin-sans">
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <HiClock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground font-montserrat">Monday - Friday</p>
                        <p className="text-foreground/70 font-montserrat">8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HiClock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground font-montserrat">Saturday</p>
                        <p className="text-foreground/70 font-montserrat">9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HiClock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground font-montserrat">Sunday</p>
                        <p className="text-foreground/70 font-montserrat">Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact3;
