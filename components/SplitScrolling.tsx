"use client";

import { securityFeatures } from "@/utils/constants";
import clsx from "clsx";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "./Button";

function SplitScroll() {
  const [active, setActive] = useState(0);
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start end", "end start"], // maps scroll of whole section
  });

  return (
    <section className="hidden md:block">
      <h2 className="section_title mb-10">Security features</h2>

      <div className="flex" ref={stickyRef}>
        <div className="w-1/2">
          {securityFeatures.map((section, i) => (
            <Section
              key={section.id}
              section={section}
              index={i}
              setActive={setActive}
            />
          ))}
        </div>

        <div className="w-1/2 sticky top-0 h-[84lvh] flex flex-col items-center justify-center p-12 bg-[#f5f9fc] text-black">
          {/* <motion.h2
            key={securityFeatures[active].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold mb-4"
          >
            {securityFeatures[active].title}
          </motion.h2> */}
          <motion.img
            src={securityFeatures[active].img}
            key={securityFeatures[active].id + "-desc"}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: [1],
              scale: 1,
              //   x: 0,
              //   y: securityFeatures[active].id === 1 ? -40 : 0,
            }}
            // animate={{ opacity: 1 }}
            // transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="w-[340px]"
          />
          {/* {securityFeatures[active].desc} */}
        </div>
      </div>
    </section>
  );
}

export { SplitScroll };

interface SectionProps {
  section: object;
  index: number;
  setActive: (index: number) => void;
}
function Section({ section, index, setActive }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.5,
    //margin: "-50px 0px 240px 0px",
  });

  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  let height = "h-[84lvh]";

  index === 0 && (height = "h-[50lvh]");

  return (
    <div
      ref={ref}
      className={clsx(" flex flex-col gap-10 justify-center flex-1/3 ", height)}
    >
      <h3 className="section_heading text-6xl! pl-0!">{section.title}</h3>
      <p className="text-[18px] font-normal text-[#425466] leading-6 tracking-wide">
        {section.desc}
      </p>
      {index > 0 && (
        <Button
          text={`Learn more about ${section.name}`}
          className="w-fit hover:bg-[#0a2540]!"
          bgColor="#635bff"
          textClassName="text-white"
        />
      )}
    </div>
  );
}
