"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp, BookOpen } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  overview?: string;
  achievements: string[];
  color: string;
  type: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer (Backend)",
    company: "Carlofty",
    period: "January 2026 - Present",
    location: "Remote (USA)",
    overview:
      "Carlofty is a B2B platform that lets Nigerian car dealers source, pay for, and import vehicles from US auctions — handling the currency conversion, compliance, and logistics in between.",
    achievements: [
      "Engineering the core payment pipeline handling NGN-to-USD conversion, deposit processing, and auction house settlement — the financial backbone behind every vehicle purchase on the platform; implementing funding enforcement logic that protects Carlofty from dealer default exposure on won bids.",
      "Delivering end-to-end flows that grants dealers bidding credentials on US auction platforms, including payment-gated activation and automated platform login provisioning; directly enabling revenue-generating dealer activity on the platform.",
      "Architecting the shipment tracking layer that connects vehicle wins to delivery milestones, laying the foundation for real-time visibility into the physical custody chain from US auction lot to Nigerian dealer.",
    ],
    color: "from-purple-400 to-pink-600",
    type: "work",
  },
  {
    title: "Software Engineer (Backend)",
    company: "Quivy",
    period: "July 2025 - December 2025",
    location: "Remote (Nigeria)",
    overview:
      "Quivy is a gifting and rewards platform that lets event hosts run giveaways and send gift cards, while giving merchants a branded gift card commerce system with branch-level redemption.",
    achievements: [
      "Designed and built a dockerized dual-service NestJS monorepo behind a reverse proxy layer handling TLS termination, rate limiting, and request routing — a giveaway service for event hosting/wallet management and a giftcard service for merchant commerce — each independently deployable and connected via gRPC, targeting African event hosts, merchants, and branch-level POS staff as distinct personas with distinct data ownership boundaries.",
      "Engineered a fault-tolerant inter-service communication layer using gRPC wrapped inside Bull job queues, so all cross-service calls are automatically queued and retried on failure — decoupling service uptime from cross-service consistency and protecting financial workflows from transient network failures.",
      "Built a multi-account fintech payment pipeline, HMAC-verified webhook ingestion, and a DB-first soft escrow model with full auditability, eliminating multiple API calls and making the platform's available-balance calculation authoritative at the application layer.",
      "Implemented atomic escrow workflows across distributed services: escrow creation, redemption settlement, and rollback paths — designed to be idempotent and race-condition-safe for concurrent giveaway claim submissions.",
      "Integrated multiple third-party OAuth verification systems, handling unreliable external responses through retries and bulk job processing",
    ],
    color: "from-orange-400 to-red-600",
    type: "work",
  },
  {
    title: "Software Engineer (Backend)",
    company: "Coincircuit",
    period: "May 2025 - Oct 2025",
    location: "Remote (UK)",
    overview:
      "CoinCircuit specializes in giving businesses the infrastructure to accept crypto/fiat payments, send payouts, and automate payment workflows globally.",
    achievements: [
      "Architected a unified payments and data ingestion platform in NestJS/TypeScript with PostgreSQL/Drizzle, RabbitMQ, and Socket.IO for websockets.",
      "Integrated 5+ payment providers through a single webhook/status mapping layer.",
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
    location: "Remote (Nigeria)",
    overview:
      "Eachblock Software Agency is a tech consultancy specializing in custom software solutions for e-commerce, fintech, and logistics. We focus on delivering high-quality, scalable, and secure applications that meet the unique needs of our clients.",
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
    period: "Sept 2024 - April 2025",
    location: "Remote (Nigeria)",
    overview:
      "Eden Cloudwave Technology provides AI-powered cloud solutions, digital innovation, and sustainable technology services designed to simplify everyday living and enhance operational efficiency.",
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
    location: "Remote (Nigeria)",
    overview:
      "AquaTrack is an all-in-one digital platform that empowers African fish farmers by providing AI-backed farm management tools, a marketplace to sell produce directly to consumers, and access to financial inclusion services.",
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

                    <div className="mb-4 ">
                      {exp.overview && (
                        <p className="text-gray-500 mt-2">{exp.overview}</p>
                      )}
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
