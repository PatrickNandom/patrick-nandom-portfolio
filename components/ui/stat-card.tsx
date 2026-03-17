import { ReactNode } from "react";
import { CountUp } from "./count-up";

type StatCardProps = {
  icon?: ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
};

export const StatCard = ({
  icon,
  value,
  label,
  suffix = "+",
  prefix,
}: StatCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-3 ">
      {icon && <div className="text-muted-foreground">{icon}</div>}

      <div className="text-4xl font-bold">
        <CountUp end={value} suffix={suffix} prefix={prefix} />
      </div>

      <p className="text-sm text-muted-foreground ">{label}</p>
    </div>
  );
};
