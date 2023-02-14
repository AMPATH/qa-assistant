/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#84EAF8',
        searchColor: '#F6F4F4',
      }
    },
  },
  plugins: [],
}
