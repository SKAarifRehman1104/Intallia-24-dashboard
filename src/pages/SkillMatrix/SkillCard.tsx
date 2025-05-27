
import React from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level?: "basic" | "intermediate" | "advanced" | "expert";
}

interface SkillCardProps {
  candidateName: string;
  skills: Skill[];
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  candidateName,
  skills,
  className,
}) => {
  // Function to determine progress value based on skill level
  const getProgressValue = (level?: string) => {
    switch (level) {
      case "basic":
        return 25;
      case "intermediate":
        return 50;
      case "advanced":
        return 75;
      case "expert":
        return 100;
      default:
        // If no level is specified, generate a random value between 25 and 100
        return Math.floor(Math.random() * 76) + 25;
    }
  };

  // Function to get progress bar color based on skill level
  const getProgressColor = (level?: string) => {
    switch (level) {
      case "basic":
        return "bg-[rgba(5,154,243,1)] ";
      case "intermediate":
        return "bg-[rgba(20,196,199,1)]";
      case "advanced":
        return "bg-[rgba(29,221,175,1)]";
      case "expert":
        return "bg-[rgba(39,246,151,1)]";
      default:
        // If no level is specified, assign a color based on the random value
        const randomValue = getProgressValue();
        if (randomValue <= 25) return "bg-[rgba(5,154,243,1)]";
        if (randomValue <= 50) return "bg-[rgba(20,196,199,1)]";
        if (randomValue <= 75) return "bg-[rgba(29,221,175,1)]";
        return "bg-[rgba(39,246,151,1)]";
    }
  };

  return (
    <div
      className={`items - center shadow-[0px_2.634px_4.139px_0px_rgba(0, 0, 0, 0.04)]bg - white self - stretch flex gap - 2.5 px - 3.5 py - [19px] rounded - [11.289px] ${className}`}
    >
      <div className="self-stretch w-[100%]">
        <div className="text-[#242426] text-base font-medium leading-none tracking-[-0.32px] ">
          {candidateName}
        </div>
        <div className="w-full text-xs text-[#7C7C80] font-normal leading-none mt-5 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-full  ${
                index > 0 ? "mt-[15px]" : ""
              }`}
            >
              <div
                className={`${
                  skill.name.includes("\n") ? " w-[34%] h-[29px]" : "h-3.5"
                } whitespace-nowrap mb-2`}
              >
                {skill.name.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < skill.name.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <Progress
                value={getProgressValue(skill.level)}
                className="h-2 bg-gray-100 w-[64%]"
                indicatorClassName={getProgressColor(skill.level)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
