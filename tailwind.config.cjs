/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sandstone: "#f3eee1", // light sediment
        slate: "#0f172a", // deep shale/ basalt
        accent: "#d97706", // warm iron-rich sandstone
        clay: "#c2b59b",
        moss: "#4d7c0f",
        sky: "#60a5fa"
      },
      fontFamily: {
        heading: ["'DM Sans'", "Inter", "system-ui", "sans-serif"],
        body: ["'Source Sans Pro'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
