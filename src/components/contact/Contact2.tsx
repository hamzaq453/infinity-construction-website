"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HiMail, 
  HiPhone, 
  HiUser,
  HiChatAlt2,
  HiCheckCircle,
  HiExclamationCircle,
  HiLocationMarker,
  HiClock
} from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-600", label: "Facebook" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-700", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500", label: "Instagram" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600", label: "YouTube" },
    { icon: FaGithub, href: "#", color: "hover:text-gray-400", label: "GitHub" }
  ];

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "info@infinityconstruction.com",
      href: "mailto:info@infinityconstruction.com"
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "New York, NY",
      href: "#"
    },
    {
      icon: HiClock,
      label: "Hours",
      value: "Mon - Fri: 8AM - 6PM",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-josefin-sans"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-foreground/70 font-montserrat max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form - Minimal Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2 font-josefin-sans">
                Send Message
              </h2>
              <p className="text-foreground/60 font-montserrat">
                We'll get back to you within 24 hours.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Name Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                  Name
                </label>
                <div className="relative">
                  <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                    placeholder="Your name"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                  Email
                </label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-montserrat"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-foreground/80 mb-2 font-montserrat">
                  Message
                </label>
                <div className="relative">
                  <HiChatAlt2 className="absolute left-3 top-4 text-primary/50 w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-foreground/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-montserrat resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(3, 93, 157, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-royal text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
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
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiChatAlt2 className="w-4 h-4" />
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
                      <HiCheckCircle className="w-4 h-4" />
                      <span>Sent!</span>
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
                      <HiExclamationCircle className="w-4 h-4" />
                      <span>Error!</span>
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

          {/* Contact Information - Minimal Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2 font-josefin-sans">
                Get In Touch
              </h2>
              <p className="text-foreground/60 font-montserrat">
                Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block p-4 bg-transparent border border-foreground/10 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <info.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-foreground/60 font-montserrat">{info.label}</p>
                      <p className="text-foreground font-medium font-montserrat">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Follow Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-foreground/10"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 font-josefin-sans">
                Follow Us
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-transparent border border-foreground/10 text-foreground/60 ${social.color} transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 group`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 mx-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${80 + (i % 3) * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact2;
