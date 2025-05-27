import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "danger";
}

export const GradientButton: FC<GradientButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "text-base tracking-[-0.32px] leading-none px-8 py-4 rounded-[48px] text-center w-full";

  const variants = {
    primary:
      // "bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-[#242426]",
      "bg-[#06B2E1] text-white font-medium",
    outline:
      "border border-[#0DAFDC] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)]",
    danger: "border border-[#FF3A3A] text-[#FF3A3A]",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
