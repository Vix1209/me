"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<{ left: string; top: string }[]>(
    []
  );

  useEffect(() => {
    // Generate particle positions on the client side only
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-24 h-24 mx-auto relative">
            <motion.div
              className="absolute inset-0 border-4 border-green-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-2 border-2 border-blue-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-green-400">U</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          UCHENNA OFOR
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Backend Engineer • Microservices Architect
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-green-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {progress}% • Initializing Portfolio...
        </motion.p>

        {/* Floating Particles - Only rendered after client-side positions are set */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
