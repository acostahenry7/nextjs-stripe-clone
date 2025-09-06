import { brandLogos } from "@/utils/constants";
import React from "react";

const Brands = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-10 md:gap-6">
      {brandLogos.map((logo, index) => (
        <div
          key={`brand-${index}`}
          className="flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-[90px] md:w-[100px]"
          />
        </div>
      ))}
    </section>
  );
};

export default Brands;
