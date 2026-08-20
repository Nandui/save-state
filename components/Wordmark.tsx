export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-2 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0 text-accent">
        <rect x="1.2" y="1.2" width="19.6" height="19.6" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="6.2" y="6.4" width="3.1" height="9.2" rx="0.4" fill="currentColor" />
        <rect x="12.7" y="6.4" width="3.1" height="9.2" rx="0.4" fill="currentColor" />
      </svg>
      <span className="whitespace-nowrap text-[1.15rem] font-semibold leading-none tracking-tight text-ink sm:text-[1.3rem]">
        Save State
      </span>
    </span>
  );
}
