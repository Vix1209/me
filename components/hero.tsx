"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Database, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = [
      "Software Engineer",
      "Microservice Architect",
      "AI Integration Specialist",
    ];
    const currentFullText = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      } else {
        // Add character
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.2 }}
              >
                <span className="text-gray-400 text-xl font-light">
                  Hello I&apos;m
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.4 }}
              >
                Uchenna Ofor.
              </motion.h1>

              <motion.div
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.6 }}
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  className="text-green-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  |
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.8 }}
            >
              Crafting scalable, high-performance backend systems with Node.js,
              TypeScript, and cutting-edge microservices architecture.
              Passionate about sustainable technology, automated systems and lightning-fast user
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5.1 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Build Something Amazing
              </motion.a>

              <motion.a
                href="#projects"
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            <motion.div
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                <Image
                  src="/images/my-avatar-2.png"
                  alt="Uchenna Ofor - Backend Engineer"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating glow effect around image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 5.5,
        }}
        initial={{ opacity: 0 }}
      >
        <ChevronDown className="text-green-400" size={32} />
      </motion.div>
    </section>
  );
}
