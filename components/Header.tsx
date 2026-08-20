import { briefingMeta } from "@/lib/stories";
import { Wordmark } from "./Wordmark";

export function Header() {
  return (
    <header className="border-b border-line bg-paper pt-[env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:items-end sm:px-8 sm:py-4">
        <div className="min-w-0">
          <Wordmark />
          <p className="mt-1.5 hidden max-w-md text-[13px] leading-relaxed text-ink-muted sm:block">
            The day&apos;s gaming news, already read for you.
          </p>
        </div>
        <div className="min-w-0 max-w-[48%] text-right sm:max-w-none">
          <p className="text-[12px] font-medium leading-snug text-ink sm:text-[14px]">{briefingMeta.editionLabel}</p>
          <p className="mt-0.5 hidden text-[12px] text-ink-dim sm:block">
            Briefed at {briefingMeta.briefedAtLabel}
            <span className="text-ink-dim/70"> · {briefingMeta.timezone}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
