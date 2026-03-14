import { row1, row2 } from "@/data/data";
import { StackRow } from "./StackRow";

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
