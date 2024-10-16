/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6D28D9",
          DEFAULT: "#09031f",
          dark: "#38197F",
        },
        secondary: {
          lightest: "#fff9f7",
          light: "#EC4899",
          DEFAULT: "#F71D25",
          dark: "#BE185D",
        },
        skin: {
          DEFAULT: "#fedee1",
        },
        green: {
          DEFAULT: "#2fa97c",
        },
        textClr: "#6B7385",
      },
    },
  },
  plugins: [],
};
