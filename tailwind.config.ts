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
      keyframes: {
        scrollDown: {
          "0%": {
            transform: "translate3D(-50%,0,0) scale(1,1)",
            // display: "block",
            opacity: "1",
          },
          "70%": { transform: "translate3D(-50%,10px,0) scale(1,.5)" },
          "100%": {
            transform: "translate3D(-50%,10px,0) scale(1,.5)",
            // display: "none",
            opacity: "0",
          },
        },
      },
      animation: {
        scrollDown: "scrollDown 1s infinite cubic-bezier(0.25, 0.01, 1, 0.57)",
      },
    },
  },
  plugins: [],
};
export default config;
