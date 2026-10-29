import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zywo: {
          navy: "#0f172a",
          dark: "#141c2e",
          slate: "#334155",
          body: "#475569",
          muted: "#64748b",
          light: "#f8fafc",
          soft: "#f1f5f9",
          periwinkle: "#8ea6d6",
          periwinkleLight: "#e8ecf8",
          powder: "#c7ddfc",
          powderLight: "#f0f6ff",
          lavender: "#b8a8d6",
          lavenderLight: "#f5f3fa",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        editorial: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.08em",
        wider: "0.15em",
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
