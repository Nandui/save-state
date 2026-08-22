import type { BriefingMeta, Story } from "./types";

/** Curated 22 Aug 2026 evening snapshot. Times are ISO-8601 (UTC) from the source RSS. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-22",
  editionLabel: "Saturday, 22 August 2026 — Evening Edition",
  briefedAt: "2026-08-22T18:45:00.000Z",
  briefedAtLabel: "7:45pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Saturday evening belongs to The Duskbloods, and not in a good way: FromSoftware's first Switch 2 network test collapsed almost immediately, with Polygon calling it a flop outright while Eurogamer got Nintendo to issue a carefully hedged denial of a rumoured 24th September release date. GTA 6's leaker keeps escalating too, dragging Jason into a strip club in a seventh clip five days before Rockstar's Netflix Extended Look goes up on the 27th. Elsewhere, the UK Switch 2 price officially crosses £400 next month, Embark is pausing Arc Raiders' Expeditions until 2027 for a rework, CD Projekt has quietly cut a fifth of its unrevealed Witcher spinoff team, and Rock Paper Shotgun reckons Mortal Shell 2 is odd enough to be its own thing rather than another Dark Souls chaser.`;

export const stories: Story[] = [
  {
    id: "kotaku-gta6-strip-club",
    category: "Industry",
    headline: "GTA 6 leaker takes fans to a strip club in a seventh gameplay dump",
    summary:
      "Ethan Gach reports the leaker known as Cyberleek has posted a seventh Grand Theft Auto 6 clip, showing Jason Duval robbing gas stations before stepping into a strip club, days ahead of Rockstar's Netflix Extended Look. The footage is watermarked with a demand that a crypto coin hit a $3 million market cap before fuller strip club footage appears, and Take-Two's subpoenas to Discord and Microsoft still haven't identified the source.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/gta-6-leaker-takes-fans-to-a-strip-club-in-seventh-gameplay-dump-2000727032",
    publishedAt: "2026-08-22T14:00:00.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/gta-6-club.jpg",
  },
  {
    id: "polygon-duskbloods-flop",
    category: "Releases",
    headline: "Duskbloods' Switch 2 network test is already a flop",
    summary:
      "Polygon says FromSoftware's first Duskbloods network test collapsed almost immediately, with players locked out by 'Failed to log in' errors for nearly two hours before the session was cancelled outright. It's the rockiest possible start for Nintendo's Bloodborne-flavoured PvEvP exclusive just as hype was building ahead of a rumoured autumn release.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/nintendo-switch-2/duskbloods-network-test-flop-server-issues/",
    publishedAt: "2026-08-21T21:00:00.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/08/duskbloods-switch-2-network-test.jpg",
  },
  {
    id: "eurogamer-duskbloods-release-date",
    category: "Releases",
    headline: "Nintendo denies Duskbloods is releasing on 24th September",
    summary:
      "After a Guardian preview briefly listed a 24th September release date for The Duskbloods, Eurogamer went straight to Nintendo for comment. A spokesperson told the site the date is 'inaccurate because there is no information regarding release date' — a carefully hedged denial that has left fans more suspicious, not less.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/nintendo-denies-the-duskbloods-24-september-release-date",
    publishedAt: "2026-08-20T16:00:00.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/duskbloods-key-art.jpg",
  },
  {
    id: "nlife-switch2-uk-price",
    category: "Hardware",
    headline: "Nintendo confirms the new Switch 2 price for the UK",
    summary:
      "Switch 2 hardware rises from £395.99 to £419.99 in the UK from 1st September, Nintendo has confirmed, blaming 'changes in market conditions' tied to the ongoing memory-chip shortage. It's a smaller jump than the $50 US increase or the €30 rise across the rest of Europe, but it still pushes the console past the £400 mark for the first time.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-details-switch-2-price-increase-for-the-uk",
    publishedAt: "2026-08-19T09:00:00.000Z",
    imageUrl: "https://images.nintendolife.com/6a1f2c8d9e123/switch-2-console.900x.jpg",
  },
  {
    id: "nlife-switch2-third-party",
    category: "Industry",
    headline: "Nintendo talks up Switch 2's third-party line-up for 2026 and beyond",
    summary:
      "Nintendo's latest financial briefing leaned hard on third-party support, name-checking Final Fantasy 14, Elden Ring, Call of Duty: Modern Warfare 4 and Dragon's Dogma 2 among Switch 2's growing library. The company says the console already has more titles lined up than Switch had in its entire first year.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-highlights-multiple-major-third-party-releases-for-switch-2-in-2026-and-beyond",
    publishedAt: "2026-08-07T10:00:00.000Z",
    imageUrl: "https://images.nintendolife.com/691f36d24e81b/final-fantasy.900x.jpg",
  },
  {
    id: "pcgamer-arc-raiders-expeditions-pause",
    category: "Releases",
    headline: "Arc Raiders is pausing Expeditions until 2027 for a major rework",
    summary:
      "Embark Studios says the fifth Expedition, opening 8th September, will be the last for a while — the mode goes on hold until early 2027 so the studio can address complaints about tight departure windows and the reward structure. Any progress already banked carries over, and the final pre-pause run drops some of the more punishing rules as a goodwill gesture.",
    source: "PC Gamer",
    sourceUrl: "https://www.pcgamer.com/games/third-person-shooter/arc-raiders-is-halting-expeditions-until-2027-so-it-can-make-major-improvements-to-the-system/",
    publishedAt: "2026-08-22T10:00:00.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/arc-raiders-expeditions-pause.jpg",
  },
  {
    id: "pcgamer-cdprojekt-sirius-cuts",
    category: "Industry",
    headline: "CD Projekt cuts over 20% of its Witcher spinoff team",
    summary:
      "Project Sirius, the still-unrevealed Witcher spinoff from the newly-absorbed Molasses Flood studio, has lost 18 of its roughly 83 staff. CD Projekt says the cuts reflect 'the project's needs at this stage of development,' the latest turbulence for a game that was previously written off and rebooted.",
    source: "PC Gamer",
    sourceUrl: "https://www.pcgamer.com/games/the-witcher/cd-projekt-cuts-more-than-20-percent-of-the-witcher-spinoff-development-team-to-reflect-the-projects-needs-at-this-stage-of-development/",
    publishedAt: "2026-08-21T15:00:00.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/project-sirius-witcher-spinoff.jpg",
  },
  {
    id: "rps-mortal-shell-2-review",
    category: "Reviews",
    headline: "Mortal Shell 2 is a gloriously oddball alternative to Dark Souls",
    summary:
      "Rock Paper Shotgun's review leans into the sequel's weirdness, comparing its rotten, backstabbing setting to 'Warhammer Fantasy Roleplay, or perhaps even Fighting Fantasy' rather than the grim solemnity of FromSoftware's games. The reviewer flags that leaning too hard into one path can get repetitive, but says sending different knights down different roads keeps a second or third playthrough fresh.",
    source: "Rock Paper Shotgun",
    sourceUrl: "https://www.rockpapershotgun.com/mortal-shell-2-review",
    publishedAt: "2026-08-21T12:00:00.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/mortal-shell-2-review-key-art.jpg",
  },
  {
    id: "kotaku-gamepass-wave2-august",
    category: "Releases",
    headline: "A Plague Tale headlines Xbox Game Pass's second August wave",
    summary:
      "Ethan Gach rounds up wave two of August's Game Pass additions, led by Resonance: A Plague Tale Legacy, which pushes the series toward parries and finishing moves over pure stealth. Also joining is Blood Dungeon, a Pac-Man-meets-roguelike from Nidhogg designer Mark Essen.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/nidhogg-designers-mash-up-of-pac-man-and-vampire-survivors-and-everything-else-hitting-game-pass-in-august-2026-2000725329",
    publishedAt: "2026-08-18T17:00:00.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/ss_6fe902a0e588feab934da8dcb6c61180eeae3427.1920x1080.jpg",
  },
  {
    id: "pcgamer-future-games-show-gamescom",
    category: "Industry",
    headline: "Future Games Show returns to Gamescom with three separate shows",
    summary:
      "PC Gamer previews GamesRadar's Gamescom push, which spreads across a premiere, a live interview show, and a best-of recap this year. Expect world premieres, exclusive trailers and developer deep dives as the Cologne show floor opens on 26th August.",
    source: "PC Gamer",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/events-conferences/future-games-show-returns-to-gamescom-with-3-shows/",
    publishedAt: "2026-08-20T11:00:00.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/future-games-show-gamescom-2026.jpg",
  },
  {
    id: "nlife-gamescom-playable-lineup",
    category: "Industry",
    headline: "Nintendo reveals its playable Gamescom line-up",
    summary:
      "Nintendo of Europe has confirmed what's playable on its Gamescom show floor from 26th-30th August, headlined by Call of Duty: Modern Warfare 4 and Nintendo Switch Sports Resort, alongside 007 First Light and Metaphor: ReFantazio. No word yet on whether a rumoured Ocarina of Time remaster announcement is coming.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-reveals-its-playable-gamescom-line-up",
    publishedAt: "2026-08-05T09:00:00.000Z",
    imageUrl: "https://images.nintendolife.com/0f856dbc13c42/modern-warfare-4.900x.jpg",
  },
  {
    id: "polygon-gta6-netflix-extended-look",
    category: "Releases",
    headline: "GTA 6's Netflix Extended Look is locked in for 27th August",
    summary:
      "Rockstar's next real look at Grand Theft Auto 6 premieres exclusively on Netflix on 27th August at 3pm ET, in a first-of-its-kind marketing tie-up, before going wide on YouTube six hours later. Polygon expects another dose of Jason and Lucia, and possibly the clearest gameplay footage yet ahead of the game's 19th November launch.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/gta-6/netflix-extended-look-release-date-time/",
    publishedAt: "2026-08-21T13:00:00.000Z",
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/08/gta-6-jason-lucia-netflix.jpg",
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
