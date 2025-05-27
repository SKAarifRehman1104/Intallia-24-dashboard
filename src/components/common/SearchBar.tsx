import React from "react";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="border border-[#E5E5EA] w-full rounded-lg xl:w-[327px]">
      <div className="bg-white flex items-stretch gap-3 px-2 py-2.5 rounded-lg">
        <Search className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="grow shrink basis-auto text-[15px] text-[#000001] tracking-[-0.24px] leading-none outline-none"
        />
      </div>
    </div>
  );
};
