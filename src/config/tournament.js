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
  
  // Promotional Poster (Home Hero Poster)
  poster: {
    src: "/assets/promotion/home.jpeg",
    alt: "Free Fire MAX Tournament Official Promotion Poster - FFM Mukesh",
    downloadName: "FFM-FreeFireMAX-Tournament-Poster.jpeg"
  },

  // Official Campaign Poster (Promotional Poster Section)
  campaignPoster: {
    src: "/assets/promotion/last.jpeg",
    alt: "Free Fire MAX Tournament Official Campaign Poster - FFM Mukesh",
    downloadName: "FFM-FreeFireMAX-Campaign-Poster.jpeg"
  },

  // Esports Command Center Poster
  commandCenterPoster: {
    src: "/assets/promotion/last.jpeg",
    alt: "Free Fire MAX Esports Command Center Official Banner - FFM Mukesh",
    downloadName: "FFM-Esports-Command-Center-Banner.jpeg"
  },

  // Key Tournament Metrics - Single Registration Pool (96 Total Slots)
  stats: {
    totalMaps: 6,
    availableMaps: 1, // Only Bermuda is active
    totalMatches: 2,  // Two matches divided by organizer after 96 registrations
    totalRegistrationPool: 96, // Single pool of 96 players
    totalCapacity: 96, // Total tournament capacity: 96 unique players
    totalPlayers: 96,
    defaultRegistered: 55, // Live registration count
    playersPerMatch: 48, // 48 players per match post-division
    match1Capacity: 48,
    match2Capacity: 48,
    match1Prize: 1000, // ₹1,000 for Match 1 Winner
    match2Prize: 1000, // ₹1,000 for Match 2 Winner
    winnerPrizePerMatch: 1000, // ₹1,000 per match champion
    winnerPrizePerMap: 1000,
    totalWinners: 2, // 1 winner per match = 2 winners total
    totalPrizePool: 2000, // Total Tournament Prize Pool ₹2,000
    format: "Solo Battle Royale",
    currentMap: "Bermuda",
    lobbyType: "Custom Room Lobby",
  },

  // Tournament Schedule / Countdown Target Date
  schedule: {
    targetDate: "2026-11-09T20:00:00+05:30", // Tournament: Monday 8:00 PM IST
    day: "MONDAY",
    time: "8:00 PM IST",
    displaySchedule: "MONDAY • 8:00 PM IST",
    fallbackMessage: "TOURNAMENT: MONDAY 8:00 PM IST",
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
  // Only BERMUDA is OPEN with a Single 96-Player Registration Pool.
  // After registration closes, the organizer divides the 96 players into Match 1 & Match 2 (48 players each).
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
      max: 96, // Single registration pool of 96 players
      defaultRegistered: 55, // Live registration count
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdbiU8lWiPD2eG4LUNXNtph6YyGaxfdDMfTfA-FxvMV48TkvQ/viewform?usp=publish-editor",
      matchDivision: [
        {
          id: "match-01",
          number: 1,
          name: "MATCH 1",
          title: "MATCH 1 – BERMUDA SOLO",
          mode: "SOLO",
          map: "Bermuda",
          players: 48,
          prize: 1000,
        },
        {
          id: "match-02",
          number: 2,
          name: "MATCH 2",
          title: "MATCH 2 – BERMUDA SOLO",
          mode: "SOLO",
          map: "Bermuda",
          players: 48,
          prize: 1000,
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

  // Official Tournament Rules - Exactly 8 Rules & Regulations
  rules: [
    {
      id: 1,
      title: "Solo Player Mode",
      desc: "Only individual Solo Battle Royale gameplay is allowed. Teaming or cooperating with other players is strictly prohibited."
    },
    {
      id: 2,
      title: "Official Map",
      desc: "Bermuda is the only currently available map. Other maps will be announced in future updates."
    },
    {
      id: 3,
      title: "Tournament Structure",
      desc: "A total of 96 players will register for one tournament. After registration closes, the organizer will divide them into two separate matches of 48 players each."
    },
    {
      id: 4,
      title: "Registration",
      desc: "Each player can register only once. Duplicate Free Fire MAX UIDs are not allowed."
    },
    {
      id: 5,
      title: "Fair Play",
      desc: "Hacks, cheats, scripts, modified clients, and unfair gameplay methods are strictly prohibited."
    },
    {
      id: 6,
      title: "Account Verification",
      desc: "Players must use their own accounts and provide accurate registration details. Account sharing and impersonation are prohibited."
    },
    {
      id: 7,
      title: "Match Participation",
      desc: "Players must follow official announcements for their assigned match, schedule, room ID, and password."
    },
    {
      id: 8,
      title: "Disqualification",
      desc: "Any violation of tournament rules may result in disqualification. The organizer's decision will be final."
    }
  ],

  // Footer & Legal Notes
  footer: {
    disclaimer: "This is an independent community esports tournament organized by FFM Mukesh with technical partnership from RC Innovations. Free Fire MAX is a registered trademark of Garena International. All game images and trademarks belong to their respective owners.",
    copyrightYear: 2026
  }
};
