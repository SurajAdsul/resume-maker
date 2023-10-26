/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'regal-blue': '#4685c6',
      },
    },
  },
  plugins: [],
}