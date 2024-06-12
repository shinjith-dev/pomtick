import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      base: "hsl(var(--color-base) / <alpha-value>)",
      surface: "hsl(var(--color-surface) / <alpha-value>)",
      overlay: "hsl(var(--color-overlay) / <alpha-value>)",
      muted: "hsl(var(--color-muted) / <alpha-value>)",
      subtle: "hsl(var(--color-subtle) / <alpha-value>)",
      text: "hsl(var(--color-text) / <alpha-value>)",
      love: "hsl(var(--color-love) / <alpha-value>)",
      gold: "hsl(var(--color-gold) / <alpha-value>)",
      rose: "hsl(var(--color-rose) / <alpha-value>)",
      pine: "hsl(var(--color-pine) / <alpha-value>)",
      foam: "hsl(var(--color-foam) / <alpha-value>)",
      iris: "hsl(var(--color-iris) / <alpha-value>)",
      "highlight-low": "hsl(var(--color-highlight-low) / <alpha-value>)",
      "highlight-med": "hsl(var(--color-highlight-med) / <alpha-value>)",
      "highlight-high": "hsl(var(--color-highlight-high) / <alpha-value>)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
