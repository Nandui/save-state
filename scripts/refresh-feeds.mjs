#!/usr/bin/env node
const FEEDS = [
  ["IGN", "https://www.ign.com/rss"],
  ["Polygon", "https://www.polygon.com/rss/index.xml"],
  ["Kotaku", "https://kotaku.com/rss"],
  ["PC Gamer", "https://www.pcgamer.com/rss/"],
  ["Eurogamer", "https://www.eurogamer.net/feed"],
  ["GameSpot", "https://www.gamespot.com/feeds/news/"],
  ["Rock Paper Shotgun", "https://www.rockpapershotgun.com/feed"],
];

function decode(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function pull(pair) {
  const source = pair[0];
  const url = pair[1];
  try {
    const res = await fetch(url, { headers: { "user-agent": "SaveStateDigest/1.0" } });
    if (!res.ok) return { source: source, error: "HTTP " + res.status, items: [] };
    const xml = await res.text();
    const items = xml.split(/<item[\s>]/i).slice(1, 6).map((chunk) => {
      const title = decode((chunk.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]);
      const link = decode((chunk.match(/<link>([\s\S]*?)<\/link>/i) || [])[1]);
      return { title: title, link: link, source: source };
    });
    return { source: source, error: null, items: items };
  } catch (err) {
    return { source: source, error: String(err), items: [] };
  }
}

const results = await Promise.all(FEEDS.map(pull));
for (const r of results) {
  console.log("\n## " + r.source + (r.error ? " (" + r.error + ")" : ""));
  for (const item of r.items) {
    console.log("- " + item.title);
    console.log("  " + item.link);
  }
}
