import { LucideIcon } from 'lucide-react';

// Use an enum for BadgeType for stricter typing and better developer experience
export enum BadgeType {
  Demand = 'demand',
  Hot = 'hot',
  Favorite = 'favorite',
}

export interface Badge {
  type: BadgeType;
  label: string;
}

export interface InfoItem {
  icon: React.ReactNode | LucideIcon;
  label: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  badges: { type: BadgeType; label: string }[];
  infoItems: { icon: LucideIcon; label: string }[];
  verticalLabel?: string; // <- Add this line
}

