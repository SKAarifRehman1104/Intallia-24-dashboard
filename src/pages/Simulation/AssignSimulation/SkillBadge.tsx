import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  selected?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  label,
  selected,
  onRemove,
  className,
}) => {
  return (
    <div
      className={cn("bg-blend-multiply self-stretch flex my-auto", className)}
    >
      <div className="bg-[rgba(235,255,248,1)] flex items-center gap-1 justify-center pl-2 pr-1.5 py-0.5 rounded-2xl">
        <div className="bg-clip-text bg-[linear-gradient(90deg,#06B2E1_0%,#09CE88_100%)] self-stretch my-auto">
          {label}
        </div>
        {onRemove && (
          <button
            onClick={onRemove}
            className="self-stretch flex w-3 shrink-0 h-3 my-auto hover:opacity-80"
            aria-label={`Remove ${label}`}
          />
        )}
      </div>
    </div>
  );
};

export default SkillBadge;
