/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F2FE53",
        "purple": "#271340",
        "orange": "#F7906D",
        "dark-red": "#F7906D",
        "border": "#D9D9D9",
        "light": "#667085",
        red: "#ff0000"
      },
      fontFamily: {
        'avenir': ['Avenir'],
        'spoof': ['Spoof']
      },
      screens: {
        'xs': "500px",
        lg: "1170px",
        'standard': '1435px',
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}
