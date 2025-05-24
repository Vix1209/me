"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

const companies = [
  {
    name: "Aquatrack",
    logo: "/logos/aquatrack.png",
    website: "https://www.aquatrackinc.com",
    description: "AgTech Management System, Marketplace & Community",
  },
  {
    name: "Envoyangel Logistics",
    logo: "/logos/envoy.png",
    website: "https://www.envoyangel.com",
    description: "International Logistics Platform",
  },
  {
    name: "TruBooker",
    logo: "/logos/trubooker.svg",
    website: "https://www.trubooker.com",
    description: "Trip Booking App",
  },
  {
    name: "Yoga Experience Africa",
    logo: "/logos/yea-logo.png",
    website: "https://www.yogaexperiences.africa",
    description: "Yoga community and wellness application",
  },
];

// <Link className="z-10" href="/">
//   <div className="flex items-center h-8">
//     <div className="mr-2">
//       <Image
//         src="/logos/telefy.svg"
//         alt="Telefy Tech Logo"
//         className="h-8 text-primary-600 dark:text-primary-400"
//       />
//     </div>
//     <div className="font-display font-bold text-gray-800 dark:text-white">
//       <span className="text-primary-600 dark:text-primary-400">Telefy</span>
//       Tech
//     </div>
//   </div>
// </Link>;

export default function CompaniesCarousel() {
  const scrollRef: any = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Handle touch events for swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && isMobile) {
      scrollRight();
    }
    if (isRightSwipe && isMobile) {
      scrollLeft();
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-400 text-lg">
            Building innovative solutions across fintech, agtech, and AI
            industries
          </p>
        </motion.div>

        {/* Companies Container */}
        <div className="relative">
          {/* Mobile: Horizontal Scrollable */}
          <div
            className="sm:hidden relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={checkScrollPosition}
            >
              {companies.map((company, index) => (
                <motion.a
                  key={`mobile-${company.name}-${index}`}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group cursor-pointer"
                  // initial={{ opacity: 0, x: 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // transition={{ duration: 0.5, delay: index * 0.1 }}
                  // viewport={{ once: true }}
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 active:border-green-500/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 w-[280px] h-[240px] flex flex-col justify-center">
                    {/* Company Logo */}
                    <div className="flex items-center justify-center mb-4 h-16">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-32 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={80}
                              height={80}
                              priority
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="text-center flex-grow flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors leading-tight">
                        {company.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {company.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-green-400 text-sm font-medium">
                        Visit Website →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Navigation Arrows for Mobile */}
            {/* {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-gray-900/90 hover:bg-gray-300 hover:border-green-500/50 active:scale-95 transition-all duration-300 shadow-lg shadow-black/20"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}

            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-gray-900/90 hover:bg-gray-300 hover:border-green-500/50 active:scale-95 transition-all duration-300 shadow-lg shadow-black/20"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </motion.button>
            )} */}
          </div>

          {/* Desktop/Tablet: Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <motion.a
                key={`desktop-${company.name}-${index}`}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 w-[280px] h-[240px] flex flex-col justify-center">
                  {/* Company Logo */}
                  <div className="flex items-center justify-center mb-4 h-16">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-32 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={80}
                            height={80}
                            priority
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors leading-tight">
                      {company.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {company.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-green-400 text-sm font-medium">
                      Visit Website →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-green-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              2+
            </motion.div>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-blue-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              50%
            </motion.div>
            <p className="text-gray-400">Error Reduction</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-purple-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              35%
            </motion.div>
            <p className="text-gray-400">Throughput Increase</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              100ms
            </motion.div>
            <p className="text-gray-400">Response Time</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
