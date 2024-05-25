
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      green: '#47D85F',
      black: '#111111',
      black2: '#222222',
      white: '#c2c2c2',
    },
    extend: {
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}