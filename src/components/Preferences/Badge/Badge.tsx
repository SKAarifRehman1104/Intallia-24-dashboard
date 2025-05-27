import React from 'react';
import hotIcon from '@/assets/hot.svg';
import heartIcon from '@/assets/heart.svg';
import highIcon from '@/assets/high.svg';

export type BadgeType = 'demand' | 'hot' | 'favorite';

interface BadgeProps {
  type: BadgeType;
  label: string;
  selected?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ type, label, selected = false }) => {
  const getBadgeStyles = (): string => {
    const base = 'border rounded-lg text-xs inline-flex items-center gap-1.5 px-2 py-1.5 transition-all duration-200';
    const color =
      type === 'demand'
        ? selected
          ? 'border-white text-white'
          : 'border-rose-500 bg-white'
        : type === 'hot'
        ? selected
          ? 'border-white text-white'
          : 'border-orange-500 bg-white'
        : type === 'favorite'
        ? selected
          ? 'border-white text-white'
          : 'border-red-500 bg-white'
        : 'border-gray-300 text-gray-700 bg-white';

    return `${base} ${color}`;
  };

  const getIcon = (): React.ReactNode => {
    const iconSrc =
      type === 'demand'
        ? highIcon
        : type === 'hot'
        ? hotIcon
        : type === 'favorite'
        ? heartIcon
        : '';

    const iconColorClass = selected ? 'text-white' : getIconColorClass(type);

    return (
      <span className={`flex-shrink-0 ${iconColorClass}`}>
        <img src={iconSrc} alt={`${type} icon`} width={14} height={14} />
      </span>
    );
  };

  const getIconColorClass = (type: BadgeType): string => {
    switch (type) {
      case 'demand':
        return 'text-rose-600';
      case 'hot':
        return 'text-orange-600';
      case 'favorite':
        return 'text-red-600';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={getBadgeStyles()}>
      {getIcon()}
      <span className={`${!selected ? 'text-black' : ''}`}>{label}</span>
    </div>
  );
};
