import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        glow: "rgb(var(--glow) / <alpha-value>)"
      },
      boxShadow: {
        glass: "0 24px 80px rgb(15 23 42 / 0.18)",
        neon: "0 0 42px rgb(42 166 255 / 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgb(var(--line) / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.18) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
