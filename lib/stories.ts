import type { BriefingMeta, Story } from "./types";

/** Curated 21 Aug 2026 morning snapshot. Times are ISO-8601 (UTC) from the source RSS or byline. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-21",
  editionLabel: "Friday, 21 August 2026",
  briefedAt: "2026-08-21T14:00:00.000Z",
  briefedAtLabel: "3:00pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Friday's headline act is still GTA 6: Kotaku's Zack Zwiezen says a leaked clip of Jason piloting a plane over Vice City has him more excited than any official trailer, a sign of how far Cyberleek's dumps have spread since midweek. Riot is shutting down active development on 2XKO this December, barely eight months after launch, while FromSoftware credits Nintendo's onboarding expertise for keeping The Duskbloods newcomer-friendly ahead of this weekend's closed network test. UK Switch 2 owners now know the damage — £419.99 from 1 September — and Kotaku's review of the Metal Gear Solid 4 remaster calls it a technically flawless port undercut by an overstuffed, self-referential back half. Nintendo Life rounds out the morning with a free Switch 2 upgrade for Another Crab's Treasure, two new Final Fantasy VII Revelation convention panels, and a community-requested Tomb Raider I-III Remastered patch that adds 60fps to classic graphics mode.`;

export const stories: Story[] = [
  {
    id: "kotaku-gta6-plane-leak",
    category: "Industry",
    headline: "Jason flying a plane in the new GTA 6 leak has me more excited than any previous trailer",
    summary:
      "Recent leaked gameplay footage shared by Cyberleek shows a character piloting a plane over Vice City, reinvigorating fan enthusiasm for the game. Kotaku's Zack Zwiezen writes that the clip's environmental detail is comparable to Microsoft Flight Simulator, and the footage has drawn widespread praise across social media.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/jason-flying-a-plane-in-the-new-gta-6-leak-has-me-more-excited-than-any-previous-trailer-2000726316",
    publishedAt: "2026-08-20T22:05:00.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/06/gta666666.jpg",
  },
  {
    id: "kotaku-2xko-ends-development",
    category: "Esports",
    headline: "Riot is already killing its 2XKO fighting game less than a year after launching",
    summary:
      "Riot Games will end active development on tag-team fighting game 2XKO in December 2026, just months after its January launch, citing insufficient player retention. Servers will stay up indefinitely with offline play unaffected, all characters will be unlocked, and cosmetic purchases will be refunded.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/riot-will-end-active-development-on-2xko-at-the-end-of-the-year-2000726270",
    publishedAt: "2026-08-20T15:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/01/2XKO.jpg",
  },
  {
    id: "kotaku-fromsoftware-duskbloods-nintendo",
    category: "Industry",
    headline: "FromSoftware says Nintendo has been a big help in making sure Switch 2 exclusive The Duskbloods doesn't just drop players in and hope they figure it out",
    summary:
      "Hidetaka Miyazaki tells Kotaku that Nintendo's partnership has significantly aided development of The Duskbloods, providing feedback that improved onboarding and tutorials for a genre FromSoftware has historically left players to puzzle out on their own. Miyazaki calls Nintendo \"the right partner\" for conveying game systems clearly.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/fromsoftware-says-nintendo-has-been-a-big-help-in-making-sure-switch-2-exclusive-the-duskbloods-doesnt-just-drop-players-in-and-hope-they-figure-it-out-2000726202",
    publishedAt: "2026-08-20T12:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/duskbloods.jpg",
  },
  {
    id: "switch2-price-uk",
    category: "Hardware",
    headline: "Nintendo details Switch 2 price increase for the UK",
    summary:
      "Nintendo has confirmed the Switch 2 console price in the UK rises from £395.99 to £419.99 starting 1 September 2026. Nintendo Life notes the £24 bump is more modest than the increases already applied in the US ($50) and Japan (¥10,000).",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-details-switch-2-price-increase-for-the-uk",
    publishedAt: "2026-08-20T11:15:00.000Z",
    imageUrl: "https://images.nintendolife.com/85205435c1be0/switch-2.900x.jpg",
  },
  {
    id: "kotaku-mgs4-review",
    category: "Reviews",
    headline: "Metal Gear Solid 4: Guns Of The Patriots: The Kotaku Review",
    summary:
      "Kotaku's Cole Kronman finds the PS5 remaster of Metal Gear Solid 4 technically flawless at 4K/60fps, preserving the original experience faithfully. But the review argues the game itself remains structurally messy, with later chapters drowning in cutscenes that prioritize self-referential franchise commentary over the series' earlier political urgency.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/metal-gear-solid-4-guns-of-the-patriots-the-kotaku-review-2000726365",
    publishedAt: "2026-08-21T10:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/Screenshots_01.jpg",
  },
  {
    id: "another-crabs-treasure-switch2",
    category: "Releases",
    headline: "Another Crab's Treasure scores a Switch 2 edition and free upgrade",
    summary:
      "The soulslike Another Crab's Treasure is getting a Nintendo Switch 2 edition, with existing Switch owners entitled to a free upgrade. Nintendo Life reports the new version adds higher framerates, an enhanced 1080p resolution, and improved stability with reduced load times over the original release.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/another-crabs-treasure-scores-a-switch-2-edition-and-free-upgrade",
    publishedAt: "2026-08-21T08:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/ba9c2142d63f9/150x110.jpg",
  },
  {
    id: "ff7-revelation-panels",
    category: "Industry",
    headline: "Final Fantasy VII Revelation panels announced for September & October",
    summary:
      "Square Enix has confirmed two panels for Final Fantasy VII Revelation ahead of its Spring 2027 Switch 2 launch. Game director Naoki Hamaguchi and battle director Teruki Endo appear at PAX West on 5 September, followed by a New York Comic Con panel on 8 October with Hamaguchi and the English voice cast.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/final-fantasy-vii-revelation-panels-announced-for-september-and-october",
    publishedAt: "2026-08-21T11:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/e8ea1b67898fe/final-fantasy-vii-revelation.900x.jpg",
  },
  {
    id: "tomb-raider-remastered-update",
    category: "Releases",
    headline: "Tomb Raider I-III Remastered update adds three new features, includes 60fps in classic graphics mode",
    summary:
      "Aspyr has released a community-requested patch for Tomb Raider I-III Remastered adding a brightness slider, pickup highlighting, and 60fps performance in classic graphics mode. Nintendo Life notes the update also carries bug fixes across all platforms, with Switch 2-specific work on character clipping and physics glitches.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/tomb-raider-i-iii-remastered-update-adds-three-new-features-includes-60fps-in-classic-graphics-mode",
    publishedAt: "2026-08-21T07:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/b1122c75bc68e/tomb-raider-i-iii-remastered.900x.jpg",
  },
];

export const sources = [
  { name: "IGN", href: "https://www.ign.com/" },
  { name: "Polygon", href: "https://www.polygon.com/" },
  { name: "Kotaku", href: "https://kotaku.com/" },
  { name: "PC Gamer", href: "https://www.pcgamer.com/" },
  { name: "Eurogamer", href: "https://www.eurogamer.net/" },
  { name: "GameSpot", href: "https://www.gamespot.com/" },
  { name: "Rock Paper Shotgun", href: "https://www.rockpapershotgun.com/" },
  { name: "Nintendo Life", href: "https://www.nintendolife.com/" },
];
