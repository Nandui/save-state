"use client";

import { useEffect, useState } from "react";
import type { LiveHeadline } from "@/lib/types";

type Payload = {
  headlines: LiveHeadline[];
  errors: { source: string; message: string }[];
  fetchedAt: string;
};

export function LiveWire() {
  const [data, setData] = useState<Payload | null>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetch("/api/feeds")
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((json: Payload) => {
        if (!cancelled) {
          setData(json);
          setStatus("idle");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto mt-10 min-w-0 max-w-6xl px-5 sm:px-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[44px] w-full min-w-0 items-center justify-between gap-3 rounded-[10px] border border-line bg-card px-4 py-3 text-left transition-colors hover:border-accent sm:px-5"
      >
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-accent">Live wire</p>
          <p className="mt-0.5 text-[1.05rem] font-semibold tracking-tight text-ink sm:text-lg">
            Fresh headlines from public RSS
          </p>
        </div>
        <span className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center text-sm font-medium text-ink-dim">
          {open ? "Hide" : "Show"}
        </span>
      </button>
      {open ? (
        <div className="mt-3 rounded-[10px] border border-line bg-card p-4 sm:p-6">
          {status === "loading" ? <p className="text-sm text-ink-muted">Checking feeds…</p> : null}
          {status === "error" ? (
            <p className="text-sm text-ink-muted">
              Live fetch failed. The briefing above is the curated snapshot for today.
            </p>
          ) : null}
          {data ? (
            <ul className="divide-y divide-line">
              {data.headlines.slice(0, 12).map((item) => (
                <li key={item.link + item.title} className="min-w-0 py-3 first:pt-0 last:pb-0">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center text-[15px] leading-6 text-ink hover:text-accent"
                  >
                    {item.title}
                  </a>
                  <p className="text-[12px] text-ink-dim">{item.source}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {data && data.errors.length > 0 ? (
            <p className="mt-4 text-[12px] text-ink-dim">
              Some feeds were quiet: {data.errors.map((e) => e.source).join(", ")}.
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
