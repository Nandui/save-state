import type { LiveHeadline } from "./types";

export const FEEDS: { source: string; url: string }[] = [
  { source: "IGN", url: "https://www.ign.com/rss" },
  { source: "Polygon", url: "https://www.polygon.com/rss/index.xml" },
  { source: "Kotaku", url: "https://kotaku.com/rss" },
  { source: "PC Gamer", url: "https://www.pcgamer.com/rss/" },
  { source: "Eurogamer", url: "https://www.eurogamer.net/feed" },
  { source: "GameSpot", url: "https://www.gamespot.com/feeds/news/" },
  { source: "Rock Paper Shotgun", url: "https://www.rockpapershotgun.com/feed" },
];

function decode(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(block: string, name: string): string | null {
  const re = new RegExp("<" + name + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + name + ">", "i");
  const match = block.match(re);
  return match ? decode(match[1]) : null;
}

function parseItems(xml: string, source: string): LiveHeadline[] {
  const chunks = xml.split(/<item[\s>]/i).slice(1);
  return chunks.slice(0, 8).map((chunk) => {
    const block = "<item " + chunk;
    const link = tag(block, "link") || "";
    const pub = tag(block, "pubDate") || tag(block, "published") || tag(block, "updated");
    let publishedAt: string | null = null;
    if (pub) {
      const d = new Date(pub);
      if (!Number.isNaN(d.getTime())) publishedAt = d.toISOString();
    }
    return { title: tag(block, "title") || "Untitled", link, source, publishedAt };
  });
}

export async function fetchLiveHeadlines(): Promise<{
  headlines: LiveHeadline[];
  errors: { source: string; message: string }[];
  fetchedAt: string;
}> {
  const errors: { source: string; message: string }[] = [];
  const batches = await Promise.all(
    FEEDS.map(async (feed) => {
      try {
        const res = await fetch(feed.url, {
          headers: {
            "user-agent": "SaveStateDigest/1.0",
            accept: "application/rss+xml, application/xml, text/xml, */*",
          },
          next: { revalidate: 900 },
        });
        if (!res.ok) {
          errors.push({ source: feed.source, message: "HTTP " + res.status });
          return [];
        }
        return parseItems(await res.text(), feed.source);
      } catch (err) {
        errors.push({
          source: feed.source,
          message: err instanceof Error ? err.message : "failed",
        });
        return [];
      }
    }),
  );

  const seen = new Set<string>();
  const headlines: LiveHeadline[] = [];
  for (const item of batches.flat()) {
    const key = item.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    headlines.push(item);
  }

  headlines.sort((a, b) => {
    const at = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const bt = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    return bt - at;
  });

  return { headlines: headlines.slice(0, 24), errors, fetchedAt: new Date().toISOString() };
}
