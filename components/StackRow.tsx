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
          className="flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-white"
        >
          <span className="text-2xl text-black">
            {item.icon && <item.icon />}
          </span>
          <span className="text-gray-700 text-sm font-semibold">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);
