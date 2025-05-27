import React from "react";

interface FilterButtonProps {
  text: string;
  icon?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  icon,
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "flex items-center gap-2 justify-center pl-4 pr-2 py-2 rounded-[48px] border border-solid";
  const variantStyles =
    variant === "primary"
      ? "text-[#06B2E1] border-[rgba(6,178,225,1)]"
      : "text-[#444446] border-[#444446]";

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      <span className="self-stretch my-auto">{text}</span>
      {icon && (
        <img
          src={icon}
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt={`${text} icon`}
        />
      )}
    </button>
  );
};
