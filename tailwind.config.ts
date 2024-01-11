import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
        dm: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
}
export default config
