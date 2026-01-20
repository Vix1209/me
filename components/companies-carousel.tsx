"use client";

import { motion } from "framer-motion";
import React from "react";
import FloatingAnnouncement from "./Stats";

const originalCompanies = [
  {
    name: "Aquatrack",
    logo: "/logos/aquatrack.png",
    website: "https://www.aquatrackinc.com",
    description: "AgTech Management System, Marketplace & Community",
  },
  {
    name: "Envoyangel Logistics",
    logo: "/logos/envoy.png",
    website: "https://www.envoyangel.com",
    description: "International Logistics Platform",
  },
  {
    name: "TruBooker",
    logo: "/logos/trubooker.svg",
    website: "https://www.trubooker.com",
    description: "Trip Booking App",
  },
  {
    name: "Yoga Experience Africa",
    logo: "/logos/yea-logo.png",
    website: "https://www.yogaexperiences.africa",
    description: "Yoga community and wellness application",
  },
  {
    name: "TelefyTech",
    logo: "/logos/telefy.png",
    website: "https://telefytech.com/",
    description: "Telecommunications and IT Solutions",
  },
];

// const companies = [...originalCompanies, ...originalCompanies];
const companies = originalCompanies;

export default function CompaniesCarousel() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-400 text-lg">
            Building innovative solutions across fintech, agtech, and AI
            industries
          </p>
        </motion.div>

        {/* Companies Container */}
        <FloatingAnnouncement companies={companies} />

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-green-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              3+
            </motion.div>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-blue-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              50%
            </motion.div>
            <p className="text-gray-400">Error Reduction</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-purple-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              35%
            </motion.div>
            <p className="text-gray-400">Throughput Increase</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              100ms
            </motion.div>
            <p className="text-gray-400">Response Time</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
