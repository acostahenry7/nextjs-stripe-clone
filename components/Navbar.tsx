"use client";
import { SqueLogo } from "./ui/SqueLogo";
import { MdMenu } from "react-icons/md";
import { navbarLinks } from "../utils/constants";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "./Button";
import GradientButton from "./GradientButton";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-between items-center py-4 md:hidden box-border">
        <SqueLogo />
        <div
          className="bg-slate-500/20 rounded-full hover:bg-slate-500/30 focus:bg-slate-500/30 px-4 py-2"
          onClick={() => console.log("hi")}
        >
          <MdMenu size={18} className="text-red-100" />
        </div>
      </nav>
      {/* Desktop Navigation */}
      <nav className="w-full flex justify-between items-center py-4 max-md:hidden box-border">
        <div className=" flex gap-6">
          <SqueLogo />
          {navbarLinks.map((link, index) => (
            <div
              key={`navbar-link-${index}`}
              className="ml-4 flex items-center  text-white cursor-pointer hover:text-slate-300 transition-colors duration-300"
            >
              <a className="font-bold">{link.name}</a>
              {index < 3 && (
                <MdKeyboardArrowDown className="mt-0.5" size={20} />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center font-bold">
          {/* <a className="text-white">Sign in</a> */}
          <Button
            onClick={() => {}}
            text="Sign in"
            bgColor="transparent"
            className=""
          />
          <GradientButton text="Contact sales" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
