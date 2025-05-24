"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Database, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-20 text-green-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Code size={40} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-blue-400"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Database size={35} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 text-yellow-400"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Zap size={30} />
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          className="mb-6"
        >
          <span className="text-green-400 text-lg font-mono">
            Hello, I&apos;m
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 4.2 }}
        >
          UCHENNA OFOR
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-gray-300 mb-8 space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <div>Backend Engineer</div>
          <div className="text-green-400">Microservices Architect</div>
          <div className="text-blue-400">AI Integration Specialist</div>
        </motion.div>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.8 }}
        >
          Crafting scalable, high-performance backend systems with Node.js,
          TypeScript, and cutting-edge microservices architecture. Passionate
          about sustainable technology and lightning-fast user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5.1 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Build Something Amazing
          </motion.a>

          <motion.a
            href="#projects"
            className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-green-400" size={32} />
      </motion.div>
    </section>
  );
}
