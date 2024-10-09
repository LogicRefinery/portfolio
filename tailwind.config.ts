import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-L2": "#DF7B07",
        "orange-L1": "#F5D039",
        "orange-L3": "#F0B920",
        "apple-black": "#1d1d1f",
        "apple-gray": "#86868B",
      },
    },
  },
  plugins: [],
};
export default config;
