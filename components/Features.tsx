"use client";
import { securityFeatures } from "@/utils/constants";
import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      //delay: i * 0.15, // delay based on index
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const Features = () => {
  return (
    <section className="md:hidden">
      <h2 className=" section_title mb-10">Security features</h2>
      <div className="flex flex-col gap-10">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={`mobile-feature-${index}`}
            className="flex flex-col gap-6"
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <h3
              className="section_heading pl-0!"
              style={{ fontSize: index === 0 ? 42 : "inherith" }}
            >
              {feature.title}
            </h3>
            <p className="text-[18px] font-normal text-[#425466] leading-8 tracking-wide">
              {feature.desc}
            </p>
            {index > 0 && (
              <Button
                text={`Learn more about ${feature.name}`}
                onClick={() => {}}
                className="w-fit hover:bg-[#0a2540]! text-[15px] py-1.5"
                bgColor="#635bff"
                textClassName="text-white"
              />
            )}

            <div className="pt-8 pb-12">
              <img
                src={feature.img}
                alt={feature.name}
                width={280}
                className="mx-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
