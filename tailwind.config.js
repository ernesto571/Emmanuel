
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        md: "700px"
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
      },

      colors: {
        bg: "var(--bg)",
        soft: "var(--soft)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        line: "var(--line)",
        tint: "var(--tint)",
        acc: "#F2B97A",
      },
    },
  },

  plugins: [],
};
