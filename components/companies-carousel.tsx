"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselLayout from "./CarouselLayout";

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

export default function CompaniesCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

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
        <div className="pt-4 lg:pt-10">
          <Carousel
            className="w-full mx-auto text-center ps-4 pb-8"
            plugins={[plugin.current]}
            setApi={setApi}
          >
            <CarouselPrevious className="lg:block hidden text-black ps-2" />
            <CarouselContent className="-ms-1 w-full text-start">
              {companies.map((company, index: number) => (
                <CarouselItem
                  key={index}
                  className="w-full h-auto pl-1 basis-full sm:basis-1/2 xl:basis-1/3"
                >
                  <div className="w-full h-full">
                    <CarouselLayout
                      name={company.name}
                      logo={company.logo}
                      website={company.website}
                      description={company.description}
                      index={index}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="lg:block hidden text-black ps-2" />
          </Carousel>

          {/* Mobile Pagination Dots */}
          <div className="sm:hidden flex justify-center items-center mt-6 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-green-400 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
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
              3+
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
