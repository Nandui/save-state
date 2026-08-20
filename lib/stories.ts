import type { BriefingMeta, Story } from "./types";

/** Curated 20 Aug 2026 evening snapshot. Times are ISO-8601 (UTC) from the source RSS or byline. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-20",
  editionLabel: "Thursday, 20 August 2026",
  briefedAt: "2026-08-20T21:30:00.000Z",
  briefedAtLabel: "10:30pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Thursday evening's biggest story is still GTA 6: Polygon and PC Gamer both conclude the “LEEK” bullet-wall clip is the clearest proof yet that Cyberleek is playing on an actual build, not just replaying old renders, while Eurogamer's leaked five-county Leonida map keeps circulating despite Rockstar's takedown blitz. Elsewhere, Kotaku reports Riot is ending active development on 2XKO at year's end, FromSoftware and Nintendo are both talking up how much handholding The Duskbloods gets before Friday's network test, and Nintendo Life has the confirmed Switch 2 price rise alongside a firm denial of the game's rumoured release date and a 007 First Light sales milestone. Rock Paper Shotgun closes the day with two reviews — STALKER 2's Cost of Hope expansion and the full launch of Mortal Shell 2 — and PC Gamer flags Palworld and No Man's Sky's crossover tease heating up.`;

export const stories: Story[] = [
  {
    id: "gta6-polygon-playable-build",
    category: "Industry",
    headline: "GTA 6 leaker seemingly proves they have access to a playable build",
    summary:
      "Polygon walks through the crop-duster clip that ends with Jason firing bullets into a wall to spell out “LEEK,” arguing it's the strongest evidence yet that Cyberleek is capturing footage live rather than recycling older dumps. Take-Two's DMCA campaign keeps scrubbing mirrors, but new ones reappear within hours.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/gta-6-leaks-playable-build/",
    publishedAt: "2026-08-20T16:20:00.000Z",
    timeApproximate: true,
    imageUrl:
      "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/08/gta6-leek-wall.jpg?w=1600&h=900&fit=crop",
  },
  {
    id: "pcgamer-gta6-leak-build-confirm",
    category: "Industry",
    headline: "The latest GTA 6 leak confirms the leaker likely has or had access to a playable build",
    summary:
      "PC Gamer calls the “LEEK” wall-writing clip maybe the most impressive leak yet, since it shows direct, real-time input rather than a passive recording. The outlet notes Rockstar still hasn't addressed Cyberleek's demands directly, even as the group promises more footage every 48 hours.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/grand-theft-auto/the-latest-gta-6-leak-confirms-the-leaker-likely-has-or-had-access-to-a-playable-build/",
    publishedAt: "2026-08-20T13:10:00.000Z",
    timeApproximate: true,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/gta6-leek-wall-writing.jpg",
  },
  {
    id: "eurogamer-gta6-leak-map",
    category: "Industry",
    headline: "The leaked GTA 6 map shows Leonida split into five counties, and Vice Dale is the dense one",
    summary:
      "Alongside clips of Jason roughing up a civilian roadside and playing basketball at a Safe House, an alleged full map surfaced showing the Florida-inspired state of Leonida broken into five explorable counties. Vice Dale County — home to Vice City — is by far the most detailed of the five, though it's unclear whether the footage is from a recent or an old build.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/gta-6-leaked-gameplay-map-cyberleek",
    publishedAt: "2026-08-19T10:49:00.000Z",
    imageUrl:
      "https://assetsio.gnwcdn.com/grand-theft-auto-6-leak.jpg?width=570&quality=85&format=jpg&dpr=3&auto=webp",
  },
  {
    id: "kotaku-2xko-ends-development",
    category: "Esports",
    headline: "Riot will end active development on 2XKO at the end of the year",
    summary:
      "Riot's fighting game, once teased as a live-service pillar alongside League and Valorant, is being wound down after a rocky early-access run that never found a sustained competitive audience. Kotaku reports remaining staff are being reassigned rather than laid off outright, but no further content updates are planned past December.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/riot-will-end-active-development-on-2xko-at-the-end-of-the-year-2000726270",
    publishedAt: "2026-08-20T15:18:00.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/2xko-riot.jpg",
  },
  {
    id: "kotaku-fromsoftware-duskbloods-nintendo",
    category: "Industry",
    headline: "FromSoftware says Nintendo has been a big help making sure The Duskbloods doesn't just drop players in and hope they figure it out",
    summary:
      "Ahead of Friday's closed network test, FromSoftware staff tell Kotaku that Nintendo pushed hard on onboarding for the PvPvE multiplayer game, a genre the studio has never shipped before. The eight-player Bloodsworn matches mix player combat with environmental threats, and the developers admit that without guidance new players could easily bounce off it.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/fromsoftware-says-nintendo-has-been-a-big-help-in-making-sure-switch-2-exclusive-the-duskbloods-doesnt-just-drop-players-in-and-hope-they-figure-it-out-2000726202",
    publishedAt: "2026-08-20T11:56:00.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/duskbloods-onboarding.jpg",
  },
  {
    id: "switch2-price-uk-ireland",
    category: "Hardware",
    headline: "Nintendo confirms the Switch 2 price rise for the UK and Ireland, effective 1 September",
    summary:
      "The UK price climbs from £395.99 to £419.99, and Ireland moves from €469.99 to €499.99, matching the wider Euro-zone increase Nintendo first flagged back in May. Nintendo Life notes it's still a gentler bump than what the PS5, Xbox Series X|S, or even a Steam Deck now cost.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-details-switch-2-price-increase-for-the-uk",
    publishedAt: "2026-08-20T11:15:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/85205435c1be0/switch-2.900x.jpg",
  },
  {
    id: "nintendo-denies-duskbloods-date",
    category: "Industry",
    headline: "Nintendo denies rumoured release date for The Duskbloods",
    summary:
      "After a fan-run datamine of eShop metadata pointed to a specific release window, Nintendo issued a flat denial that any date has been set beyond “2026.” Nintendo Life notes the closed network test running five sessions from 21 August is the next real signal fans will get on the game's shape.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-denies-rumoured-release-date-for-the-duskbloods",
    publishedAt: "2026-08-20T15:20:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/duskbloods-reveal/duskbloods.900x.jpg",
  },
  {
    id: "007-first-light-milestone",
    category: "Industry",
    headline: "007 First Light hits major sales milestone, still confirmed for Switch 2",
    summary:
      "IO Interactive's Bond origin story has sold more than 4 million copies since its 27 May launch, and Nintendo Life confirms the delayed Switch 2 port remains on track despite no firm new date. The PC and current-gen console versions continue to lead the publisher's back-catalogue charts.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/007-first-light-hits-major-sales-milestone-still-confirmed-for-switch-2",
    publishedAt: "2026-08-20T16:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/007-first-light/007-first-light.900x.jpg",
  },
  {
    id: "palworld-nms-crossover-tease",
    category: "Industry",
    headline: "Palworld and No Man's Sky are intensifying their months-long flirtation",
    summary:
      "Pocketpair and Hello Games have traded another round of winking social posts hinting at a crossover, continuing a tease that's been running since early in the year. PC Gamer rounds up the clues so far and admits neither studio has confirmed anything concrete beyond the flirting itself.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/survival-crafting/palworld-and-no-mans-sky-are-intensifying-their-months-long-flirtation-and-if-those-two-dont-just-kiss-already-im-going-to-lose-my-mind/",
    publishedAt: "2026-08-20T10:30:00.000Z",
    timeApproximate: true,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/palworld-no-mans-sky-tease.jpg",
  },
  {
    id: "stalker2-cost-of-hope-review",
    category: "Reviews",
    headline: "STALKER 2: Cost of Hope review — an expanded Zone that begs to be explored, even as the faction war fizzles",
    summary:
      "GSC's first story expansion returns players to the Chornobyl power plant and revives the Duty-versus-Freedom rivalry the base game skipped over, arriving alongside the engine-level 2.0 update. Rock Paper Shotgun says returning faces get proper context rather than fan-service cameos, though the reviewer feels the central faction war itself doesn't quite land.",
    source: "Rock Paper Shotgun",
    sourceUrl: "https://www.rockpapershotgun.com/stalker-2-cost-of-hope-review",
    publishedAt: "2026-08-19T13:00:00.000Z",
    imageUrl:
      "https://assetsio.gnwcdn.com/STALKER-2-Cost-of-Hope-(9).png?width=690&quality=85&format=jpg&dpr=3&auto=webp",
  },
  {
    id: "mortal-shell2-review",
    category: "Reviews",
    headline: "Mortal Shell 2 goes wide today, and RPS calls it a monumental heavy-metal Soulslike",
    summary:
      "Cold Symmetry's sequel launches fully today on PS5, Xbox Series X|S, and PC after a beta period that topped a million players. Rock Paper Shotgun's review calls it a “monumental” follow-up carrying the DNA of a PC-only game from decades past, comparing the leap from the original to something like The Witcher 3's jump over The Witcher.",
    source: "Rock Paper Shotgun",
    sourceUrl:
      "https://www.rockpapershotgun.com/mortal-shell-2-review-a-monumental-heavy-metal-sequel-with-the-spirit-of-a-90s-pc-game",
    publishedAt: "2026-08-17T14:33:00.000Z",
    timeApproximate: true,
    imageUrl:
      "https://assetsio.gnwcdn.com/mortal-shell-2-standing-next-to-skewered-guys.jpg?width=690&height=388&fit=crop&quality=85&format=jpg&auto=webp",
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
