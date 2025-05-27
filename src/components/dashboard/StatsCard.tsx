import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, icon, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6 flex items-center justify-between ",
        "border border-border shadow-sm",
        className,
      )}
    >
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-xl font-semibold mt-1 font-">{value}</p>
      </div>
      <div className="h-12 w-12 flex items-center justify-center rounded-lg text-white gradient-background">
        {icon}
      </div>
    </div>
  );
}
