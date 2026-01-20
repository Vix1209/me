import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";

interface Company {
  name: string;
  logo: string;
  description: string;
  index: number;
  website: string;
}

const CarouselLayout: FC<Company> = ({
  name,
  logo,
  description,
  website,
  index,
}) => {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block mx-4"
    >
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 active:border-green-500/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10 w-[280px] h-[240px] flex flex-col justify-center">
        <div className="flex items-center justify-center mb-4 h-16">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-32 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                <Image src={logo} alt={name} width={80} height={80} priority />
              </span>
            </div>
          </div>
        </div>

        <div className="text-center flex-grow flex flex-col justify-center">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors leading-tight">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-green-400 text-sm font-medium">
            Visit Website →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CarouselLayout;
