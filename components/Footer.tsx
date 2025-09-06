import { footerLinks } from "@/utils/constants";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-14    ">
        <img
          src="/assets/images/sque-logo.svg"
          alt="Logo Sque"
          className="w-14"
        />
        <div className="w-full grid text-center grid-cols-1 md:grid-cols-3">
          {footerLinks.map((link) => (
            <p className="text-[18px] text-gray-400">{link}</p>
          ))}
        </div>
      </div>
      {/* Social */}
      <div></div>
    </footer>
  );
};

export default Footer;
