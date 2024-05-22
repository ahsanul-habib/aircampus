/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        accent2: '#2C8BB9',
        accent: '#1f6a9b',
        background: '#E8EEF3'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

