import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        duo: {
          navy: "#003082",
          blue: "#01689B",
          "blue-dark": "#154273",
          "blue-light": "#EEF5FB",
          yellow: "#F9C706",
          "yellow-dark": "#C19700",
          gray: "#555555", // darkened from #696969 for WCAG AA contrast
          "gray-light": "#F3F3F3",
          "gray-border": "#B4B4B4",
          white: "#FFFFFF",
          text: "#1C1C1C",
          error: "#D52B1E",
          success: "#39870C",
        },
      },
      fontFamily: {
        sans: [
          "RO Sans",
          "Source Sans Pro",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
