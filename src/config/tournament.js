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

  // Key Tournament Metrics
  stats: {
    totalMaps: 6,
    playersPerMap: 48,
    totalPlayers: 288,
    winnerPrizePerMap: 1000, // in INR (₹)
    totalPrizePool: 6000, // 6 maps x ₹1,000
    format: "Solo Battle Royale",
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
  // Each map connects to its dedicated Google Form URL.
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
      // Google Form URL for Map 01
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP01-BERMUDA-PLACEHOLDER/viewform",
      defaultRegistered: 32,
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
      // Google Form URL for Map 02
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP02-PURGATORY-PLACEHOLDER/viewform",
      defaultRegistered: 28,
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
      // Google Form URL for Map 03
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP03-KALAHARI-PLACEHOLDER/viewform",
      defaultRegistered: 41,
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
      // Google Form URL for Map 04
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP04-ALPINE-PLACEHOLDER/viewform",
      defaultRegistered: 48,
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
      // Google Form URL for Map 05
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP05-NEXTERRA-PLACEHOLDER/viewform",
      defaultRegistered: 19,
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
      // Google Form URL for Map 06
      googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-MAP06-SOLARA-PLACEHOLDER/viewform",
      defaultRegistered: 12,
    }
  ],

  // Official Tournament Rules (No payment references)
  rules: [
    {
      id: 1,
      title: "Map Slot Capacity",
      desc: "Maximum 48 players per map. Once 48 valid registrations are accepted in Google Forms, the map automatically locks as FULL."
    },
    {
      id: 2,
      title: "Single Map Registration",
      desc: "Each player is permitted to register for only ONE map. Cross-map duplicate submissions will invalidate all entries."
    },
    {
      id: 3,
      title: "No Duplicate Free Fire UIDs",
      desc: "Duplicate Free Fire UID entries across one or multiple registration forms are strictly prohibited and result in immediate disqualification."
    },
    {
      id: 4,
      title: "Accurate In-Game UID & Name",
      desc: "Players must submit their exact Free Fire MAX UID and player tag in the Google Form to receive custom room invitations."
    },
    {
      id: 5,
      title: "Room ID & Password Delivery",
      desc: "Custom match room credentials will be delivered exclusively to verified participants prior to match time via registered contact details."
    },
    {
      id: 6,
      title: "Match Timing & Punctuality",
      desc: "Custom lobbies open 15 minutes before match start. Matches will begin promptly as scheduled; late arrivals cannot be accommodated."
    },
    {
      id: 7,
      title: "Zero-Tolerance Anti-Cheat",
      desc: "Use of modified APKs, third-party scripts, aimbots, or unsportsmanlike teaming in solo lobbies results in instant ban and disqualification."
    },
    {
      id: 8,
      title: "Organizer Decision Authority",
      desc: "Tournament organizers reserve the final authority regarding rule enforcement, slot confirmations, and participant eligibility."
    }
  ],

  // Footer & Legal Notes
  footer: {
    disclaimer: "This is an independent community esports tournament organized by FFM Mukesh with technical partnership from RC Innovations. Free Fire MAX is a registered trademark of Garena International. All game images and trademarks belong to their respective owners.",
    copyrightYear: 2026
  }
};
