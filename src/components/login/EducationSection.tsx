import React, { useState } from "react";
import { Plus, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Education {
  id: string;
  school: string;
  collapsed?: boolean;
}

interface EducationSectionProps {
  onAdd: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  onAdd,
}) => {
  const [educations, setEducations] = useState<Education[]>([
    { id: "1", school: "Education 1" },
  ]);

  const handleAdd = () => {
    const newId = (educations.length + 1).toString();
    setEducations([
      ...educations,
      { id: newId, school: `Education ${educations.length + 1}` },
    ]);
  };

  const handleDelete = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const toggleCollapse = (id: string) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, collapsed: !edu.collapsed } : edu,
      ),
    );
  };

  return (
    <section className="w-full mt-[30px]">
      <h2 className="text-xl font-medium tracking-[0.38px] bg-clip-text bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-transparent">
        Education
      </h2>

      <div className="w-full mt-5 space-y-2.5">
        {educations.map((education) => (
          <div
            key={education.id}
            className="rounded bg-white w-full p-4 border-2 border-[#F2F2F7]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={() => toggleCollapse(education.id)}>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 transition-transform",
                      education.collapsed && "rotate-180",
                    )}
                  />
                </button>
                <h3 className="text-[15px] font-semibold text-black tracking-[-0.24px]">
                  {education.school}
                </h3>
              </div>
              <button onClick={() => handleDelete(education.id)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {!education.collapsed && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1">
                    <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                      Degree
                    </span>
                    <span className="text-[#FF3A3A] text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter degree"
                    className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1">
                    <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                      College
                    </span>
                    <span className="text-[#FF3A3A] text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter college"
                    className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1">
                    <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                      Start Date
                    </span>
                    <span className="text-[#FF3A3A] text-sm ">*</span>
                  </label>
                  <input
                    type="date"
                    className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1">
                    <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                      End Date
                    </span>
                    <span className="text-[#FF3A3A] text-sm">*</span>
                  </label>
                  <input
                    type="date"
                    className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleAdd}
        className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.24px] mt-5 p-2 rounded"
      >
        <Plus className="w-6 h-6 text-[#0DAFDC]" />
        <span className="bg-clip-text bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-transparent">
          Add Education
        </span>
      </button>
    </section>
  );
};
