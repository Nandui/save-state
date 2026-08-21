import type { BriefingMeta, Story } from "./types";

/** Curated 21 Aug 2026 evening snapshot. Times are ISO-8601 (UTC) from the source RSS or byline. */
export const briefingMeta: BriefingMeta = {
  editionDate: "2026-08-21",
  editionLabel: "Friday, 21 August 2026",
  briefedAt: "2026-08-21T18:00:00.000Z",
  briefedAtLabel: "7:00pm IST",
  timezone: "Europe/Dublin",
};

export const briefingCopy = `Friday evening's biggest swing is a fumble: FromSoftware pulled the plug on The Duskbloods' first Switch 2 network test after two hours of players stuck on a "failed to log in" screen, an awkward follow-up to this morning's talk of Nintendo smoothing the game's onboarding. Take-Two has moved from statements to subpoenas, PC Gamer reports, demanding Microsoft and Discord hand over records tied to the Cyberleek GTA 6 leaks by 4 September. Amazon put a stamp on its God of War recast, confirming Dave Bautista as Kratos after Ryan Hurst's injury, while Kotaku flags an AI-generated image quietly sitting inside the Spider-Man: Brand New Day art book. Overwatch players are asking where Lifeweaver went after Blizzard yanked him from select screens without a word, and on lighter notes, Nintendo Life clocks Genki's screen-equipped Manta controller blowing past its Kickstarter goal while PC Gamer spotlights a solo dev's fully walkable cyberpunk city built almost entirely out of ASCII characters.`;

export const stories: Story[] = [
  {
    id: "kotaku-duskbloods-network-test-cancelled",
    category: "Hardware",
    headline: "FromSoftware gives up on today's The Duskbloods network test after two hours of failed logins",
    summary:
      "FromSoftware cancelled the first closed network test session for its Switch 2 exclusive The Duskbloods after roughly two hours of universal login failures, with players stuck on a \"Failed to log in\" error throughout the window. The studio apologised and said it would keep working on server stability, a rocky start after this morning's reporting on Nintendo's hands-on help with the game's onboarding.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/fromsoftware-gives-up-duskbloods-network-test-2000726612",
    publishedAt: "2026-08-21T13:15:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/2079.jpg",
  },
  {
    id: "pcgamer-take-two-subpoena",
    category: "Industry",
    headline: "Take-Two kicks off GTA 6 leaker hunt with subpoenas demanding records from Microsoft and Discord",
    summary:
      "Take-Two has filed subpoenas in New York federal court seeking records from Microsoft and Discord tied to the \"Cyberleek\" account behind this week's wave of GTA 6 gameplay leaks. PC Gamer's Andy Chalk reports both companies have until 4 September to hand over identifying data, as Rockstar continues its public silence on the leaks.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/games/grand-theft-auto/take-two-kicks-off-gta-6-leaker-hunt-with-subpoenas-demanding-records-from-microsoft-and-discord/",
    publishedAt: "2026-08-21T16:00:00.000Z",
    timeApproximate: true,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/3ZfhP8k2vLmXr4wQ9tYbCd.jpg",
  },
  {
    id: "kotaku-bautista-kratos",
    category: "Industry",
    headline: "Dave Bautista officially confirmed as the new Kratos in Amazon's God of War series",
    summary:
      "Amazon has confirmed Dave Bautista as the new Kratos for its live-action God of War series, replacing Ryan Hurst after a torn-bicep injury forced a recast. Kotaku's John Walker reports the production, from Battlestar Galactica's Ronald D. Moore, must now reshoot Kratos's scenes from the first four episodes, pushing a realistic premiere to late 2027.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/god-of-war-dave-bautista-confirmed-new-kratos-amazon-prime-2000726603",
    publishedAt: "2026-08-21T10:30:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/bautista.jpg",
  },
  {
    id: "nintendolife-genki-manta-controller",
    category: "Hardware",
    headline: "Genki's new controller is chunky, boasts haptic feedback, and its own screen",
    summary:
      "Genki has launched the Manta, a premium controller with a built-in 2.79-inch touchscreen running its own MantaOS for on-device remapping, macros and profile switching without a companion app. Nintendo Life's Ollie Reynolds notes it supports Switch 1 & 2, PC, Mac, Android and iOS, and its Kickstarter has already blown past its $100,000 goal with over $352,000 pledged.",
    source: "Nintendo Life",
    sourceUrl:
      "https://www.nintendolife.com/news/2026/08/genkis-new-controller-is-chunky-boasts-haptic-feedback-and-its-own-screen",
    publishedAt: "2026-08-21T09:30:00.000Z",
    timeApproximate: true,
    imageUrl: "https://images.nintendolife.com/8af93b40ec8f8/genki-manta-1.900x.jpg",
  },
  {
    id: "pcgamer-ascii-cyberpunk-city",
    category: "Indie",
    headline: "Lone game dev builds an explorable cyberpunk city almost entirely out of ASCII characters",
    summary:
      "Solo developer Grow Now Games built a fully walkable cyberpunk city rendered almost entirely in ASCII characters, using a custom ray-casting engine packed into a single HTML file. PC Gamer's Jess Kinghorn reports the playable prototype renders at 180x80 characters and is now available to try via the developer's Ko-fi.",
    source: "PC Gamer",
    sourceUrl:
      "https://www.pcgamer.com/hardware/lone-game-dev-builds-an-explorable-cyberpunk-city-almost-entirely-out-of-ascii-characters/",
    publishedAt: "2026-08-21T17:30:00.000Z",
    timeApproximate: true,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/hK7wVnQ2sTzY6jLmP4rXeB.jpg",
  },
  {
    id: "kotaku-spiderman-ai-artbook",
    category: "Industry",
    headline: "AI-generated image found in Spider-Man: Brand New Day art book as film crosses $2 billion at the box office",
    summary:
      "Marvel's official concept art book for Spider-Man: Brand New Day includes an image with warped taxis, malformed stairs and distorted buildings that fans and artists say bears the hallmarks of AI generation. Kotaku's Lewis Parker notes the discovery lands four months after Disney cut over 1,000 Marvel Studios staff, many from visual effects and concept art teams, despite the film's $2 billion haul.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/spider-man-brand-new-day-ai-concept-art-book-marvel-2000726642",
    publishedAt: "2026-08-21T14:45:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/04/spider-mannn.jpg",
  },
  {
    id: "kotaku-overwatch-lifeweaver-disabled",
    category: "Esports",
    headline: "Has anyone seen my son Lifeweaver in Overwatch?",
    summary:
      "Blizzard quietly pulled support hero Lifeweaver from Overwatch's hero select screen and practice range with no explanation, leaving players guessing whether it's a game-breaking bug or fallout from a recent nerf to his Life Grip ability. Kotaku's Kenneth Shepard says the silence has fans openly asking Blizzard to just tell them what happened.",
    source: "Kotaku",
    sourceUrl: "https://kotaku.com/overwatch-lifeweaver-disabled-disappeared-gone-bug-2000726691",
    publishedAt: "2026-08-21T17:45:00.000Z",
    timeApproximate: true,
    imageUrl: "https://kotaku.com/app/uploads/2026/08/image-81.jpg",
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
