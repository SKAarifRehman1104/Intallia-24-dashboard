
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import companyLogo from "@/assets/Frame 25.svg"

interface HeaderProps {
  title: string;
  subtitle: string;
  profileImageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, profileImageUrl }) => {
  return (
    <header className="shadow-sm border-b border-gray-100 self-stretch flex w-full flex-col items-center text-center justify-center bg-white py-3 px-4 md:px-16">
      <div className="flex w-full max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={companyLogo}

            alt=""
          />

        </div>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={profileImageUrl}
                alt="Profile"
                className="cursor-pointer w-10 h-10 rounded-full object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white rounded-md border border-[#1EAEDB]">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Scores</DropdownMenuItem>
              <DropdownMenuItem>Skill Matrix</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
