"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "Node.js",
      "NestJS",
      "React",
      "Nextjs",
      "Express",
      "TypeScript",
      "JavaScript",
    ],
    color: "from-green-400 to-emerald-600",
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "from-blue-400 to-cyan-600",
  },
  {
    category: "Messaging & Microservices",
    items: ["Kafka", "RabbitMQ", "gRPC", "Redis Pub/Sub"],
    color: "from-purple-400 to-violet-600",
  },
  {
    category: "API & Integration",
    items: ["RESTful APIs", "GraphQL", "OpenAPI/Swagger"],
    color: "from-yellow-400 to-orange-600",
  },
  {
    category: "Testing & Automation",
    items: ["Jest", "Pytest", "GitHub Actions", "Docker"],
    color: "from-pink-400 to-rose-600",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "AWS ECS", "CI/CD", "Docker", "CloudFront"],
    color: "from-indigo-400 to-blue-600",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks I use to build scalable,
            high-performance systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} mb-4 flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-xl">
                    {skill.category.charAt(0)}
                  </span>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-gray-700 hover:border-green-500 transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + itemIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
