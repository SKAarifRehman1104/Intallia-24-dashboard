import { FC, useState } from "react";
import ToggleSwitch from "@/components/ui/toggle-switch";

interface AccessControl {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  showActions?: boolean;
}

export const AccessControl: FC<AccessControl> = ({
  title,
  showActions = true,
}) => {
  const [viewOnly, setViewOnly] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const cn = (...classes: string[]) => classes.filter(Boolean).join(" "); // Utility function for class names

  return (
    <div className="justify-between items-center border border-[#E5E5EA] flex w-full gap-5 px-4 py-2 rounded-[5px] border-solid">
      <div className="flex items-center justify-between w-[375px] max-w-full">
        <div className="text-sm text-[#242426] font-normal tracking-[-0.32px] leading-none">
          {title}
        </div>
        {/* <Toggle enabled={enabled} onToggle={onToggle} /> */}
        <ToggleSwitch />
      </div>

      {showActions && (
        <div className="flex items-center gap-10 text-base text-[#242426] font-normal tracking-[-0.32px] leading-none">
          <div
            className={cn(
              "flex items-center gap-2.5 cursor-pointer",
              viewOnly ? "text-[#06B2E1]" : "",
            )}
            onClick={() => setViewOnly(!viewOnly)}
          >
            <div
              className={cn(
                "flex items-center  justify-center w-6 h-6 rounded-sm border",
                viewOnly ? "bg-[#06B2E1] border-[#06B2E1]" : "border-gray-300",
              )}
            >
              {viewOnly && (
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
            <div className="text-sm">View Only</div>
          </div>

          <div
            className={cn(
              "flex items-center gap-2.5 whitespace-nowrap cursor-pointer",
              canEdit ? "text-[#06B2E1]" : "",
            )}
            onClick={() => setCanEdit(!canEdit)}
          >
            <div
              className={cn(
                "flex items-center justify-center w-6 h-6 rounded-sm border",
                canEdit ? "bg-[#06B2E1] border-[#06B2E1]" : "border-gray-300",
              )}
            >
              {canEdit && (
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
            <div className="text-sm ">Edit</div>
          </div>

          <div
            className={cn(
              "flex items-center gap-2.5 whitespace-nowrap cursor-pointer",
              canDelete ? "text-[#06B2E1]" : "",
            )}
            onClick={() => setCanDelete(!canDelete)}
          >
            <div
              className={cn(
                "flex items-center justify-center w-6 h-6 rounded-sm border",
                canDelete ? "bg-[#06B2E1] border-[#06B2E1]" : "border-gray-300",
              )}
            >
              {canDelete && (
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
            <div className="text-sm">Delete</div>
          </div>
        </div>
      )}
    </div>
  );
};
