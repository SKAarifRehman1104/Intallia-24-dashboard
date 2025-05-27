import React from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "danger";
  fullWidth?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "text-base tracking-[-0.32px] leading-none px-7 py-3 rounded-[48px] text-center";

  const variants = {
    primary:
      "tracking-[-0.32px] text-base ring-[#06B2E1] border-[#06B2E1] text-white rounded-full bg-[#06B2E1] flex items-center justify-center",
    outline: "border border-[#06B2E1] ring-[#06B2E1] text-[#06B2E1]",
    danger:
      "border border-[#FF3A3A] text-[#010000] ring-[#FF3A3A] text-[#FF3A3A]",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
