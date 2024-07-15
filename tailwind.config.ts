import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#B982FF",
        secondary: "#898CA9",
        black: "#1A1B23",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        syne: "var(--font-syne)",
      },
    },
    maxWidth: {
      "6xl": "1228px",
    },
    // background: linear-gradient(225deg, #BA9DF7 14.89%, #933FFE 85.85%);
  },
  plugins: [],
};
export default config;
