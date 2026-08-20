export type Category =
  | "Industry"
  | "Releases"
  | "Reviews"
  | "Esports"
  | "Hardware"
  | "Indie";

export type Story = {
  id: string;
  category: Category;
  headline: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  timeApproximate?: boolean;
  imageUrl: string;
  imageAlt?: string;
};

export type BriefingMeta = {
  editionDate: string;
  editionLabel: string;
  briefedAt: string;
  briefedAtLabel: string;
  timezone: string;
};

export type LiveHeadline = {
  title: string;
  link: string;
  source: string;
  publishedAt: string | null;
};
