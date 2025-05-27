
import React from "react";
import { SkillBadge } from "./SkillBadge";
import { Skill } from "./types";

interface SkillSelectorProps {
  selectedSkills: string[];
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onRemoveSkill: (skillName: string) => void;
}

export const SkillSelector: React.FC<SkillSelectorProps> = ({
  selectedSkills,
  isDropdownOpen,
  onToggleDropdown,
  onRemoveSkill,
}) => {
  // Function to display the selected count display
  const getSelectedDisplay = () => {
    if (selectedSkills.length === 0) {
      return <span className="text-gray-400">Select skills from the dropdown</span>;
    }

    if (selectedSkills.length <= 2) {
      return selectedSkills.map((skill, index) => (
        <SkillBadge
          key={index}
          label={skill}
          onRemove={() => onRemoveSkill(skill)}
        />
      ));
    }

    // If more than 2 skills, show the first one and +X more
    return (
      <>
        <SkillBadge
          label={selectedSkills[0]}
          onRemove={() => onRemoveSkill(selectedSkills[0])}
        />
        <span className="bg-[rgba(235,255,248,1)] px-2 py-0.5 rounded-2xl text-[rgba(6,178,225,1)]">
          +{selectedSkills.length - 1} more
        </span>
      </>
    );
  };

  return (
    <div className="flex min-h-[76px] w-full flex-col items-stretch max-md:max-w-full">
      <div className="flex items-center gap-1 font-normal">
        <div className="text-[#444446] text-[15px] leading-none tracking-[-0.24px] self-stretch my-auto">
          Simulation Assigned
        </div>
        <div className="text-[#FF3A3A] text-sm leading-none self-stretch my-auto">
          *
        </div>
      </div>

      {/* Dropdown trigger */}
      <div className="justify-between items-center rounded border border-[color:var(--grey-grey-00,#E5E5EA)] bg-white flex min-h-12 w-full gap-[40px_100px] text-[13px] font-medium text-center tracking-[-0.08px] leading-none flex-wrap mt-2 px-4 py-3 border-solid max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 flex-wrap my-auto max-md:max-w-full">
          {getSelectedDisplay()}
        </div>
        <button
          onClick={onToggleDropdown}
          className="aspect-[1] w-6 shrink-0"
          aria-expanded={isDropdownOpen}
          aria-label="Toggle skills dropdown"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/d924405901639334d04991900c96c14c529db3a18f1c7d82505a232761b4f806?placeholderIfAbsent=true"
            className="w-full h-full object-contain"
            alt="Toggle dropdown"
          />
        </button>
      </div>

      {/* Dropdown content - shows when dropdown is open */}
      {isDropdownOpen && selectedSkills.length > 0 && (
        <div className="shadow-[0px_16px_32px_0px_rgba(0,144,216,0.10)] bg-white w-full overflow-hidden text-base text-[#212121] font-normal tracking-[-0.32px] leading-none p-4 rounded-lg max-md:max-w-full z-20 mt-2 border border-gray-100">
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill, index) => (
              <SkillBadge
                key={index}
                label={skill}
                onRemove={() => onRemoveSkill(skill)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillSelector;
