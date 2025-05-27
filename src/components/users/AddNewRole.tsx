import { FC, useState } from "react";
import { Toggle } from "@/components/ui/toggle"; // Ensure this is correctly imported
import { cn } from "@/lib/utils";

interface AddNewRole {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  showActions?: boolean;
}

export const AddNewRole: FC<AddNewRole> = ({
  title,
  enabled,
  onToggle,
  showActions = true,
}) => {
  const [viewOnly, setViewOnly] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  return (
    <div className="justify-between items-center border border-[#E5E5EA] flex w-full gap-5 px-4 py-2 rounded-[5px] border-solid">
      <div className="flex items-center justify-between w-[375px] max-w-full">
        <div className="text-base text-[#242426] font-medium tracking-[-0.32px] leading-none">
          {title}
        </div>
        <Toggle pressed={enabled} onPressedChange={onToggle} />
      </div>

      {showActions && (
        <div className="flex items-center gap-10 text-base text-[#242426] font-normal tracking-[-0.32px] leading-none">
          {[
            { label: "View Only", state: viewOnly, setState: setViewOnly },
            { label: "Edit", state: canEdit, setState: setCanEdit },
            { label: "Delete", state: canDelete, setState: setCanDelete },
          ].map(({ label, state, setState }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2.5 cursor-pointer",
                state ? "text-[#0DAFDC]" : "",
              )}
              onClick={() => setState(!state)}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-6 h-6 rounded-sm border",
                  state ? "bg-[#0DAFDC] border-[#0DAFDC]" : "border-gray-300",
                )}
              >
                {state && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
