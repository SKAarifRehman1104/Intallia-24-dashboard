
import React from "react";
import { Header } from "@/components/login/Header";
import { Sidebar } from "./Sidebar";
import { CaseStudyGrid } from "./CaseStudyGrid";

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 max-w-[1920px] mx-auto w-full">
        <Sidebar />
        <div className="border bg-[#E5E5EA] w-px shrink-0 h-auto mx-2 md:mx-6" />
        <div className="flex-1 px-4 md:px-8 overflow-hidden">
          <CaseStudyGrid />
        </div>
      </div>
    </div>
  );
};
