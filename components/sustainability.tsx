"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Recycle, Globe, Zap } from "lucide-react";

const sustainabilityFeatures = [
  {
    icon: Leaf,
    title: "Green Code",
    description:
      "Writing efficient, optimized code that reduces server load and energy consumption",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Building lightning-fast applications that minimize resource usage and carbon footprint",
  },
  {
    icon: Recycle,
    title: "Circular Development",
    description:
      "Implementing reusable, modular architectures that reduce development waste",
  },
  {
    icon: Globe,
    title: "SDG Alignment",
    description:
      "Contributing to UN Sustainable Development Goals through technology solutions",
  },
];

export default function Sustainability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sustainability"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            whileHover={{ rotate: 360 }}
            // transition={{ duration: 0.8 }}
          >
            <Leaf className="text-white" size={40} />
          </motion.div>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Sustainable Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            As a backend engineer, I&apos;m committed to building technology
            that not only performs exceptionally but also contributes to a
            sustainable future. Every line of code is an opportunity to make a
            positive impact.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          // transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 0.8, delay: 0.7 }}
          >
            Building for Tomorrow
          </motion.h3>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 0.8, delay: 0.9 }}
          >
            My work on projects like Edulite LMS directly addresses UN SDG-4
            (Quality Education for All), while my focus on efficient
            microservices and optimized database operations ensures minimal
            environmental impact. I believe that sustainable development
            isn&apos;t just about the environment—it&apos;s about creating
            technology that serves humanity for generations to come.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
