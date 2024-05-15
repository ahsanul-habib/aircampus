/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#1F242D',
        secondary: '#323946',
        accent: '#07EEFF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

