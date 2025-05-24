"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer (Backend)",
    company: "Eden Cloudwave Technology",
    period: "June 2024 – April 2025",
    location: "Remote",
    achievements: [
      "Architected AI-powered financial management system for SMEs, enabling partnerships with leading financial institutions",
      "Designed Kafka-backed microservice reducing manual reconciliation errors by 50% and increasing throughput by 35%",
      "Integrated gRPC/Redis service achieving sub-100ms response times under peak load",
      "Automated CI/CD pipelines using Docker and GitHub Actions",
    ],
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Software Engineer (Backend)",
    company: "Aquatrack Agtch Connect Ltd",
    period: "January 2024 – September 2024",
    location: "Remote",
    achievements: [
      "Developed RESTful APIs and microservices for agtech marketplace serving 100+ daily active users",
      "Implemented role-based access control and JWT authentication ensuring data privacy compliance",
      "Optimized database schemas achieving 40% faster read/write operations and reducing server costs",
      "Deployed containerized services on AWS ECS with Terraform and CloudWatch logging",
    ],
    color: "from-blue-400 to-cyan-600",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building scalable systems and driving innovation across fintech and agtech industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} items-center justify-center relative z-10 flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="text-white" size={24} />
                </motion.div>

                {/* Content */}
                <div className="md:ml-8 flex-1">
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-green-400 font-semibold">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3 + achIndex * 0.1,
                          }}
                        >
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
