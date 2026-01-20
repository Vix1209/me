import React from "react";
import Marquee from "react-fast-marquee";
import CarouselLayout from "../CarouselLayout";

const FloatingAnnouncement = ({ companies }: any) => {
  return (
    <div className="text-black py-8">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {companies.map((company: any, index: number) => (
          <CarouselLayout
            key={index}
            name={company.name}
            logo={company.logo}
            website={company.website}
            description={company.description}
            index={index}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default FloatingAnnouncement;
