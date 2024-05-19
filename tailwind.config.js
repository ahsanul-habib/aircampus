/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#1F242D',
        secondary: '#323946',
        accent: '#1f6a9b'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

