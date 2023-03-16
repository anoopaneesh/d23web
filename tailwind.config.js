/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f05",
        secondary: "#0af",
        background: "#102",
        foreground: "#dadada",
        heading:"#02D7F2",
        transparent_black:"#000a",
        c_red:"#FD0130"
      },
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}
