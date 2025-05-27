import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactNode | LucideIcon;
  label: string;
  selected?: boolean;
}

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, selected = false }) => {
  const Icon = icon as LucideIcon;

  return (
    <div className={`flex items-center gap-1 ${selected ? "text-white" : "text-gray-700"}`}>
      {React.isValidElement(icon) ? (
        icon
      ) : (
        <Icon size={16} className={`${selected ? "text-white" : "text-gray-600"}`} />
      )}
      <span className="text-xs">{label}</span>
    </div>
  );
};
