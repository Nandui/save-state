import type { BriefingMeta, Story } from "./types";

/** Curated 19 Aug 2026 snapshot. Times are ISO-8601 (UTC) from the source RSS or byline. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-19",
  editionLabel: "Wednesday, 19 August 2026",
  briefedAt: "2026-08-19T22:25:00.000Z",
  briefedAtLabel: "11:25pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `The week before Rockstar’s official GTA 6 look on Netflix, a group calling itself Cyberleek has flooded the internet with what looks like real gameplay — and Take-Two is wiping it as fast as it lands. Around that circus sits a quieter argument about ownership: no physical discs, a warehouse breach at Pokémon Center, and a consumer campaign telling people not to fund the leakers. Elsewhere the industry is still mid-contraction — Sony is walking a Horizon live-service project back toward a regular co-op game, EA staff are uneasy under new Saudi ownership, and veterans of immersive sims are opening a studio while Bethesda workers keep rallying. If you only have a minute, the day is leaks, labour, and a few games that are finally ready to play.`;

export const stories: Story[] = [
  {
    id: "gta6-cyberleek",
    category: "Industry",
    headline: "GTA 6 leaks keep landing as Cyberleek taunts Rockstar ahead of the Netflix reveal",
    summary:
      "A group calling itself Cyberleek has posted several clips of what appears to be Grand Theft Auto 6 gameplay, a week before Rockstar’s official extended look on Netflix on 27 August. Take-Two is issuing takedowns almost immediately; later clips are watermarked with lines about the lack of a physical disc. Stop Killing Games has publicly told people not to send the leakers money — they are also promoting a memecoin — and said illegal leaks do nothing for consumer rights.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/gta-6-leaks-unmoderated-cyberleek-stop-killing-games/",
    publishedAt: "2026-08-19T17:41:00.000Z",
    timeApproximate: true,
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/ultimate_edition_grotti_cheetah_01.jpg?w=1600&h=900&fit=crop",
  },
  {
    id: "gta6-wanted",
    category: "Industry",
    headline: "Leaked footage points to a six-star wanted system — and cops who remember your clothes",
    summary:
      "Clips Polygon reviewed before they were pulled show a six-star wanted meter, last seen in GTA 4, filling after a roadside assault. Police shout over megaphones before any stars appear, which reads more like a warning than a sudden chase. Three icons under the stars — clothes, body, vehicle — suggest the game tracks what officers actually know about you, not just a single heat number.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/gta-6-leak-wanted-level-six-stars-five-how-does-it-work-cops-tanks/",
    publishedAt: "2026-08-19T16:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/vintage_vice_city_pack_exclusive_looks_04.jpg?w=1600&h=900&fit=crop",
  },
  {
    id: "horizon-reboot",
    category: "Industry",
    headline: "Sony is reportedly rebooting Horizon Hunters Gathering after poor playtests",
    summary:
      "Bloomberg says Guerrilla’s live-service Horizon spin-off tested badly this year and is being rebuilt as a smaller co-op game with a proper story. Most of the team has already been moved; a remnant has until a December milestone to convince Sony executives the new version is worth keeping. A small Guerrilla group is still on the next single-player Horizon, which remains years away.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/action/sony-reportedly-reverses-course-on-live-service-co-op-horizon-game-after-negative-player-feedback/",
    publishedAt: "2026-08-19T19:54:21.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/RkCyjZrKmQaRqet4teYsYi-2560-80.jpg",
    imageAlt: "Horizon Hunters Gathering trailer still - four hunters, gathering",
  },
  {
    id: "black-pony",
    category: "Industry",
    headline: "Harvey Smith opens Black Pony Immersive, a new studio built for systemic first-person games",
    summary:
      "The Dishonored and Deus Ex veteran has teamed with producer Ben Horne and longtime collaborator Ricardo Bare to start a studio whose name does not hide the brief. They want first-person action RPGs in “well-realized worlds” where systems, not set pieces, do the work — immersive sims, described carefully because that genre is commercially thin. The site’s “through the looking glass” line is a nod to Looking Glass Studios, not Lewis Carroll.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/gaming-industry/dishonored-co-creator-harvey-smith-launches-a-new-studio-and-it-literally-has-the-word-immersive-in-the-name/",
    publishedAt: "2026-08-19T15:18:32.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/NmxHVsZUHJXf4j7Vvmod63-1920-80.jpg",
    imageAlt: "Harvey Smith",
  },
  {
    id: "ea-saudi",
    category: "Industry",
    headline: "EA staff brace for quieter censorship after the Saudi buyout closes",
    summary:
      "The Public Investment Fund’s purchase of Electronic Arts closed this month. Game Developer found employees who expect fewer signed projects that sit poorly with the new owners, rather than an open content ban. Several said the moral case is obvious and the job market is not — and that the deal’s debt still makes large layoffs feel inevitable even if nothing has been announced yet.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/gaming-industry/ea-employees-brace-for-the-worst-under-saudi-ownership-hard-to-feel-good-about-being-bought-out-by-a-regime-thats-very-much-at-odds-with-progressive-society/",
    publishedAt: "2026-08-19T17:58:26.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/TxcJhgJtWhsRvQvitVgmmJ-2560-80.jpg",
    imageAlt: "The silhouette of attendees are seen dancing in front of the Electronic Arts Inc. (EA) logo displayed on a screen during the company",
  },
  {
    id: "console-price",
    category: "Hardware",
    headline: "Ampere: a $1,000 PS6 and Xbox Helix could mean 39 million fewer consoles sold",
    summary:
      "If the next Sony and Microsoft machines ship at $1,000 instead of $700, Ampere Analysis forecasts about 39 million fewer units over five years and roughly $3.4 billion less player spending over three. The firm’s outs — delay past the rumoured 2028 window, eat the subsidy, or redesign around something cheaper than raw power — all look politically hard. Nintendo’s Switch 2, heading toward a $500 street price, is the cheap machine in the room.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/dire-forecast-predicts-39-million-fewer-consoles-sold-if-ps6-and-xbox-helix-are-1000-2000725914",
    publishedAt: "2026-08-19T18:45:31.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/GettyImages-477358798-1200x675.jpg",
  },
  {
    id: "pokemon-center-breach",
    category: "Industry",
    headline: "Pokémon Center hit by the same CEVA breach that reached Valve’s Steam hardware",
    summary:
      "CEVA Logistics, the warehouse contractor already known to have exposed European Steam Machine and controller orders, has now told Pokémon Center that UK and German customers are in the same pile. Some merchandise orders are being cancelled. One shipping partner, two very different storefronts — and another week where “your data left the building” is ordinary industry news.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/pokemon-center-hack-data-breach-valve-orders-cancelled-ceva-2000725795",
    publishedAt: "2026-08-19T11:00:23.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/pokemoncenter2.jpg",
  },
  {
    id: "pokemon-mew",
    category: "Industry",
    headline: "A rumoured RGB Mew may be the rarest card in Pokémon’s 30th anniversary set",
    summary:
      "TCG creator TheCardScience says a contact at printer Millennium Print Group confirmed a new Mew with an “RGB” rarity mark, in three photo-negative tints. The claimed pull rate is one in 20,000 packs — far thinner than current chase cards. The 30th Celebration set is due 16 September; packs are already leaking, and nobody will know the real odds until millions of them are opened.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/pokemons-30th-anniversary-set-might-be-making-a-mysterious-new-mew-card-the-rarest-ever-2000725936",
    publishedAt: "2026-08-19T21:37:29.000Z",
    imageUrl: "https://kotaku.com/app/uploads/2026/08/mews-1200x675.jpg",
  },
  {
    id: "stalker2-20",
    category: "Releases",
    headline: "STALKER 2’s 2.0 update is the version people have been waiting two years to start",
    summary:
      "GSC’s engine-level 2.0 patch lands tomorrow with the Cost of Hope expansion, moving Heart of Chornobyl onto a newer Unreal Engine 5 build. Hands-on reports say outdoor hitching is largely gone and interiors finally have the contrast the Zone always wanted. If you bought it at launch and bounced, this is the honest re-entry point — not another “we fixed 1,400 bugs” patch note.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/fps/stop-waiting-to-play-stalker-2-the-2-0-update-makes-it-the-game-its-wanted-to-be-for-2-years/",
    publishedAt: "2026-08-19T15:13:20.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/TxyQx7gZ5aUd7Ssx9uX5ri-1920-80.jpg",
    imageAlt: "Scar from Stalker 2, bathed in ominous red light.",
  },
  {
    id: "isaac-gta",
    category: "Releases",
    headline: "The Binding of Isaac: Repentance + Online is coming the same day as GTA 6",
    summary:
      "Edmund McMillen’s bundle — Rebirth plus every prior expansion, now with online play — is dated for consoles on 19 November. That is also Grand Theft Auto 6’s launch day. It will not win the weekend, but it is a very Isaac way to schedule a dungeon crawler against the most expensive crime game ever made.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/the-binding-of-isaac-repentance-plus-online-date",
    publishedAt: "2026-08-19T11:59:42.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/the-binding-of-isaac-repentance%2B-screen-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
  },
  {
    id: "elden-ring-switch2",
    category: "Releases",
    headline: "Elden Ring on Switch 2 is looking like a steady 30fps, nine days from launch",
    summary:
      "Tarnished Edition arrives 28 August. A Japanese preview and a new Nintendo gameplay showcase suggest docked play now holds a much steadier 30fps after earlier builds stuttered in the open world. Handheld still dips in heavy fights, and there is no 60fps mode — but the port no longer looks like a warning label.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/elden-ring-switch-2-preview-indicates-that-performance-concerns-are-a-thing-of-the-past",
    publishedAt: "2026-08-19T12:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/acb640e952968/large.jpg",
  },
  {
    id: "tekken-harada",
    category: "Esports",
    headline: "Tekken 8’s director leaves Bandai Namco for Harada’s Vs Studio",
    summary:
      "Kohei Ikeda, who directed Tekken 8, has joined Katsuhiro Harada at Vs Studio, the new fighting-game house working with SNK. It is a clean talent shift in a year when Harada’s post-Tekken plans have been the main rumour in the scene. Vs Studio has not shown a game yet.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/tekken-8-director-joins-harada-vs-studio",
    publishedAt: "2026-08-19T09:06:29.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/TEKKEN-8---Heihachi-Mishima-Trailer-2-29-screenshot-(1).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
  },
  {
    id: "overwatch-emerald",
    category: "Esports",
    headline: "Overwatch’s new Emerald rank is eating the chaos between plat and diamond",
    summary:
      "Season 4 slotted Emerald between Platinum and Diamond to split a huge, mismatched skill band. Early play suggests the mismatch just moved house: games swing from disciplined to sloppy, and the voice chat is worse than the ranks above. Blizzard’s idea is sound. Living there during a reset is not.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/fps/overwatchs-newest-emerald-rank-is-like-a-live-grenade-wedged-between-plat-and-diamond/",
    publishedAt: "2026-08-19T16:19:32.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/DUvvd3HT4Dv8z3wmtrQiHg-1920-80.jpg",
    imageAlt: "overwatch 2 wrecking ball bug",
  },
  {
    id: "dualsense-edge",
    category: "Hardware",
    headline: "FCC filings hint at a revised DualSense Edge sometime in 2027",
    summary:
      "Paperwork at the US communications regulator points to a new model of Sony’s £200 / $200 pro controller. That usually means a quiet refresh — radio tweaks, a new SKU — not a redesign. Treat it as a calendar note, not a reason to wait if the current Edge already works.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/new-dualsense-edge-controller-model-2027-leak",
    publishedAt: "2026-08-19T10:45:59.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/DualSense-Edge-Wireless-controller.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
  },
  {
    id: "bethesda-rallies",
    category: "Industry",
    headline: "Bethesda union rallies continue: “Without us, Bethesda games aren’t Bethesda games”",
    summary:
      "Protests against Microsoft’s Xbox-wide layoffs ran again yesterday across North America, organised with OneBGS and the CWA. A unionised developer told Rock Paper Shotgun that day-to-day morale is low, but organising energy is “on the upswing.” Fan mods have already put protest signs and union vault suits into Fallout 4.",
    source: "Rock Paper Shotgun",
    sourceUrl:
      "https://www.rockpapershotgun.com/without-us-bethesda-games-arent-bethesda-games-rallies-against-microsoft-layoffs-at-elder-scrolls-studio-continue-with-unionised-devs-morale-on-the-upswing",
    publishedAt: "2026-08-19T11:30:00.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/bethesda-union-rallies-against-layoffs-continue-02.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
  },
  {
    id: "mortal-shell-2",
    category: "Reviews",
    headline: "Mortal Shell 2 is a heavy-metal soulslike — and its first patch stops you stealing swords",
    summary:
      "Rock Paper Shotgun’s review calls Cold Symmetry’s sequel a monumental follow-up with the spirit of a 1990s PC game, not just another Elden Ring cousin. The studio has already hotfixed a bug that let ripostes yoink enemy weapons, amid claims the retail build is tougher than the beta. A rave and a patch in the same week is a very 2026 launch.",
    source: "Rock Paper Shotgun",
    sourceUrl:
      "https://www.rockpapershotgun.com/amid-accusations-of-a-post-beta-difficulty-bump-mortal-shell-2-devs-patch-the-new-soulslike-to-stop-players-riposting-so-hard-they-steal-enemy-weapons",
    publishedAt: "2026-08-19T14:16:46.000Z",
    imageUrl: "https://assetsio.gnwcdn.com/mortal-shell-2-naylshotting-tarred-vestige.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
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
