"use client";

import { useState } from "react";
import { HiArrowRight, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const services = [
    "Building Construction",
    "Architecture Design", 
    "Building Renovation",
    "Flooring & Roofing",
    "Building Maintenance"
  ];

  const navigationLinks = [
    "About Us",
    "Blog", 
    "Services",
    "Marketing",
    "Testimonial",
    "Contact Us"
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            {/* Logo and Brand */}
            <div className="flex w-48 h-10 items-center mb-6">
              <Image
                src="/logo.png"
                alt="Infinity Construction"
                width={200}
                height={200}
              />
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-montserrat">
              At Infinity Construction Company, we are committed to delivering exceptional quality and unparalleled customer service.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-primary/20 hover:border-primary"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6 font-josefin-sans">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service}
                  className={`text-sm font-montserrat transition-colors duration-300 cursor-pointer ${
                    index === 0 
                      ? "text-primary font-semibold" 
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6 font-josefin-sans">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li
                  key={link}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer font-montserrat"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6 font-josefin-sans">
              Subscribe Our Newsletter
            </h4>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email"
                  className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-montserrat"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center justify-center space-x-2"
              >
                <span className="relative z-10 font-montserrat">Subscribe</span>
                <HiArrowRight className="w-4 h-4 relative z-10" />
              </button>
            </form>

            {/* Contact Info */}
            {/* <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <HiPhone className="w-4 h-4 text-primary" />
                <span className="font-montserrat">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <HiMail className="w-4 h-4 text-primary" />
                <span className="font-montserrat">info@infinityconstruction.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-foreground/70">
                <HiLocationMarker className="w-4 h-4 text-primary mt-0.5" />
                <span className="font-montserrat">123 Construction Ave, Building City, BC 12345</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright and Legal */}
      <div className="border-t border-primary/20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-foreground/60 font-montserrat">
              © Copyright 2024 Infinity Construction. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-foreground/60 font-montserrat">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms & Condition
              </a>
              <span className="text-primary/30">|</span>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
