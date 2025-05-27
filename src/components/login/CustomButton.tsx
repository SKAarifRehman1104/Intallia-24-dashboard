
import React from "react";

interface CustomButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  icon,
  onClick,
}) => {
  // Style constants per Figma
  const baseClasses =
    "min-w-[108px] h-[48px] flex items-center justify-center gap-2 px-7 rounded-[24px] text-[18px] font-normal focus:outline-none transition-colors duration-150 select-none";
  const variantClasses =
    variant === "primary"
      ? "bg-[#242426] text-white border border-[#242426] hover:bg-[#3a3a3d]"
      : "bg-transparent text-[#242426] border border-[#BDBDBD] hover:bg-[#fafafa]";
  const iconSize = 19;

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      type="button"
    >
      <span className="flex-1 text-[18px] leading-[20px]">{children}</span>
      <img
        src={icon}
        alt=""
        className={`object-contain ml-2`}
        style={{ width: iconSize, height: iconSize }}
        draggable={false}
      />
    </button>
  );
};