import React from "react";
import { Header } from "./Header";
//import { SearchBar } from "@/components/common/SearchBar";
import { SimulationGrid } from "@/pages/Simulation/SimulationGrid/SimulationGrid";
import { MainLayout } from "@/components/layout/MainLayout";

const Simulation: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex w-full max-md:max-w-full">
          <Header />
        </div>
        <SimulationGrid />
      </div>
    </MainLayout>
  );
};

export default Simulation;
