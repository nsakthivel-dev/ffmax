/**
 * CENTRALIZED THEME SYSTEM
 * Derived from the official Free Fire MAX cinematic artwork (opening.jpg)
 * Dominant palette: Desert Amber Gold, Sunset Flame, Deep Sandstone Obsidian, Tactical Cyan
 */

export const THEME = {
  background: {
    image: "/assets/backgrounds/opening.jpg",
    darkBase: "#0a0705",
    surface: "#140e09",
    surfaceElevated: "#1e150e",
    surfaceHighlight: "#2a1e14",
    overlayGradient: "linear-gradient(to bottom, rgba(10, 7, 5, 0.75), rgba(10, 7, 5, 0.92))",
  },
  colors: {
    // Primary Amber Gold (Kelly's tracksuit & Blazing Sun)
    primary: {
      DEFAULT: "#f59e0b",
      light: "#fbbf24",
      lighter: "#fef08a",
      dark: "#b45309",
      glow: "rgba(245, 158, 11, 0.45)",
    },
    // Fiery Secondary Orange (Canyon flame & explosions)
    secondary: {
      DEFAULT: "#ea580c",
      light: "#f97316",
      dark: "#9a3412",
      glow: "rgba(234, 88, 12, 0.4)",
    },
    // Tactical Combat Cyan (Sky horizons & Tech partner)
    cyan: {
      DEFAULT: "#06b6d4",
      light: "#38bdf8",
      dark: "#0891b2",
      glow: "rgba(6, 182, 212, 0.4)",
    },
    // Crimson Alert (Hot zones & Full capacity)
    crimson: {
      DEFAULT: "#ef4444",
      light: "#f87171",
      dark: "#991b1b",
    },
    // Open Status Emerald
    emerald: {
      DEFAULT: "#10b981",
      light: "#34d399",
      dark: "#047857",
    },
    // Typography
    text: {
      primary: "#ffffff",
      heading: "#fef3c7",
      body: "#e2e8f0",
      muted: "#a8a29e",
      highlight: "#fbbf24",
    },
    // Borders
    border: {
      subtle: "rgba(245, 158, 11, 0.18)",
      medium: "rgba(245, 158, 11, 0.35)",
      bright: "rgba(251, 191, 36, 0.7)",
    }
  },
  fonts: {
    heading: "'Teko', 'Oxanium', 'Rajdhani', sans-serif",
    tech: "'Rajdhani', sans-serif",
    body: "'Inter', sans-serif",
  }
};

