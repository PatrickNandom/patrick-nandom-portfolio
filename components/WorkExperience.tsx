import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Upperlink Digital",
    location: "Lagos, Nigeria",
    period: "08/2025 - Present",
    bullets: [
      "Contributing to software development projects using modern web technologies.",
    ],
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Software Developer Intern",
    company: "nHub Foundation",
    location: "Jos, Nigeria",
    period: "05/2023 - 11/2023",
    bullets: [
      "Collaborated with developers to build web applications.",
      "Assisted in backend development and API integration.",
    ],
    tech: ["JavaScript", "Node.js", "REST APIs"],
  },
];

export default function WorkExperience() {
  return (
    <ol className="relative mt-10 space-y-6 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-border md:ml-4 md:space-y-8">
      {experiences.map((experience) => (
        <li key={`${experience.company}-${experience.period}`} className="relative pl-14">
          <span
            aria-hidden="true"
            className="absolute left-0 top-7 grid size-10 place-items-center rounded-full border border-primary/20 bg-background text-primary shadow-sm"
          >
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
          <article className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-[0_12px_40px_-34px_rgba(20,50,37,0.35)] transition hover:border-primary/25 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {experience.title}
                </h3>
                <p className="mt-1 font-medium text-primary">
                  {experience.company}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} aria-hidden="true" />
                  {experience.location}
                </p>
              </div>
              <span className="w-fit rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {experience.period}
              </span>
            </div>
            <ul className="mt-5 space-y-2">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {experience.tech.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
