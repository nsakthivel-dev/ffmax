# Free Fire MAX Tournament – Promotional Website

An esports promotional portal for the **Free Fire MAX Tournament**, hosted by **FFM Mukesh** with Technical Partner **RC Innovations**.

---

## 🎮 Tournament Highlights & Structure

- **Organizers:** FFM Mukesh × RC Innovations
- **Game Mode:** SOLO Battle Royale
- **Active Battlefield:** **BERMUDA** (Only playable map)
- **Upcoming Maps (Coming Soon):** Purgatory, Kalahari, Alpine, NeXTerra, Solara
- **Tournament Structure:** **TWO SEPARATE SOLO MATCHES**
  - **Match 1:** 48 Players (Bermuda Solo)
  - **Match 2:** 48 Players (Bermuda Solo)
- **Total Tournament Capacity:** **96 Unique Players** (48 + 48)
- **Strict No-Repeat Policy:** A player who registers for Match 1 cannot register for Match 2. Free Fire MAX UID must be unique across both matches.
- **Champion Prize:** ₹1,000 per match champion (₹6,000 series prize pool)
- **Registration Method:** Separate Google Forms for Match 1 and Match 2 with shared cross-match UID deduplication
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

1. **Match Google Form Links (`maps[0].matches[i].googleFormUrl`)**:
   - Match 1: `https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-01-PLACEHOLDER/viewform`
   - Match 2: `https://docs.google.com/forms/d/e/1FAIpQLSc-BERMUDA-MATCH-02-PLACEHOLDER/viewform`
2. **YouTuber Channels (`host.channelUrl` & `host.discordUrl`)**:
   - YouTube: `https://www.youtube.com/@FFM__MUKESH`
   - Discord: `https://discord.com/invite/aK3d4pDNjZ`
3. **Tournament Target Date (`schedule.targetDate`)**:
   Set an ISO 8601 date string (e.g. `'2026-11-20T18:00:00+05:30'`).
4. **Live Slot Status API (`api.statusEndpoint`)**:
   Connect your Google Apps Script Web App URL (`google-apps-script/Code.gs`). If omitted, fallback defaults are displayed gracefully.

---

## 🛡️ Google Apps Script Deduplication Engine (`google-apps-script/Code.gs`)

The included Apps Script (`google-apps-script/Code.gs`) handles:
- **LockService Concurrency**: Prevents race conditions during simultaneous registrations.
- **Cross-Match UID Validation**: Verifies that UIDs in Match 1 do not exist in Match 2 (and vice-versa).
- **Auto-Closure at 48 Players**: Automatically locks the Google Form once 48 valid players are registered for that match.
- **Live JSON Endpoint (`doGet`)**: Provides live slot telemetry to the tournament frontend.

---

## 🌟 Official Links

- **Host YouTube (FFM Mukesh):** [https://www.youtube.com/@FFM__MUKESH](https://www.youtube.com/@FFM__MUKESH)
- **Host Discord (FFM Mukesh):** [https://discord.com/invite/aK3d4pDNjZ](https://discord.com/invite/aK3d4pDNjZ)
- **Technical Partner (RC Innovations):** [https://reegan-portfolio-mjq2hvtih-rc-innovation.vercel.app/](https://reegan-portfolio-mjq2hvtih-rc-innovation.vercel.app/)
