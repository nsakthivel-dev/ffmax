/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ff: {
          dark: '#0a0705',
          darker: '#060403',
          card: '#140e09',
          cardElevated: '#1f160e',
          cardBorder: '#352416',
          gold: {
            DEFAULT: '#f59e0b',
            light: '#fbbf24',
            lighter: '#fef08a',
            dark: '#b45309',
          },
          orange: {
            DEFAULT: '#ea580c',
            light: '#f97316',
            dark: '#9a3412',
          },
          cyan: {
            DEFAULT: '#06b6d4',
            light: '#38bdf8',
            dark: '#0891b2',
          },
          red: {
            DEFAULT: '#ef4444',
            dark: '#991b1b',
          },
          sand: {
            DEFAULT: '#c69255',
            light: '#e2ba86',
            dark: '#8c5e2e',
          }
        }
      },
      fontFamily: {
        teko: ['Teko', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        kalam: ['Kalam', 'cursive'],
        caveat: ['Caveat', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-gold': '0 0 30px -4px rgba(245, 158, 11, 0.5)',
        'neon-orange': '0 0 30px -4px rgba(234, 88, 12, 0.5)',
        'neon-cyan': '0 0 30px -4px rgba(6, 182, 212, 0.5)',
        'inner-gold': 'inset 0 0 25px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
