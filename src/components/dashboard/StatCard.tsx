
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: number;
  trendLabel: string;
  color: string;
  className?: string;
};

const StatCard = ({
  title,
  value,
  icon,
  trend,
  trendLabel,
  color,
  className,
}: StatCardProps) => {
  const isPositive = trend > 0;
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={cn("p-3 rounded-full", `bg-${color}/10`)}>
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className={cn(
            "flex items-center text-sm font-medium",
            isPositive ? "text-emerald-600" : "text-rose-500"
          )}>
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
          <span className="text-sm text-gray-500 ml-1.5">{trendLabel}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
