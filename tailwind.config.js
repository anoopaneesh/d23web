/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // "#02D7F2"
      colors: {
        primary: "#f05",
        secondary: "#0af",
        background: "#102",
        foreground: "#dadada",
        heading: "var(--heading)",
        transparent_black: "#000a",
        c_red: "#FD0130",
        c_yellow: "#FFEE08",
      },
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
