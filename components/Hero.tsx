"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { TbPointFilled } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="flex md:mt-30 mt-8 h-auto">
      <div className="w-full md:w-1/2 lg:w-2/3 relative">
        <div
          className="absolute -top-4  md:-top-16 flex flex-col md:flex-row items-center justify-between 
        text-white text-[13px]  bg-black/20 rounded-sm md:rounded-full px-2 max-sm:py-1 max-sm:pt-2 max-sm:items-start"
        >
          <span className="pr-2 font-bold">Sessions 2025</span>
          <TbPointFilled className="hidden md:block" size={8} />
          <Button
            text="Watch on demand"
            onClick={() => {}}
            bgColor="transparent"
            className="pl-0! md:pl-2! pt-0"
          />
        </div>
        <h1 className="absolute top-20 md:top-0 mix-blend-overlay hero-text">
          Stop losing billable time you have already earned
        </h1>
        <h1 className="hero-text max-md:mt-20 opacity-40">
          Stop losing billable time you have already earned
        </h1>

        <p className="w-[calc(100%-30px)] mt-8 body-text">
          Sque is the Legal Revenue & Operating System — it captures work
          automatically and runs billing as your system of record. First invoice
          in 48 hours • Audit-ready proof in 14 days • 0 rejected e-bills
        </p>

        <div className="flex gap-1 mt-8">
          <Button
            onClick={() => {}}
            text="Start free trial"
            bgColor="#082543"
            bgColorOnHover="#3289cc"
            className="bg-red-500"
          />
          <Button
            onClick={() => {}}
            text="Calculate my recovery"
            textClassName="text-[#082543]"
          />
        </div>
      </div>
      {/* Desktop Only */}
      <div className="z-20 hidden md:block md:w-1/2 relative">
        <img
          src={"/assets/images/sque-hero.png"}
          alt="logo-sque"
          className="absolute w-full min-w-[1240px] h-[600px] shadow-md rounded-lg left-20 -top-14"
        />
      </div>
    </div>
  );
};

export default Hero;
