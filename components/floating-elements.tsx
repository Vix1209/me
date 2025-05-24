"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  left: string;
  top: string;
  xOffset?: number;
  yOffset?: number;
};

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [largeParticles, setLargeParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particle positions on the client side only
    const newParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xOffset: Math.random() * 50 - 25,
    }));
    setParticles(newParticles);

    const newLargeParticles = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xOffset: Math.random() * 100 - 50,
    }));
    setLargeParticles(newLargeParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Cursor Follower */}
      <motion.div
        className="absolute w-4 h-4 bg-green-400/30 rounded-full blur-sm"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/20 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Larger Floating Elements */}
      {largeParticles.map((particle, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, particle.xOffset, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Interactive Elements that respond to mouse */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`interactive-${i}`}
          className="absolute w-3 h-3 bg-green-400/5 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.01 * (i + 1),
            y: (mousePosition.y - window.innerHeight / 2) * 0.01 * (i + 1),
            rotate: [0, 360],
          }}
          transition={{
            x: { type: "spring", damping: 50, stiffness: 100 },
            y: { type: "spring", damping: 50, stiffness: 100 },
            rotate: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
}
