import { row1 } from "@/data/data";

export const StackRow = ({
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
          className="flex items-center gap-3 px-5 py-3 border border-gray-200 dark:border-gray-700/60 rounded-2xl hover:border-blue-500 dark:hover:border-gray-500 hover:shadow-md dark:hover:shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white dark:bg-gray-900/60 dark:backdrop-blur-sm"
        >
          <span className="text-2xl text-black dark:text-gray-300">
            {item.icon && <item.icon />}
          </span>
          <span className="text-gray-700 dark:text-gray-400 text-sm font-semibold">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);
