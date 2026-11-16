import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  tags,
}) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 shadow-[0_12px_40px_-32px_rgba(20,50,37,0.3)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-32px_rgba(20,50,37,0.45)] sm:p-8">
    <div className="mb-7 flex items-start justify-between">
      <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="text-muted-foreground transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
      />
    </div>
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      {subtitle}
    </p>
    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
      {title}
    </h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
      {description}
    </p>
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  </article>
);

export default ServiceCard;
