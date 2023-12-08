/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: 'Karla, sans-serif', // Adds a new `font-main` class
      },
      fontWeight:{
        medium: '500',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        'main': '#219653',
        'main-button': '#6FCF97',
        'second-button': '#4F4F4F',
      },
    },
  },
  plugins: [],
}

