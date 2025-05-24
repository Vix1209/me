"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ucheofor2015@gmail.com",
      href: "mailto:ucheofor2015@gmail.com",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (0) 810 060 8127",
      href: "tel:+2348100608127",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@uchenna-ofor",
      href: "https://linkedin.com/in/uchenna-ofor",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Vix1209",
      href: "https://github.com/Vix1209",
      color: "from-gray-400 to-gray-600",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss your next project? I&apos;m always excited to work
            on innovative solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether you&apos;re looking to build scalable microservices,
                integrate AI solutions, or optimize your backend architecture,
                I&apos;d love to hear about your project.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-green-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="text-white" size={20} />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-gray-400 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-gray-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-gray-400 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Project discussion"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-400">
            © 2025 Uchenna Ofor. Built with passion for sustainable technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
