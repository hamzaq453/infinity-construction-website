"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiClock,
  HiUser,
  HiChatAlt2,
  HiCheckCircle,
  HiExclamationCircle,
  HiOfficeBuilding,
  HiGlobeAlt
} from "react-icons/hi";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: "Office Address",
      details: ["123 Construction Avenue", "Building District", "New York, NY 10001"],
      color: "text-red-500"
    },
    {
      icon: HiPhone,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-green-500"
    },
    {
      icon: HiMail,
      title: "Email Address",
      details: ["info@infinityconstruction.com", "support@infinityconstruction.com"],
      color: "text-blue-500"
    },
    {
      icon: HiClock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-700" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-josefin-sans"
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-foreground/80 max-w-3xl mx-auto font-montserrat"
            >
              Ready to start your next construction project? We're here to help you bring your vision to life. 
              Contact us today for a free consultation.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-josefin-sans">
                Send us a Message
              </h2>
              <p className="text-foreground/70 font-montserrat">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-foreground font-montserrat">
                    Full Name *
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-montserrat"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-foreground font-montserrat">
                    Email Address *
                  </label>
                  <div className="relative">
                    <HiEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-montserrat"
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-foreground font-montserrat">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-montserrat"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-foreground font-montserrat">
                    Subject *
                  </label>
                  <div className="relative">
                    <HiChatAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-montserrat"
                      placeholder="What's this about?"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-foreground font-montserrat">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-montserrat resize-none"
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
                className="w-full bg-primary hover:bg-royal text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center space-x-2"
                  animate={isSubmitting ? { opacity: 0.7 } : { opacity: 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiEnvelope className="w-5 h-5" />
                      <span>Send Message</span>
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
                      <span>Message Sent!</span>
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
                      <span>Error! Try Again</span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-royal opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-josefin-sans">
                Contact Information
              </h2>
              <p className="text-foreground/70 font-montserrat">
                Get in touch with us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-lg bg-primary/10 ${info.color} group-hover:bg-primary/20 transition-colors duration-300`}
                    >
                      <info.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 font-montserrat">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <motion.p
                            key={detailIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * detailIndex }}
                            className="text-foreground/80 font-montserrat"
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg bg-primary/10 text-primary/70 ${social.color} transition-all duration-300 hover:bg-primary/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-josefin-sans">
              Find Us
            </h2>
            <p className="text-foreground/70 font-montserrat">
              Visit our office or get directions to our location.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-primary/20 to-royal/20 flex items-center justify-center relative">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="p-4 bg-primary/20 rounded-full mb-4 inline-block"
                >
                  <HiMapPin className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-montserrat">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-foreground/70 font-montserrat">
                  We're working on integrating an interactive map. For now, use the address above.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Contact1;
