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
        cream: "#FDF6EF",
        coral: "#F4714E",
        ink: "#1A1A1A",
        palta: "#7BA05B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        stamp: "6px 6px 0 0 #1A1A1A",
        "stamp-sm": "3px 3px 0 0 #1A1A1A",
      },
    },
  },
  plugins: [],
};

export default config;
