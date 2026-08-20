import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LiveWire } from "@/components/LiveWire";
import { StoryCard } from "@/components/StoryCard";
import { briefingCopy, briefingMeta, stories } from "@/lib/stories";

export default function HomePage() {
  const [lead, ...rest] = stories;

  return (
    <div className="min-h-dvh min-w-0 overflow-x-hidden bg-paper">
      <Header />
      <section className="border-b border-line bg-card">
        <div className="h-1 w-full bg-accent" />
        <div className="mx-auto grid min-w-0 max-w-6xl gap-5 px-5 py-8 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:gap-12 lg:py-14">
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-accent">Today&apos;s briefing</p>
            <h1 className="text-hero mt-3 font-semibold text-ink">
              A week of leaks, and an industry still deciding what it owns.
            </h1>
          </div>
          <div className="min-w-0 border-t-[3px] border-accent pt-4 sm:border-l-[4px] sm:border-t-0 sm:pl-7 sm:pt-0">
            <p className="text-body max-w-prose text-pretty text-ink-muted">{briefingCopy}</p>
            <p className="mt-5 text-[13px] text-ink-dim">
              {stories.length} stories · briefed {briefingMeta.briefedAtLabel}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto min-w-0 max-w-6xl px-5 pb-8 pt-8 sm:px-8 sm:pt-12">
        <section className="min-w-0">
          <div className="mb-5 flex min-w-0 items-end justify-between gap-3">
            <h2 className="text-[1.25rem] font-semibold tracking-tight text-ink sm:text-[1.4rem]">The desk</h2>
            <p className="hidden text-[13px] text-ink-dim sm:block">Selected for today</p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4">
            <StoryCard story={lead} featured />
            <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
              {rest.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <LiveWire />
      <Footer />
    </div>
  );
}
