/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FFFFFF",
        secondaryLight:"#F1C9A8",
        secondary:"#eaaa85",
        tertiary:"#616161",
        divBg:"#F4F5F9"
      },
      fontFamily:{
        nunito:["Nunito Sans", "sans-serif"],
        raleway:["Raleway", "sans-serif"],
        greatvibes:["Great Vibes", "cursive"]

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}