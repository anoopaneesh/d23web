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
        heading:"#FCEE09",
        transparent_black:"#000a"
      },
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}
