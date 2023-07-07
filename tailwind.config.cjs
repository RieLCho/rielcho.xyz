/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'maple-light': ["Maplestory Light"],
        'maple-bold': ["Maplestory Bold"],
      }
    },
  },
  plugins: [],
}