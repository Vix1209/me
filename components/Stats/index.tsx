import React from "react";
import "./index.css";
import CarouselLayout from "../CarouselLayout";

const FloatingAnnouncement = ({ companies }: any) => {
  return (
    <div className="text-black">
      <div className="announcement-content w-full mx-auto text-center">
        <div className="flex items-center gap-3">
          {companies.map((company: any, index: number) => (
            <div key={index} className="min-w-[300px] p-2">
              <CarouselLayout
                name={company.name}
                logo={company.logo}
                website={company.website}
                description={company.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingAnnouncement;
