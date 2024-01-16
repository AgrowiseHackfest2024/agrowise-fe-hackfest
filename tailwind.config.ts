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
        primary: "#20791F",
        secondary: "#D5E8D0",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-dm)"],
        dm: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
