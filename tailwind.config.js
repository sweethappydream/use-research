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
        "orange": "#F7906D"
      },
      fontFamily: {
        'avenir': ['Avenir'],
        'spoof': ['Spoof']
      }
    },
  },
  plugins: [],
}
