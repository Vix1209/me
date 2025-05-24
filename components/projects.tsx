"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "CodeScrutiny",
    subtitle: "AI-Powered Code Review Agent",
    description:
      "Built a RAG-driven microservice in NestJS that integrates GPT-4o-mini with Pinecone for contextual code review suggestions. Features REST API for client-side integrations and incremental feedback storage for personalized review sessions.",
    technologies: [
      "NestJS",
      "GPT-4o-mini",
      "Pinecone",
      "REST API",
      "TypeScript",
      "Python",
    ],
    icon: Brain,
    color: "from-purple-400 to-pink-600",
    github: "https://github.com/Vix1209/ai-code-review-agent-BE",
    // demo: "https://ai-code-review-agent.vercel.app/",
  },
  {
    title: "Edulite LMS",
    subtitle: "Learning Management System (Hackathon Winner)",
    description:
      "Contributed as Backend Developer to an open-source LMS addressing SDG-4: Quality Education for All. Designed and implemented APIs using NestJS and TypeScript. Won 3rd place in national hackathon with a team of 4.",
    technologies: ["NestJS", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    icon: GraduationCap,
    color: "from-green-400 to-blue-600",
    github: "https://github.com/Vix1209/Talenvo_X_Cleva-hackathon",
    // demo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in AI integration
            and scalable architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                {/* Project Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon className="text-white" size={32} />
                </motion.div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <h4 className="text-lg text-green-400 font-semibold mb-4">
                  {project.subtitle}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-gray-700"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                  {/* <motion.a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
