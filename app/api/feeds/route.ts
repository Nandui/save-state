import { NextResponse } from "next/server";
import { fetchLiveHeadlines } from "@/lib/rss";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await fetchLiveHeadlines();
  return NextResponse.json(payload, {
    headers: { "cache-control": "no-store" },
  });
}
