import { row1 } from "@/data/data";

export const StackRow = ({
  items,
}: {
  items: typeof row1;
}) => (
  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    {items.map((item) => {
      const Icon = item.icon;

      return (
        <li
          key={item.name}
          className="group flex min-h-16 items-center gap-3 rounded-2xl border border-border/80 bg-card/75 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary transition group-hover:bg-primary/12">
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="text-sm font-medium text-foreground">
            {item.name}
          </span>
        </li>
      );
    })}
  </ul>
);
