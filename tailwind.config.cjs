/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sandstone: "#f3eee1",
        slate: "#0f172a",
        accent: "#d97706",
        clay: "#c2b59b",
        moss: "#4d7c0f",
        sky: "#60a5fa",
        precambrian: { DEFAULT: "#7c3aed", light: "#ede9fe", dark: "#5b21b6" },
        paleozoic: { DEFAULT: "#059669", light: "#d1fae5", dark: "#047857" },
        mesozoic: { DEFAULT: "#d97706", light: "#fef3c7", dark: "#b45309" },
        cenozoic: { DEFAULT: "#e11d48", light: "#ffe4e6", dark: "#be123c" }
      },
      fontFamily: {
        heading: ["'DM Sans'", "Inter", "system-ui", "sans-serif"],
        body: ["'Source Sans Pro'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 12px 30px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 50px rgba(15, 23, 42, 0.12)",
        glow: "0 0 40px rgba(217, 119, 6, 0.15)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
