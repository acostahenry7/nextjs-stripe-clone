import React from "react";
import { World } from "./ui/globe";
import { CustomGlobe } from "./CustomGlobe";
import { scaleMetrics } from "@/utils/constants";

const GlobalScale = () => {
  return (
    <section className="relative h-[130vh] md:h-[80vh] w-full overflow-hidden">
      <CustomGlobe />

      <div className=" absolute inset-0  bg-[#0a2540]/50   z-20 pointer-events-none">
        <div className="section_container py-20 flex flex-col justify-center  border-slate-600!">
          <h2 className="section_title text-[#00d4ff]!">Global Scale</h2>
          <h3 className="section_heading text-white! mt-6 w-3/5 md:w-1/3">
            The backbone for global commerce
          </h3>
          <p className="text-[18px] tracking-wider leading-7 text-[#adbdcc] mt-8 md:w-1/3">
            Squee makes discovering and sharing custom-designed products as
            effortless and intuitive as swiping through your favorite
            inspiration feed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mt-20">
            {scaleMetrics.map((metric) => (
              <div>
                <div className="border-l-1 border-l-[#00d4ff] pl-4 text-white font-bold text-2xl">
                  {metric.title}
                </div>
                <p className="text-[#adbdcc]">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalScale;
