import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  eyebrow?: string;
  center?: boolean;
  className?: string;
};

export default function SectionTitle({
  title,
  eyebrow,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        center && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={cn(
          "mt-5 h-1 w-12 rounded-full bg-primary/70",
          center && "mx-auto",
        )}
      />
    </div>
  );
}
