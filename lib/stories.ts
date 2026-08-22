import type { BriefingMeta, Story } from "./types";

/** Curated 22 Aug 2026 morning snapshot. Times are ISO-8601 (UTC) from the source RSS. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-22",
  editionLabel: "Saturday, 22 August 2026",
  briefedAt: "2026-08-22T07:22:00.000Z",
  briefedAtLabel: "8:22am IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Saturday opens on Nintendo hardware: first looks at Call of Duty: Modern Warfare 4 on Switch 2 are landing, with Activision crediting Digital Legends for the port, while a coordinated GitHub sweep took down more than 400 Switch emulator repos. Double Fine is properly independent again, with the Psychonauts studio saying Xbox handed back its games and a Kickstarter Amnesia Fortnight letting backers vote on what comes next. Game Freak is talking up real-time battles for Pokemon Champions even as Worlds week sprinkles freebies across the rest of the franchise. Elsewhere, Microsoft's translucent green anniversary Xbox is rumoured at $900, Cyberpunk: Edgerunners season 2 finally has a date, and System 3 is fending off gen-AI accusations on its James Pond reboot.`;

export const stories: Story[] = [
  {
    id: "nlife-mw4-switch2-impressions",
    category: "Hardware",
    headline: "First impressions of Call of Duty: Modern Warfare 4 on Switch 2 are in",
    summary:
      "Early access for Modern Warfare 4 is live on other platforms, and selected creators have already been on the Switch 2 build this weekend, a week before Nintendo's open beta. Nintendo Life's round-up collects the first notes on resolution, performance, and how the pre-release Nintendo version actually feels to play.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/round-up-the-first-impressions-of-call-of-duty-modern-warfare-4-switch-2-are-in",
    publishedAt: "2026-08-22T06:00:00.000Z",
    imageUrl: "https://images.nintendolife.com/435a8663a086d/large.jpg",
  },
  {
    id: "nlife-mw4-digital-legends",
    category: "Industry",
    headline: "Activision reveals Digital Legends as the Switch 2 partner on Modern Warfare 4",
    summary:
      "Infinity Ward called on Activision's Barcelona studio Digital Legends for the Switch 2 version of Modern Warfare 4, the first Call of Duty on a Nintendo platform in 13 years. The mobile specialist, bought in 2021, has already shipped work on Black Ops 6, Black Ops 7, and Warzone.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/call-of-duty-modern-warfare-4-switch-2-partner-developer-revealed-by-activision",
    publishedAt: "2026-08-22T04:00:00.000Z",
    imageUrl: "https://images.nintendolife.com/68eed6e64897d/large.jpg",
  },
  {
    id: "polygon-nintendo-emulator-takedowns",
    category: "Industry",
    headline: "Nintendo wipes out more than 400 Switch emulator repos on GitHub",
    summary:
      "Polygon, citing TorrentFreak, says Nintendo filed several DMCA notices that removed over 400 Switch emulator-related codebases in a single-day sweep. The targets include forks of Yuzu plus copies of Suyu and Skyline, another round in Nintendo's campaign against Switch emulation.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/nintendo-emulation-take-downs-piracy/",
    publishedAt: "2026-08-21T18:49:39.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/switch-vs-switch-2-launch-year.jpg",
  },
  {
    id: "polygon-double-fine-kickstarter",
    category: "Indie",
    headline: "Double Fine is back with a Kickstarter game jam after leaving Xbox",
    summary:
      "After its messy split from Microsoft, Psychonauts developer Double Fine launched a Kickstarter for Amnesia Fortnight 2026 so backers can vote on the studio's next game. CEO Tim Schafer broke the news on the Kinda Funny podcast, the first public next-step since the Xbox studio cuts.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/double-fine-kickstarter-xbox-layoffs/",
    publishedAt: "2026-08-21T19:48:49.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/05/psychonauts-2.jpg",
  },
  {
    id: "kotaku-double-fine-owns-games",
    category: "Industry",
    headline: "Psychonauts developer now owns all its Xbox-era games and publishing rights",
    summary:
      "Double Fine says the transfer is complete: every game made under Xbox, and the publishing rights, are back with the studio. Rebekah Valentine quotes the team telling fans that buying any of their games now supports Double Fine directly.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/psychonauts-dev-now-owns-all-its-games-publishing-rights-2000726713",
    publishedAt: "2026-08-21T18:57:26.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2021/06/cdblz0xjfk311hb0yhoa.jpg",
  },
  {
    id: "kotaku-pokemon-champions-realtime",
    category: "Releases",
    headline: "Pokemon's battle system may not stay turn-based for much longer",
    summary:
      "Kotaku reports Game Freak is exploring real-time battles alongside the old style in Pokemon Champions. The competitive title is meant to preserve classic turn-based play, but the studio's comments have fans reading a broader shift for the series.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/pokemon-champions-turn-based-real-time-battles-winds-waves-2000726753",
    publishedAt: "2026-08-21T20:30:47.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/04/IMG_3915-1-1280x720.jpg",
  },
  {
    id: "polygon-pokemon-worlds-dlc",
    category: "Releases",
    headline: "Free August Pokemon DLC confirmed around Worlds week",
    summary:
      "The Pokemon Company is handing out free content across Champions, Unite, Go, and the TCG games for Pokemon Worlds. Polygon's Patricia Hernandez says if you play almost any current Pokemon game, there is a drop, code, or card in the mix this week.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/pokemon-worlds-twitch-drops-how-to-get-tcg-pikachu-card-astronaut/",
    publishedAt: "2026-08-22T00:00:13.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/08/pokemonxp.JPG",
  },
  {
    id: "polygon-steam-weekend",
    category: "Releases",
    headline: "Five new Steam games to try this weekend, led by Mortal Shell 2",
    summary:
      "Polygon's weekend list is built around Mortal Shell 2, which it calls one of the year's best soulslikes, plus a handful of smaller PC launches. If you were saving the weekend for backlog, the new-releases pile got in the way again.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/new-steam-games-august-21-2026/",
    publishedAt: "2026-08-22T01:00:15.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/08/the-sinking-city-2-boat-travel.jpg",
  },
  {
    id: "kotaku-xbox-green-900",
    category: "Hardware",
    headline: "The translucent green anniversary Xbox will reportedly cost $900",
    summary:
      "Kotaku's Ethan Gach reports the see-through green anniversary Xbox is lining up as a $900 machine, disc drive included. That puts a nostalgia special in PS5 Pro territory before it has even been formally priced.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/the-gorgeous-translucent-green-anniversary-xbox-will-reportedly-cost-900-2000726617",
    publishedAt: "2026-08-21T13:39:23.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/xbox.jpg",
  },
  {
    id: "kotaku-edgerunners-s2",
    category: "Releases",
    headline: "Cyberpunk Edgerunners season 2 gets a release date, and it's soon",
    summary:
      "Netflix's Cyberpunk Edgerunners sequel has a date and a new trailer. Kotaku's Kenneth Shepard says the long-awaited second season is landing sooner than the usual anime wait, with CD Projekt's Night City back on screen this year.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/cyberpunk-edgerunners-season-2-release-date-netflix-trailer-2000726622",
    publishedAt: "2026-08-21T13:03:57.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/06/Screen-Shot-2026-06-30-at-9.22.49-AM-1280x720.jpg",
  },
  {
    id: "kotaku-james-pond-ai",
    category: "Indie",
    headline: "Players accuse System 3 of using gen AI on its James Pond reboot",
    summary:
      "Promotional art for System 3's James Pond reboot, including a very wrong-looking cow, has fans calling out generative AI. The studio denied it in a blog post; Kotaku's Ash Parrish is not convinced by the defence.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/james-pond-gen-ai-slop-accusations-system-3-2000726706",
    publishedAt: "2026-08-21T20:00:03.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/Jamesponddrmaybe-1280x718.jpg",
  },
  {
    id: "kotaku-gta6-still-dark",
    category: "Industry",
    headline: "Rockstar is still in the dark about who is leaking GTA 6, reports say",
    summary:
      "Despite strict internal security, multiple GTA 6 gameplay clips keep circulating and Rockstar still does not know the source, Kotaku reports. The Netflix extended look is still scheduled, while Take-Two's subpoenas to Microsoft and Discord grind on.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/rockstar-games-reportedly-still-in-the-dark-about-whos-leaking-gta-6-and-how-2000726726",
    publishedAt: "2026-08-21T19:20:07.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2025/05/0fda1e1fd9a36e1717ae92a79d156334-1280x720.jpg",
  },
  {
    id: "kotaku-dog-souls",
    category: "Indie",
    headline: "In this soulslike, the dog will pet you back with a sword",
    summary:
      "Stray Dog: Nobody Cares is a PC soulslike about playing as a stray that hits back. Kotaku's Ash Parrish flags the Steam announcement as the weekend's dumbest-looking good time: you are tired of being a good boy.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/dog-souls-stray-dog-nobody-cares-annoucement-pc-game-steam-2000726752",
    publishedAt: "2026-08-21T22:00:27.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/stray-dog--1280x720.jpg",
  },
  {
    id: "nlife-crabs-treasure-switch2",
    category: "Releases",
    headline: "Another Crab's Treasure gets a Switch 2 Edition and a free upgrade",
    summary:
      "Owners of the Switch version of Another Crab's Treasure can grab a free Switch 2 Edition with higher frame rate, sharper resolution, and stability fixes. Nintendo Life says the soulslike about a hermit crab is already live with the upgrade.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/another-crabs-treasure-scores-a-switch-2-edition-and-free-upgrade",
    publishedAt: "2026-08-21T00:55:00.000Z",
    imageUrl: "https://images.nintendolife.com/ba9c2142d63f9/large.jpg",
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
