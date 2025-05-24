"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Aquatrack Agtech Connect",
    logo: "/placeholder.svg?height=60&width=180",
    website: "https://www.aquatrackinc.com",
    description: "AgTech Management System, Marketplace & Community",
  },
  {
    name: "Envoyangel Logistics",
    logo: "/placeholder.svg?height=60&width=180",
    website: "https://www.envoyangel.com",
    description: "International Logistics Platform",
  },
  {
    name: "TruBooker",
    logo: "/placeholder.svg?height=60&width=180",
    website: "https://www.trubooker.com",
    description: "Trip Booking App",
  },
  {
    name: "Yoga Experience Africa",
    logo: "/placeholder.svg?height=60&width=180",
    website: "https://www.yogaexperiences.africa",
    description: "Yoga community and wellness application",
  },
];

// Create duplicated array for seamless infinite scroll
const duplicatedCompanies = [
  ...companies,
  ...companies,
  ...companies,
  ...companies,
];

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

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * companies.length * 8 - 32 * companies.length], // 8 = space-x-8 (32px), 32 = additional spacing
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: companies.length * 5, // 5 seconds per company
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.a
                  key={`${company.name}-${index}`}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 min-w-[280px]">
                    {/* Company Logo */}
                    <div className="flex items-center justify-center mb-4 h-16">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Placeholder logo with company initial */}
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {company.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {company.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-green-400 text-sm font-medium">
                        Visit Website →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

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
              2+
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
    </section>
  );
}
