const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', 'sans-serif'],
      rajdhani: ['"Rajdhani"', 'sans-serif'],
      sen: ['"Sen"', 'sans-serif']
    },
    colors: {
      ...colors,
      primary: '#0F1E79',
      secondary: '#D69F00'
    },
    extend: {}
  },
  plugins: []
}
