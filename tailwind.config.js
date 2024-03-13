/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad4': '820px',
        'ipad11': '834px',
        'galaxy': '800px',
        'galaxy2': '884px',
        'microsoft2': '1114px',
        'max': '1448px',
      }
    },
  },
  plugins: [],
}

