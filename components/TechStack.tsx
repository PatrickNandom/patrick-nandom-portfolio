import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiPrisma,
  SiMysql,
  SiPostman,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const row1 = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Postman", icon: <SiPostman /> },
];

const row2 = [
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const StackRow = ({
  items,
  direction,
}: {
  items: typeof row1;
  direction: "normal" | "reverse";
}) => (
  <div className="flex overflow-hidden group py-2 w-full">
    <div
      className="flex flex-nowrap gap-6 min-w-max px-3"
      style={{
        animation: `${direction === "normal" ? "marquee" : "marquee-reverse"} 40s linear infinite`,
      }}
    >
      {[...items, ...items, ...items].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-white"
        >
          <span className="text-2xl text-black">{item.icon}</span>
          <span className="text-gray-700 text-sm font-semibold">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const marqueeStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-33.33%); }
      100% { transform: translateX(0); }
    }
  `;

  return (
    <div className="w-full py-8">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />

      <div className="flex flex-col gap-6">
        <StackRow items={row1} direction="normal" />
        <StackRow items={row2} direction="reverse" />
      </div>
    </div>
  );
};

export default TechStack;
