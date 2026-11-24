
import type { IconType } from "react-icons";

interface TechnologyCardProps {
  name: string;
  icon: IconType;
}

export default function TechnologyCard({
  name,
  icon: Icon,
}: TechnologyCardProps) {
  return (
    <div className="group flex min-h-24 items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-2xl text-neutral-700 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600">
        <Icon />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-900">
          {name}
        </h4>
        <p className="mt-1 text-xs text-neutral-400">
          Technology
        </p>
      </div>
    </div>
  );
}
