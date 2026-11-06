/**
 * CENTRALIZED TOURNAMENT CONFIGURATION
 * 
 * Free Fire MAX Tournament
 * Organized by FFM Mukesh x RC Innovations
 * 
 * NOTE: All external links, Google Form URLs, and dates are managed here.
 * Do not hardcode URLs or values inside individual UI components.
 */

export const TOURNAMENT_CONFIG = {
  // Brand & Tournament Identity
  title: "FREE FIRE MAX TOURNAMENT",
  tagline: "ENTER THE BATTLE. PROVE YOUR SKILLS. CLAIM VICTORY.",
  subTagline: "PLAY • COMPETE • WIN",
  motto: "TOGETHER FOR GAMING COMMUNITY",

  // Official Logo
  logo: {
    src: "/assets/branding/logo.png",
    originalSrc: "/assets/branding/logo.jpg",
    alt: "Free Fire MAX Official Tournament Logo",
  },
  
  // Promotional Poster
  poster: {
    src: "/assets/promotion/Promotion.jpeg",
    alt: "Free Fire MAX Tournament Official Promotion Poster - FFM Mukesh x RC Innovations",
    downloadName: "FFM-FreeFireMAX-Tournament-Poster.jpeg"
  },

  // Key Tournament Metrics - Two Separate Solo Matches
  stats: {
    totalMaps: 6,
    availableMaps: 1, // Only Bermuda is active
    totalMatches: 2,  // Two independent Solo Matches
    match1Capacity: 48,
    match2Capacity: 48,
    playersPerMatch: 48,
    totalCapacity: 96, // 48 unique players in Match 1 + 48 different unique players in Match 2
    totalPlayers: 96,
    winnerPrizePerMap: 1000, // ₹1,000 per match champion
    winnerPrizePerMatch: 1000,
    totalPrizePool: 6000, // Tournament series prize pool
    format: "Solo Battle Royale",
    currentMap: "Bermuda",
    lobbyType: "Custom Room Lobby",
  },

  // Tournament Schedule / Countdown Target Date
  schedule: {
    targetDate: "2026-11-20T18:00:00+05:30", // Change to null or empty string to test the fallback state
    fallbackMessage: "TOURNAMENT DATE WILL BE ANNOUNCED.",
    timeZone: "IST (UTC+5:30)"
  },

  // Live Registration Slot Availability API
  // Architecture: 6 Google Forms -> Google Apps Script -> Central Sheet -> Public Status API -> Tournament Website
  api: {
    statusEndpoint: "", 
    pollIntervalMs: 60000, // Refresh every 60 seconds
    fallbackMessage: "REGISTRATION AVAILABILITY WILL BE UPDATED SOON."
  },

  // Official YouTuber / Tournament Host
  host: {
    name: "FFM Mukesh",
    role: "Official YouTuber & Tournament Host",
    channelUrl: "https://www.youtube.com/@FFM__MUKESH",
    discordUrl: "https://discord.com/invite/aK3d4pDNjZ",
    description: "Official Free Fire MAX content creator and tournament host bringing competitive battle royale action to the gaming community."
  },

  // Technical Partner
  technicalPartner: {
    name: "RC Innovations",
    role: "Official Technical Partner",
    logoUrl: "/assets/branding/rc.png",
    websiteUrl: "https://reegan-portfolio-mjq2hvtih-rc-innovation.vercel.app/",
    description: "Cutting-edge technology & digital innovations partner powering the tournament digital experience and infrastructure."
  },

  // Maps Configuration (6 Maps)
  // Only BERMUDA is OPEN with Two Independent Solo Matches (48 Players each = 96 Total).
  // The other 5 maps are COMING SOON.
  maps: [
    {
      id: "map-01",
      number: "01",
      name: "BERMUDA",
      subtitle: "The Classic Battleground",
      terrain: "Tropical Coastal & Mountain Highgrounds",
      description: "Free Fire's most iconic tropical island featuring balanced close-quarters town skirmishes, clock tower rushes, and high-stakes peak shootouts.",
      hotspots: ["Clock Tower", "Peak", "Bimasakti", "Factory"],
      image: "/assets/maps/bermuda.webp",
      status: "OPEN",
      isPlayable: true,
      max: 96, // 48 players in Match 1 + 48 players in Match 2
      defaultRegistered: 55, // 34 in Match 1 + 21 in Match 2
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-01-PLACEHOLDER/viewform",
      matches: [
        {
          id: "match-01",
          number: 1,
          name: "MATCH 1",
          title: "MATCH 1 – BERMUDA SOLO",
          mode: "SOLO",
          map: "Bermuda",
          max: 48,
          defaultRegistered: 34,
          googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-01-PLACEHOLDER/viewform",
        },
        {
          id: "match-02",
          number: 2,
          name: "MATCH 2",
          title: "MATCH 2 – BERMUDA SOLO",
          mode: "SOLO",
          map: "Bermuda",
          max: 48,
          defaultRegistered: 21,
          googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-02-PLACEHOLDER/viewform",
        }
      ]
    },
    {
      id: "map-02",
      number: "02",
      name: "PURGATORY",
      subtitle: "Highland River Canyon",
      terrain: "Rural Highlands & River Bridges",
      description: "A sprawling rural landscape divided by a massive river gorge. Precision bridge-crossing maneuvers and mountain rotations dictate late-game survival.",
      hotspots: ["Central", "Marble Pop", "Ski Lodge", "Moathouse"],
      image: "/assets/maps/purgatory.jpg",
      status: "COMING_SOON",
      isPlayable: false,
      max: 48,
      defaultRegistered: 0,
      googleFormUrl: null,
    },
    {
      id: "map-03",
      number: "03",
      name: "KALAHARI",
      subtitle: "Arid Canyon Desert",
      terrain: "High Vertical Sandstone & Submarine",
      description: "A rugged arid wasteland renowned for extreme verticality, elevated scaffolding structures, and natural canyon shootouts under the scorching desert sun.",
      hotspots: ["Refinery", "Command Post", "Santa Catarina", "Ruins"],
      image: "/assets/maps/kalahari.jpg",
      status: "COMING_SOON",
      isPlayable: false,
      max: 48,
      defaultRegistered: 0,
      googleFormUrl: null,
    },
    {
      id: "map-04",
      number: "04",
      name: "ALPINE",
      subtitle: "Snowy Mountain Ridge",
      terrain: "Sub-Zero Mountain Valley",
      description: "A scenic snow-kissed alpine valley with tight industrial settlements, snow-covered forestry, and tactical cliff ridges designed for adaptable combat.",
      hotspots: ["Snowfall", "Military Zinc", "Blue Ville", "Fusion"],
      image: "/assets/maps/alpine.jpg",
      status: "COMING_SOON",
      isPlayable: false,
      max: 48,
      defaultRegistered: 0,
      googleFormUrl: null,
    },
    {
      id: "map-05",
      number: "05",
      name: "NEX TERRA",
      subtitle: "Sci-Fi Anti-Gravity City",
      terrain: "Futuristic Urban & Zero-G Zones",
      description: "A futuristic sci-fi battleground featuring high-tech architectural sectors, dynamic moving platforms, and revolutionary zero-gravity combat zones.",
      hotspots: ["Grav Labs", "Intellect City", "Museum", "Plaza"],
      image: "/assets/maps/nexterra.jpg",
      status: "COMING_SOON",
      isPlayable: false,
      max: 48,
      defaultRegistered: 0,
      googleFormUrl: null,
    },
    {
      id: "map-06",
      number: "06",
      name: "SOLARA",
      subtitle: "Magnetic Slide Track Port",
      terrain: "Light-Futuristic Coastal Port",
      description: "A modern coastal port metropolis equipped with a full-map high-speed magnetic slide track system for rapid rotations and high-mobility vertical duels.",
      hotspots: ["TV Tower", "Bloomtown", "Quantum City", "The Hub"],
      image: "/assets/maps/solara.jpg",
      status: "COMING_SOON",
      isPlayable: false,
      max: 48,
      defaultRegistered: 0,
      googleFormUrl: null,
    }
  ],

  // Official Tournament Rules - Two Separate Matches (48 Players each = 96 Unique Players)
  rules: [
    {
      id: 1,
      title: "Individual Solo Player Mode",
      desc: "Both matches are individual Solo Player battle royale matches. Teaming, sharing accounts, or coordinated play is strictly forbidden."
    },
    {
      id: 2,
      title: "Bermuda Sole Active Battlefield",
      desc: "Bermuda is the only currently available and playable map. The other five maps are coming soon in future rotation stages."
    },
    {
      id: 3,
      title: "48 Players Per Match Capacity",
      desc: "Each match accommodates a strict maximum of 48 players. Match 1 and Match 2 each host an independent 48-player custom room lobby."
    },
    {
      id: 4,
      title: "Independent Registration Limits",
      desc: "Match 1 and Match 2 have separate registration limits and live counts. Each match closes independently as soon as its 48 slots fill up."
    },
    {
      id: 5,
      title: "Single Match Entry Policy",
      desc: "A player can participate in only ONE match. A player registered for Match 1 cannot register for Match 2 under any circumstance."
    },
    {
      id: 6,
      title: "Duplicate Free Fire UID Prohibited",
      desc: "Duplicate Free Fire MAX UID submissions across Match 1 and Match 2 are prohibited. Shared validation automatically rejects duplicate entries."
    },
    {
      id: 7,
      title: "Total 96 Unique Players Limit",
      desc: "The tournament accommodates exactly 96 unique players total (48 in Match 1 + 48 different players in Match 2). No repeated UIDs allowed."
    },
    {
      id: 8,
      title: "Automatic Match Closure at 48",
      desc: "Registration automatically closes for an individual match when its 48 valid unique slots are filled, locking the form."
    },
    {
      id: 9,
      title: "Remaining Maps Coming Soon",
      desc: "Purgatory, Kalahari, Alpine, NeXTerra, and Solara are coming soon. Follow official host channels for upcoming map announcements."
    }
  ],

  // Footer & Legal Notes
  footer: {
    disclaimer: "This is an independent community esports tournament organized by FFM Mukesh with technical partnership from RC Innovations. Free Fire MAX is a registered trademark of Garena International. All game images and trademarks belong to their respective owners.",
    copyrightYear: 2026
  }
};
