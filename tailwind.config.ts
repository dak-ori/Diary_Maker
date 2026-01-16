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
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "#FDFBF7",
        ink: "#2C3E50",
        highlight: "rgba(241, 196, 15, 0.3)",
        brand: {
          50: '#fdfbf7',
          100: '#fcf7ec',
          200: '#f8ecd5',
          300: '#f2dbb3',
          400: '#ebc488',
          500: '#e3a85f', // Main brand color (warm brownish orange)
          600: '#d68a44',
          700: '#b26636',
          800: '#905131',
          900: '#75432a',
        }
      },
      fontFamily: {
        hand: ["var(--font-patrick-hand)", "cursive"],
        pen: ["var(--font-nanum-pen)", "cursive"],
        gamja: ["var(--font-gamja-flower)", "cursive"],
        body: ["var(--font-gowun-dodum)", "sans-serif"],
        sans: ["var(--font-gowun-dodum)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;
