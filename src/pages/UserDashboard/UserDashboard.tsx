
import React from "react";
import { Header } from "@/components/login/Header";
import { Sidebar } from "@/components/user dashboard/Sidebar";
import { CaseStudyGrid } from "@/components/user dashboard/CaseStudyGrid";

export const UserDashboard: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 max-w-[1920px] mx-auto w-full ">
        <Sidebar />
        <div className="border  w-px shrink-0 h-auto mx-2 md:mx-6" />
        <div className="flex-1 px-4 md:px-8 overflow-hidden">
          <CaseStudyGrid />
        </div>
      </div>
    </div>
  );
};
