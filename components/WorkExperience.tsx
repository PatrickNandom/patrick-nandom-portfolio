import { Monitor, Globe } from "lucide-react";

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
    icon: Monitor,
    side: "left" as const,
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
    icon: Globe,
    side: "right" as const,
  },
];

type Experience = (typeof experiences)[0];

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      className="
      bg-white dark:bg-gray-900/60
      border border-gray-200 dark:border-gray-700/60
      rounded-xl p-6 shadow-sm
      dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)]
      dark:backdrop-blur-sm
      hover:cursor-pointer
      hover:border-gray-300 dark:hover:border-gray-500
      transition-colors duration-200
      w-full
    "
    >
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
        {exp.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400 text-sm mt-0.5">
        {exp.company}
      </p>
      <p className="text-gray-400 dark:text-gray-600 text-xs mt-0.5 mb-3">
        {exp.location}
      </p>

      <ul className="mb-4 text-gray-500 space-y-1.5">
        {exp.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-gray-700 dark:text-gray-400"
          >
            <span className="text-gray-400 dark:text-gray-600 mt-0.5">›</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="
              text-xs
              bg-gray-100 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-full px-3 py-1
              text-gray-600 dark:text-gray-400
            "
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 px-4">
      {/*Center vertical line (hidden on mobile)*/}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700/70" />

      <div className="flex flex-col gap-16">
        {experiences.map((exp, i) => {
          const Icon = exp.icon;
          const isLeft = exp.side === "left";

          return (
            <div key={i} className="relative flex items-center">
              <div className="md:hidden w-full">
                <p className="text-xs text-gray-400 dark:text-gray-600 font-medium mb-2">
                  {exp.period}
                </p>
                <ExperienceCard exp={exp} />
              </div>

              <div className="hidden md:flex w-full items-center">
                <div className="w-1/2 pr-12">
                  {isLeft ? (
                    <ExperienceCard exp={exp} />
                  ) : (
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-medium text-right">
                      {exp.period}
                    </p>
                  )}
                </div>

                {/* Center icon*/}
                <div
                  className="
                  absolute left-1/2 -translate-x-1/2 z-10
                  w-11 h-11 rounded-full
                  bg-gray-900 dark:bg-gray-950
                  border-2 border-transparent dark:border-gray-700
                  flex items-center justify-center
                  shadow-md dark:shadow-[0_0_12px_rgba(0,0,0,0.6)]
                  shrink-0
                "
                >
                  <Icon className="text-white dark:text-gray-300 w-4 h-4" />
                </div>

                <div className="w-1/2 pl-12">
                  {isLeft ? (
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                      {exp.period}
                    </p>
                  ) : (
                    <ExperienceCard exp={exp} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
