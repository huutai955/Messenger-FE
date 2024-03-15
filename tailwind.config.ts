import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'grey-c1': 'rgb(36,37,38)',
        'grey-c2': '#3A3B3C',
        'grey-c3': '#9A9CA0',
        'grey-c4': '#B0B3B8',
        'grey-c5': '#4e4e4e',
        'grey-c6': '#2F3031',
        'blue-c1': '#232E3B',
        'blue-c2': '#0084FF'
      },
    },
  },
  plugins: [],
};
export default config;
