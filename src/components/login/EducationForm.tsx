
import React, { useState } from "react";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";

export const EducationForm: React.FC = () => {

  return (
    <div className="mt-10 max-md:max-w-full w-[72%] ml-5 max-md:w-full max-md:ml-0">
       <EducationSection onAdd={() => console.log("Add education")} />
       <ExperienceSection onAdd={() => console.log("Add experience")} />
    </div>
  );
};