import type { BriefingMeta, Story } from "./types";

/** Curated 20 Aug 2026 snapshot. Times are ISO-8601 (UTC) from the source RSS or byline. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-20",
  editionLabel: "Thursday, 20 August 2026",
  briefedAt: "2026-08-20T20:50:00.000Z",
  briefedAtLabel: "9:50pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Thursday belongs to the GTA 6 leak spiral: Cyberleek posted a crop-duster flyover clip that ends with bullets spelling “LEEK” into a wall, Rockstar has gone dark across every channel for 48 straight hours, and Polygon has the group’s manifesto railing against disc-free releases and the $100 Ultimate Edition. Away from that circus, Nintendo confirmed the Switch 2’s UK and Irish price rise for 1 September, a rogue Windows 11 patch is crashing Arc Raiders and The Finals, and Rock Paper Shotgun has two reviews landing the same day — STALKER 2’s Cost of Hope expansion and Mortal Shell 2’s full launch. Subnautica 2 and Splatoon 3 both picked up fresh updates too.`;

export const stories: Story[] = [
  {
    id: "gta6-playable-build",
    category: "Industry",
    headline: "New GTA 6 footage suggests Cyberleek is flying through a genuinely playable build",
    summary:
      "The latest clip is a serene crop-duster flight between the Keys and Vice City, with Jason flicking through radio stations, before it ends with him firing bullets into a wall that spell out “LEEK.” It’s the clearest evidence yet that the leaker has an actual playable build rather than rendered dumps — Rockstar’s takedown campaign keeps missing new mirrors as fast as it lands.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/gta-6-footage-playable-build-cyberleek-radio-stations-flying-2000726124",
    publishedAt: "2026-08-20T14:30:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/gta6-flying.jpg",
  },
  {
    id: "gta6-rockstar-silent",
    category: "Industry",
    headline: "Rockstar has gone completely dark on social media as the GTA 6 leaks pile up",
    summary:
      "No tweets, no Instagram activity, nothing on Discord, and the official newswire hasn’t updated since 14 August. Rockstar even skipped its usually clockwork Tuesday post — 48 hours of total silence through the worst run of Cyberleek clips yet, with Kotaku’s repeated pings going unanswered.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/rockstar-games-hasnt-posted-anything-online-in-48-hours-as-gta-6-leaks-keep-getting-worse-2000726182",
    publishedAt: "2026-08-20T15:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/07/gta-pc-3.jpg",
  },
  {
    id: "gta6-leak-map",
    category: "Industry",
    headline: "The leaked GTA 6 map shows Leonida split into five counties, and Vice Dale is the dense one",
    summary:
      "Alongside clips of Jason roughing up a civilian roadside and playing basketball at a Safe House, an alleged full map surfaced showing the Florida-inspired state of Leonida broken into five explorable counties. Vice Dale County — home to Vice City — is by far the most detailed of the five, though it’s unclear whether the footage is from a recent or an old build.",
    source: "Eurogamer",
    sourceUrl: "https://www.eurogamer.net/gta-6-leaked-gameplay-map-cyberleek",
    publishedAt: "2026-08-19T10:49:00.000Z",
    imageUrl:
      "https://assetsio.gnwcdn.com/grand-theft-auto-6-leak.jpg?width=570&quality=85&format=jpg&dpr=3&auto=webp",
  },
  {
    id: "gta6-cyberleek-manifesto",
    category: "Industry",
    headline: "Cyberleek published a manifesto attacking Rockstar’s no-disc policy — then leaked more clips to prove it meant business",
    summary:
      "The hacktivist group frames its leaks as protest against Take-Two going disc-free and against the $100 Ultimate Edition’s exclusive cosmetics and in-game shop. After the manifesto dropped, Cyberleek followed through on its threats with a two-minute clip of Jason tasering people, watermarked “No physical discs? Then more leeks!”, then a second showing him stabbing a police officer.",
    source: "Polygon",
    sourceUrl: "https://www.polygon.com/gta-6-leaks-unmoderated-cyberleek-stop-killing-games/",
    publishedAt: "2026-08-19T17:41:00.000Z",
    imageUrl:
      "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/06/ultimate_edition_grotti_cheetah_01.jpg?w=1600&h=900&fit=crop",
  },
  {
    id: "switch2-price-uk-ireland",
    category: "Hardware",
    headline: "Nintendo confirms the Switch 2 price rise for the UK and Ireland, effective 1 September",
    summary:
      "The UK price climbs from £395.99 to £419.99, and Ireland moves from €469.99 to €499.99, matching the wider Euro-zone increase Nintendo first flagged back in May. Nintendo Life notes it’s still a gentler bump than what the PS5, Xbox Series X|S, or even a Steam Deck now cost.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-details-switch-2-price-increase-for-the-uk",
    publishedAt: "2026-08-20T13:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/85205435c1be0/switch-2.900x.jpg",
  },
  {
    id: "windows11-game-crashes",
    category: "Hardware",
    headline: "A Windows 11 update is crashing Arc Raiders and The Finals — Embark has a fix while Microsoft investigates",
    summary:
      "Games patched after the 11 August update have been freezing, closing without warning, or throwing EXCEPTION_ACCESS_VIOLATION errors, traced to the inpoutx64.sys driver. Microsoft has only confirmed the issue in Arc Raiders, Marvel Tōkon: Fighting Souls, and The Finals so far; Embark’s workaround is to delete the inpoutx64 service and driver file, or simply disable the service and reboot.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/hardware/controllers/the-latest-windows-11-update-is-borking-some-multiplayer-games-but-arc-raiders-developer-has-a-quick-workaround/",
    publishedAt: "2026-08-20T11:00:04.000Z",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/cfRFGsMSVs36ZLNFgKUbaU.jpg",
  },
  {
    id: "stalker2-cost-of-hope-review",
    category: "Reviews",
    headline: "STALKER 2: Cost of Hope review — an expanded Zone that begs to be explored, even as the faction war fizzles",
    summary:
      "GSC’s first story expansion returns players to the Chornobyl power plant and revives the Duty-versus-Freedom rivalry the base game skipped over, arriving alongside the engine-level 2.0 update. Rock Paper Shotgun says returning faces get proper context rather than fan-service cameos, though the reviewer feels the central faction war itself doesn’t quite land.",
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
      "Cold Symmetry’s sequel launches fully today on PS5, Xbox Series X|S, and PC after a beta period that topped a million players. Rock Paper Shotgun’s review calls it a “monumental” follow-up carrying the DNA of a PC-only game from decades past, comparing the leap from the original to something like The Witcher 3’s jump over The Witcher.",
    source: "Rock Paper Shotgun",
    sourceUrl:
      "https://www.rockpapershotgun.com/mortal-shell-2-review-a-monumental-heavy-metal-sequel-with-the-spirit-of-a-90s-pc-game",
    publishedAt: "2026-08-17T14:33:00.000Z",
    timeApproximate: true,
    imageUrl:
      "https://assetsio.gnwcdn.com/mortal-shell-2-standing-next-to-skewered-guys.jpg?width=690&height=388&fit=crop&quality=85&format=jpg&auto=webp",
  },
  {
    id: "subnautica2-coop-update",
    category: "Releases",
    headline: "Subnautica 2’s version 1.2 brings proximity chat, trading, and reviving your buddies",
    summary:
      "Unknown Worlds’ second major early-access update answers the loudest post-launch request after July’s fish-damage rework: proper co-op tools. Version 1.2 is live today with proximity voice chat, player trading, and the ability to revive downed teammates, backed by a trailer and dev vlog explaining the changes.",
    source: "Kotaku",
    sourceUrl:
      "https://kotaku.com/subnautica-2-buddy-system-update-co-op-1-2-patch-notes-unknown-worlds-2000726159",
    publishedAt: "2026-08-20T16:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/sub2.jpg",
  },
  {
    id: "nintendo-download-20-aug",
    category: "Releases",
    headline: "This week’s Nintendo Download is stacked ahead of Elden Ring and MGS Master Collection Vol. 2",
    summary:
      "The eShop update previews Elden Ring: Tarnished Edition ($79.99, out 28 August with Shadow of the Erdtree bundled in) and Metal Gear Solid: Master Collection Vol. 2 ($49.99, out 27 August across both Switch generations), alongside the usual pile of indie roguelikes, puzzle games, and retro arcade collections.",
    source: "Nintendo Life",
    sourceUrl: "https://www.nintendolife.com/news/2026/08/nintendo-download-20th-august-north-america",
    publishedAt: "2026-08-20T12:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/c1c24b83a4d9b/mgs4.900x.jpg",
  },
  {
    id: "splatoon3-update-1130",
    category: "Releases",
    headline: "Splatoon 3 update 11.3.0 adds a Raiders tie-in weapon and rebalances the special meter",
    summary:
      "Players with Splatoon Raiders save data who’ve finished its campaign can now claim the new Plastic-Bottle Splattershot Replica from the lobby terminal. The patch also adjusts a batch of primary and special weapons across both Switch and Switch 2 versions, with Nintendo promising further multiplayer balance passes to come.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/splatoon-3-ver-11-3-0-update-out-now-here-are-the-full-patch-notes",
    publishedAt: "2026-08-20T01:15:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/ab415d205d952/splatoon-3.900x.jpg",
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
