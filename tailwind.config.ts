import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#100d0a",
        ash: "#f6ead2",
        parchment: "#d9ba7c",
        saffron: "#f1a72f",
        copper: "#c46c32",
        sindoor: "#7d1e1c",
        peacock: "#123b46",
      },
      fontFamily: {
        devanagari: ["var(--font-devanagari)", "Noto Serif Devanagari", "serif"],
        display: ["var(--font-display)", "Tiro Devanagari Hindi", "serif"],
        latin: ["var(--font-latin)", "Anek Latin", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(241, 167, 47, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
