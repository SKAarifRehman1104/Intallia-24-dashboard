import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ className, ...props }) => {
  return (
    <div className="border border-[#E5E5EA] w-full rounded-lg p-px">
      <div className="bg-white flex items-stretch gap-3 px-2 py-2.5 rounded-lg">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/8e486221a3aa872ac6493495dbd34cf8ae8115ffbb9b58307261e5e928976bf0?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 shrink-0"
          alt="Search"
        />
        <input
          type="text"
          className={cn(
            "grow text-[15px] text-[#7C7C80] tracking-[-0.24px] leading-none bg-transparent outline-none",
            className,
          )}
          placeholder="Search"
          {...props}
        />
      </div>
    </div>
  );
};
