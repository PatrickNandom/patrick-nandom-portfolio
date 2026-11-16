import { row1, row2 } from "@/data/data";
import { StackRow } from "./StackRow";

const TechStack = () => (
  <div className="space-y-3">
    <StackRow items={row1} />
    <StackRow items={row2} />
  </div>
);

export default TechStack;
