
import React, { useState, useMemo } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { SkillCard } from "@/pages/SkillMatrix/SkillCard";
import { SearchBar } from "@/pages/SkillMatrix/SearchBar";
import { FilterButton } from "@/pages/SkillMatrix/FilterButton";
import { SkillLevelLegend } from "@/pages/SkillMatrix/SkillLevelLegend";

const defaultSkills = [
  { name: "HTML/CSS", level: "expert" as const },
  { name: "Java Script", level: "advanced" as const },
  { name: "Python", level: "intermediate" as const },
  { name: "SQL", level: "basic" as const },
  { name: "CI/CD Tools" },
  { name: "Cloud\nServices" },
  { name: "Security\nProtocols" },
  { name: "Problem\nSolving" },
  { name: "Team\nCollaboration" },
  { name: "Writing\nDocumentation" },
];

const candidatesData = [
  { name: "Candidate A", skills: defaultSkills },
  { name: "Candidate B", skills: defaultSkills },
  { name: "Candidate C", skills: defaultSkills },
  { name: "Candidate D", skills: defaultSkills },
  { name: "Candidate A", skills: defaultSkills },
  { name: "Candidate B", skills: defaultSkills },
  { name: "Candidate C", skills: defaultSkills },
  { name: "Candidate D", skills: defaultSkills.slice(0, 9) },
];

const SkillMatrix = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  // Filter candidates based on search query
  const filteredCandidates = useMemo(() => {
    if (!searchQuery.trim()) return candidatesData;

    return candidatesData.filter((candidate) => {
      // Check if name matches
      if (candidate.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }

      // Check if any skill name matches
      return candidate.skills.some((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    });
  }, [searchQuery]);

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading">Skill Matrix</h1>
            </div>

            <div className="flex w-full gap-5 flex-wrap justify-between  max-md:max-w-full  ">
              <div className=" flex items-stretch gap-3.5 text-[17px] font-medium text-center tracking-[-0.41px] leading-none flex-wrap max-md:max-w-full   ">
                <FilterButton
                  text="Download PDF"
                  icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/b8cc731d2f8ae47e26e6f8f049e9634298b2407c?placeholderIfAbsent=true"
                />

                <FilterButton
                  text="Export To Excel"
                  icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/5d00ff1bc077944bbd10cd8c4044e6f4225d082a?placeholderIfAbsent=true"
                />
                <FilterButton
                  text="Filter By"
                  icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/810454ad8ea04a3bcb5bb799216e910c359d5640?placeholderIfAbsent=true"
                  variant="secondary"
                />
                <FilterButton
                  text="Choose Simulation"
                  icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/810454ad8ea04a3bcb5bb799216e910c359d5640?placeholderIfAbsent=true"
                  variant="secondary"
                />
              </div>

              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="flex w-full justify-between items-center gap-5 bg-white mt-[26px] px-12 rounded-lg py-[19px] max-md:max-w-full ">
              <h2 className="text-[#242426] text-[28px] font-medium leading-none tracking-[0.36px] w-full">
                All Skill Matrix {searchQuery && `- Search: "${searchQuery}"`}
              </h2>
              <SkillLevelLegend />
            </div>
            {filteredCandidates.length > 0 ? (
              <div className="grid grid-cols-12 gap-4">
                {filteredCandidates.map((candidate, index) => (
                  <SkillCard
                    key={index}
                    candidateName={candidate.name}
                    skills={candidate.skills}
                    className={
                      "col-span-12 md:col-span-3 bg-white py-[18px] px-[14px] m-2"
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8 text-center py-10 bg-gray-50 rounded-lg ">
                <p className="text-gray-500 text-lg">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default SkillMatrix
