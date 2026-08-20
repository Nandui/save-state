import Image from "next/image";
import type { Category, Story } from "@/lib/types";
import { briefingMeta } from "@/lib/stories";
import { relativeFrom } from "@/lib/time";
import { CategoryChip } from "./CategoryChip";

const categorySlab: Record<Category, string> = {
  Industry: "bg-[#e11d74]",
  Releases: "bg-[#2563eb]",
  Reviews: "bg-[#059669]",
  Esports: "bg-[#7c3aed]",
  Hardware: "bg-[#ea580c]",
  Indie: "bg-[#0d9488]",
};

export function StoryCard({ story, featured = false }: { story: Story; featured?: boolean }) {
  const rel = relativeFrom(story.publishedAt, briefingMeta.briefedAt);
  const timeLabel = story.timeApproximate ? `about ${rel}` : rel;
  const hasImage = Boolean(story.imageUrl);

  return (
    <article
      className={`card-hover group relative flex h-full min-w-0 overflow-hidden rounded-[10px] border border-line bg-card shadow-card ${
        featured ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative min-w-0 shrink-0 overflow-hidden ${categorySlab[story.category]} ${
          featured
            ? "aspect-video w-full sm:aspect-auto sm:w-[min(42%,22rem)] sm:self-stretch"
            : "aspect-video w-full"
        }`}
      >
        {hasImage ? (
          <Image
            src={story.imageUrl}
            alt={story.headline}
            fill
            sizes={featured ? "(min-width: 640px) 22rem, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
            priority={featured}
          />
        ) : null}
      </div>
      <div className={`flex h-full min-w-0 flex-1 flex-col p-5 ${featured ? "sm:p-7" : "sm:p-6"}`}>
        <div className="flex min-w-0 items-center justify-between gap-3">
          <CategoryChip category={story.category} />
          <span className="shrink-0 text-[12px] text-ink-dim">{timeLabel}</span>
        </div>
        <h3 className={`mt-3 font-semibold text-ink ${featured ? "text-lead-title" : "text-card-title"}`}>
          <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            {story.headline}
          </a>
        </h3>
        <p className="text-body mt-3 max-w-prose text-pretty text-ink-muted">{story.summary}</p>
        <div className="mt-4 flex min-w-0 items-center justify-between gap-3 text-[13px] text-ink-dim">
          <span className="min-w-0 truncate font-medium">{story.source}</span>
          <a
            href={story.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent-dim"
          >
            Read original
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
