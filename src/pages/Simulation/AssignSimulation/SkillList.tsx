
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Skill } from "./types";

interface SkillListProps {
  skills: Skill[];
  onToggleSkill: (id: number) => void;
}

export const SkillList: React.FC<SkillListProps> = ({ skills, onToggleSkill }) => {
  return (
    <div className="shadow-[0px_16px_32px_0px_rgba(0,144,216,0.10)] bg-white w-full overflow-hidden text-base text-[#212121] font-normal tracking-[-0.32px] leading-none p-1 rounded-lg max-md:max-w-full z-10 mt-2">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-white flex min-h-[46px] w-full items-center gap-2 flex-wrap px-4 py-[13px] rounded-lg max-md:max-w-full cursor-pointer hover:bg-gray-50"
        >
          <Checkbox
            id={`skill-${skill.id}`}
            checked={skill.selected}
            onCheckedChange={() => onToggleSkill(skill.id)}
            className="h-5 w-5 rounded border-[#AEAEB2]"
          />
          <label
            htmlFor={`skill-${skill.id}`}
            className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full cursor-pointer"
          >
            {skill.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
