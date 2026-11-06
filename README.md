# Free Fire MAX Tournament – Promotional Website

An esports promotional portal for the **Free Fire MAX Tournament**, hosted by **FFM Mukesh** with Technical Partner **RC Innovations**.

---

## 🎮 Tournament Highlights & Configuration

- **Organizers:** FFM Mukesh × RC Innovations
- **Total Maps:** 6 (Bermuda, Purgatory, Kalahari, Alpine, Nex Terra, Solara)
- **Lobby Size:** 48 Players per Map (288 Total Competitors)
- **Winner Prize:** ₹1,000 per map (₹6,000 Total Prize Pool)
- **Registration Method:** 6 Dedicated Google Forms (one per map)
- **Map Navigation:** Horizontal interactive map card carousel with full-screen tactical details modal
- **Official Host Channels:** YouTube (`@FFM__MUKESH`) and Discord (`discord.com/invite/aK3d4pDNjZ`)

---

## 🚀 Quick Start Guide

### 1. Development Server
```bash
npm install
npm run dev
```

### 2. Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ Centralized Configuration (`src/config/tournament.js`)

All configurable links and settings are managed in `src/config/tournament.js`:

1. **Google Form Links (`maps[i].googleFormUrl`)**:
   Paste the 6 Google Form URLs into `src/config/tournament.js`.
2. **YouTuber Channels (`host.channelUrl` & `host.discordUrl`)**:
   - YouTube: `https://www.youtube.com/@FFM__MUKESH`
   - Discord: `https://discord.com/invite/aK3d4pDNjZ`
3. **Tournament Target Date (`schedule.targetDate`)**:
   Set an ISO 8601 date string (e.g. `'2026-11-20T18:00:00+05:30'`). If set to `null` or empty string, the UI will display:
   > *"TOURNAMENT DATE WILL BE ANNOUNCED."*
4. **Live Slot Status API (`api.statusEndpoint`)**:
   Connect your Google Apps Script Web App URL. If omitted, the UI displays:
   > *"REGISTRATION AVAILABILITY WILL BE UPDATED SOON."*

---

## 🌟 Official Links

- **Host YouTube (FFM Mukesh):** [https://www.youtube.com/@FFM__MUKESH](https://www.youtube.com/@FFM__MUKESH)
- **Host Discord (FFM Mukesh):** [https://discord.com/invite/aK3d4pDNjZ](https://discord.com/invite/aK3d4pDNjZ)
- **Technical Partner (RC Innovations):** [https://reegan-portfolio-mjq2hvtih-rc-innovation.vercel.app/](https://reegan-portfolio-mjq2hvtih-rc-innovation.vercel.app/)
