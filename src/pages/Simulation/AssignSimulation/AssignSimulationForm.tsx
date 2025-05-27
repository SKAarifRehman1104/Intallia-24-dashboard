
import React, { useState } from "react";
import { SkillSelector } from "./SkillSelector";
import { SkillList } from "./SkillList";
import { FormButtons } from "./FormButtons";
import { useToast } from "@/hooks/use-toast";
import { Skill, AssignSimulationFormProps } from "./types";
import { X } from "lucide-react";

// Define initial and available skills with the specified options
const availableSkills: Skill[] = [
  { id: 1, name: "MS PowerPoint", selected: false },
  { id: 2, name: "MS Excel", selected: false },
  { id: 3, name: "Google Slides", selected: false },
  { id: 4, name: "MS Word", selected: false },
  { id: 5, name: "Google Sheets", selected: false },
  { id: 6, name: "Google Docs", selected: false },
];

export const AssignSimulationForm: React.FC<AssignSimulationFormProps> = ({ onClose }) => {
  const { toast } = useToast();
  const [skills, setSkills] = useState(availableSkills);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get only selected skills for display
  const selectedSkills = skills.filter(skill => skill.selected).map(skill => skill.name);

  const handleToggleSkill = (id: number) => {
    setSkills(prevSkills =>
      prevSkills.map(skill =>
        skill.id === id ? { ...skill, selected: !skill.selected } : skill
      )
    );

    // Find the skill that was toggled
    const toggledSkill = skills.find(skill => skill.id === id);

    if (toggledSkill) {
      if (!toggledSkill.selected) {
        toast({
          title: "Skill Added",
          description: `${toggledSkill.name} has been added to simulations.`,
        });
      } else {
        toast({
          title: "Skill Removed",
          description: `${toggledSkill.name} has been removed from simulations.`
        });
      }
    }
  };

  const handleRemoveSkill = (skillName: string) => {
    setSkills(prevSkills =>
      prevSkills.map(skill =>
        skill.name === skillName ? { ...skill, selected: false } : skill
      )
    );

    toast({
      title: "Skill Removed",
      description: `${skillName} has been removed from simulations.`
    });
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSave = () => {
    console.log("Saving selected skills:", selectedSkills);
    toast({
      title: "Changes Saved",
      description: "Your simulation assignments have been saved.",
    });
  };

  const handleSendInvite = () => {
    console.log("Sending invite with skills:", selectedSkills);
    toast({
      title: "Invite Sent",
      description: "Simulation invite has been sent successfully.",
    });
  };

  return (
    <div className="items-stretch shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex flex-col overflow-hidden justify-center my-auto px-10 py-5 rounded-[15px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[766px] flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full items-center gap-5 text-xl font-semibold tracking-[0.38px] leading-none flex-wrap">
          <div className="bg-clip-text self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            Assign Simulation
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto cursor-pointer hover:opacity-80"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="w-full mt-[30px] max-md:max-w-full">
          <SkillSelector
            selectedSkills={selectedSkills}
            isDropdownOpen={isDropdownOpen}
            onToggleDropdown={handleToggleDropdown}
            onRemoveSkill={handleRemoveSkill}
          />

          <SkillList
            skills={skills}
            onToggleSkill={handleToggleSkill}
          />
        </div>

        <FormButtons
          onSave={handleSave}
          onSendInvite={handleSendInvite}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default AssignSimulationForm;
