const DUBLIN = "Europe/Dublin";

export function formatDublinDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: DUBLIN,
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDublinTime(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: DUBLIN,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(new Date(iso))
    .replace(" am", "am")
    .replace(" pm", "pm");
}

export function relativeFrom(iso: string, nowIso?: string): string {
  const then = new Date(iso).getTime();
  const now = nowIso ? new Date(nowIso).getTime() : Date.now();
  const delta = Math.max(0, now - then);
  const minutes = Math.round(delta / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  return formatDublinDate(iso);
}
