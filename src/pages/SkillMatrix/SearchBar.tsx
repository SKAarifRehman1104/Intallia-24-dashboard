
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // Also trigger search on typing for better UX
    onSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          type="text"
          value={searchValue}
          placeholder="Search skills or candidates"
          className="pl-10 pr-10 py-5 w-full rounded-lg border border-[#E5E5EA] bg-white text-[15px]"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm font-medium text-blue-500 hover:text-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};
