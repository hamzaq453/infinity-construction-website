"use client";

import { useState, useMemo } from "react";
import {
  HiArrowRight,
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { industrialServicesData } from "@/components/Services/industrialData";
import { residentialServicesData } from "@/components/Services/residentialData";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  // Get 5 random services from both industrial and residential data
  const services = useMemo(() => {
    // Combine all services from both arrays
    const allServices = [
      ...industrialServicesData.services.map((service) => ({
        title: service.title,
        slug: service.slug,
        type: "industrial" as const,
      })),
      ...residentialServicesData.services.map((service) => ({
        title: service.title,
        slug: service.slug,
        type: "residential" as const,
      })),
    ];

    // Shuffle array and get 5 random services
    const shuffled = [...allServices].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/InfinityCCPK",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/infinityCCPK",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/infinityccpk/",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/infinityccpk",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="w-full px-8 sm:px-7 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
          {/* Company Information */}
          <div className="lg:col-span-1">
            {/* Logo and Brand */}
            <Link href="/" className="flex w-48 h-10 items-center mb-6">
              <Image
                src="/logo.png"
                alt="Infinity Construction"
                width={200}
                height={200}
              />
            </Link>

            {/* Description */}
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-montserrat">
              At Infinity Construction Company, we are committed to delivering
              exceptional quality and unparalleled customer service.
            </p>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6 font-josefin-sans">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={`${service.type}-${service.slug}`}>
                  <Link
                    href={`/${service.type}/${service.slug}`}
                    className={`text-sm font-montserrat transition-colors duration-300 cursor-pointer block text-foreground/70 hover:text-primary
                    `}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6 font-josefin-sans">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2 font-montserrat">
              {navigationLinks.map((link, index) => (
                <Link
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer "
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            {/* <form onSubmit={handleNewsletterSubmit} className="space-y-4 mb-4">
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
            </form> */}
            <div className="mt-4">
              <div className="flex-col items-center gap-3 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <HiPhone className="w-5 h-5 text-primary" />
                  Call Us:
                </div>

                <a
                  href="tel:03218413284"
                  target="_blank"
                  className="font-montserrat text-sm tracking-wide hover:underline"
                >
                  03218413284
                </a>
              </div>
              <div className="flex-col items-center gap-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <HiMail className="w-5 h-5 text-primary" />
                  Email Us:
                </div>
                <a
                  href="mailto:infinityconstructioncompany@gmail.com"
                  target="_blank"
                  className="font-montserrat text-sm hover:underline"
                >
                  infinityconstructioncompany@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  href={social.href}
                  target="_blank"
                  key={social.label}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-primary/20 hover:border-primary"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

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
              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms & Condition
              </Link>
              <span className="text-primary/30">|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
