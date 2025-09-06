"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  bgColor?: string;
  bgColorOnHover?: string;
  textClassName?: string;
}
const Button = ({
  text,
  onClick,
  className,
  bgColor,
  textClassName,
}: ButtonProps) => {
  return (
    <button
      id="button"
      onClick={onClick}
      style={{
        backgroundColor: bgColor || "white",
      }}
      className={clsx(
        "cursor-pointer rounded-full flex items-center pl-4 pr-1 py-1 text-white",
        className
      )}
    >
      <span className={clsx("font-bold", textClassName)}>
        {text || "Missing Text"}
      </span>

      <span className={clsx(textClassName)}>
        <MdKeyboardArrowRight size={20} className="" />
      </span>
    </button>
  );
};

export { Button };
