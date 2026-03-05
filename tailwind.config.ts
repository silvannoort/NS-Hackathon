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
        // DUO / Rijksoverheid huisstijl kleuren
        duo: {
          navy: "#003082",
          blue: "#01689B",
          "blue-dark": "#154273",
          "blue-light": "#EEF5FB",
          yellow: "#F9C706",
          "yellow-dark": "#C19700",
          gray: "#696969",
          "gray-light": "#F3F3F3",
          "gray-border": "#B4B4B4",
          white: "#FFFFFF",
          text: "#1C1C1C",
          error: "#D52B1E",
          success: "#39870C",
        },
      },
      fontFamily: {
        // RO Sans is de Rijksoverheid font; valt terug op systeem sans-serif
        sans: [
          "RO Sans",
          "Source Sans Pro",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "duo-h1": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "duo-h2": ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        "duo-h3": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "duo-body": ["1rem", { lineHeight: "1.625rem" }],
      },
    },
  },
  plugins: [],
};

export default config;
