import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const GradientButton = ({ text }: { text: string }) => {
  return (
    <button id="button" className="hidden lg:block">
      <span className="font-bold bg-white cursor-pointer px-4 py-1.5 rounded-full mix-blend-color-dodge flex items-center">
        {text || "Missing Text"}
        <MdKeyboardArrowRight size={20} className="" />
      </span>
    </button>
  );
};

export default GradientButton;
