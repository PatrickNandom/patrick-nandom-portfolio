"use client";

import CountUpLib from "react-countup";
import { cn } from "@/lib/utils";

type CountUpProps = {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
};

export const CountUp = ({
  end,
  start = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  separator = ",",
  className,
}: CountUpProps) => {
  return (
    <CountUpLib
      start={start}
      end={end}
      duration={duration}
      decimals={decimals}
      separator={separator}
      prefix={prefix}
      suffix={suffix}
      className={cn("tabular-nums font-bold", className)}
    />
  );
};
