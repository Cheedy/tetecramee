/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'primary': '#000000',
        'secondary': '#FFA500',
      },
    },
  },
  plugins: [],
}