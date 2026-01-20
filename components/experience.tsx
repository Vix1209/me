"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, BookOpen } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer (Backend)",
    company: "Quivy",
    period: "July 2025 - December 2025",
    location: "Remote",
    achievements: [
      "Built a horizontally scalable, Dockerized backend in NestJS with clear service separation for an Event Management API, Gift Card API and worker layer using Redis and BullMQ to process high-volume background jobs.",
      "Designed data ingestion pipelines with caching (300s TTL) to reduce repeat reads and improve dashboard performance.",
      "Implemented atomic, race-condition-safe workflows using Redis primitives to enforce business invariants under concurrent load.",
      "Delivered idempotent task processing with automatic retries and real-time status updates via WebSockets.",
      "Integrated multiple third-party OAuth verification systems, handling unreliable external responses through retries and bulk job processing",
    ],
    color: "from-orange-400 to-red-600",
    type: "work",
  },
  {
    title: "Software Engineer (Backend)",
    company: "TelefyTech",
    period: "May 2025 - Oct 2025",
    location: "Remote",
    achievements: [
      "Architected a unified payments and data ingestion platform in NestJS/TypeScript with PostgreSQL/Drizzle, RabbitMQ, and Socket.IO for websockets.",
      "Integrated 5+ payment providers (Stripe, Paystack, Flutterwave, Binance Pay, NowPayments) through a single webhook/status mapping layer.",
      "Designed a resilient webhook pipeline with idempotency, signature verification, RabbitMQ retries/DLQ — achieving 99.8% webhook reliability and sub-2s payment confirmations.",
      "Secured the platform with dual authentication (JWT + API keys), RBAC guards, Redis rate limiting, and refresh-token rotation.",
      "Implemented audit-grade status history with full attribution and chronological tracking.",
    ],
    color: "from-blue-400 to-cyan-600",
    type: "work",
  },
  {
    title: "Software Engineer (Frontend)",
    company: "Eachblock Software Agency",
    period: "Sept 2024 - April 2025",
    location: "Remote",
    achievements: [
      "Engineered and delivered multiple production-grade web solutions, including admin dashboards, e-commerce platforms, and payment interfaces, using Next.js, TypeScript, TailwindCSS, and Redux Toolkit.",
      "Built custom, reusable UI components and design systems, reducing development time by 40% across multiple client projects.",
      "Integrated Next.js serverless APIs for secure cookie-based token storage, cutting potential cyber vulnerabilities by over 80%.",
      "Refactored and migrated a legacy logistics platform from Create React App (JavaScript) to Next.js (TypeScript), improving security, maintainability, and load performance by 60% while resolving long-standing memory leaks and redundant browser contexts.",
      "Collaborated closely with backend teams to refine API contracts, enhance data integrity, and maintain consistent TypeScript typings across the codebase.",
    ],
    color: "from-purple-400 to-pink-600",
    type: "work",
  },
  {
    title: "Software Engineer (Backend)",
    company: "Eden Cloudwave Technology",
    period: "June 2024 - April 2025",
    location: "Remote",
    achievements: [
      "Architected AI-powered financial management system enabling partnerships with major financial institutions",
      "Built Kafka-based microservice reducing reconciliation errors by 50% and increasing throughput by 35%",
      "Implemented gRPC/Redis integration achieving sub-100ms response times under peak load",
      "Automated CI/CD pipelines using Docker and GitHub Actions",
    ],
    color: "from-green-400 to-emerald-600",
    type: "work",
  },
  {
    title: "Software Engineer (Backend)",
    company: "Aquatrack Agtech Connect",
    period: "January 2024 - September 2024",
    location: "Remote",
    achievements: [
      "Developed RESTful APIs and microservices for agtech marketplace serving 100+ daily active users",
      "Implemented JWT authentication and RBAC ensuring regulatory compliance",
      "Optimized database performance achieving 40% faster operations and reduced infrastructure costs",
      "Deployed containerized services on AWS ECS with Terraform automation",
    ],
    color: "from-blue-400 to-cyan-600",
    type: "work",
  },
  {
    title: "Professional Development",
    company: "Career Break",
    period: "Sep 2022 - Dec 2023",
    location: "Personal",
    achievements: [
      "Advanced technical expertise in cloud architecture and distributed systems",
      "Completed specialized courses in system design and scalability patterns",
      "Contributed to open-source projects and developed technical portfolio",
      "Prepared for senior-level backend engineering responsibilities",
    ],
    color: "from-purple-400 to-pink-600",
    type: "break",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Zuri Team Inc",
    period: "May 2022 - Aug 2022",
    location: "Remote",
    achievements: [
      "Developed web applications using Django framework and modern development practices",
      "Collaborated in agile environment with cross-functional development teams",
    ],
    color: "from-orange-400 to-red-600",
    type: "work",
  },
  {
    title: "Back End Developer Intern",
    company: "Side Hustle",
    period: "April 2022 - Aug 2022",
    location: "Remote",
    achievements: [
      "Completed intensive Python development program (top 30 of 800+ participants)",
      "Led backend development and API integration for full-scale telecommunications web application",
    ],
    color: "from-teal-400 to-green-600",
    type: "work",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building scalable systems and driving innovation across fintech and
            agtech industries
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
                // transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} items-center justify-center relative z-10 flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                  // transition={{ duration: 0.3 }}
                >
                  {exp.type === "work" ? (
                    <TrendingUp className="text-white" size={24} />
                  ) : (
                    <BookOpen className="text-white" size={24} />
                  )}
                </motion.div>

                {/* Content */}
                <div className="md:ml-8 flex-1">
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-green-400 font-semibold">
                          {exp.company}
                        </h4>
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
                          // transition={{
                          //   duration: 0.5,
                          //   delay: index * 0.3 + achIndex * 0.1,
                          // }}
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
  );
}
