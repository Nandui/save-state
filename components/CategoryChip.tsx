import type { Category } from "@/lib/types";

const tones: Record<Category, string> = {
  Industry: "bg-[#e11d74] text-white",
  Releases: "bg-[#2563eb] text-white",
  Reviews: "bg-[#059669] text-white",
  Esports: "bg-[#7c3aed] text-white",
  Hardware: "bg-[#ea580c] text-white",
  Indie: "bg-[#0d9488] text-white",
};

export function CategoryChip({ category }: { category: Category }) {
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] ${tones[category]}`}>
      {category}
    </span>
  );
}
