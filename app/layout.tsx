import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f4ef",
};

export const metadata: Metadata = {
  title: "Save State — The day's gaming news, already read for you",
  description:
    "A one-minute editorial briefing of the latest gaming news. Real headlines, short summaries, no hype.",
  applicationName: "Save State",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Save State",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
