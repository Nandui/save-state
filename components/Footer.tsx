import { sources } from "@/lib/stories";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line pb-[max(2rem,calc(1.25rem+env(safe-area-inset-bottom,0px)))]">
      <div className="mx-auto min-w-0 max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-[13px] font-medium text-ink-dim">Sources</p>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {sources.map((source) => (
            <a
              key={source.name}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center text-[14px] text-ink-muted transition-colors hover:text-accent"
            >
              {source.name}
            </a>
          ))}
        </div>
        <div className="mt-6 flex min-w-0 flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="opacity-80" />
          <p className="max-w-lg text-[13px] leading-6 text-ink-dim">
            A static editorial snapshot of 19 August 2026, with a live RSS path at{" "}
            <a href="/api/feeds" className="text-ink-muted underline decoration-ink/20 underline-offset-2 hover:text-accent">
              /api/feeds
            </a>
            . Summaries are written for this briefing, not copied from feed descriptions.
          </p>
        </div>
      </div>
    </footer>
  );
}
