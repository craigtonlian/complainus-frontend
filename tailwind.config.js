/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito-Sans", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        nicepurple: "#b6ccfe",
        lilac: "#e9f0fe",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
