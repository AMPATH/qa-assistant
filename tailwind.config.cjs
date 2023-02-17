/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#EEEDED',
        searchColor: '#F6F4F4',
        buttonColor: '#487EBO',
        tableHeader: '#D9D9D9'
      }
    },
  },
  plugins: [],
}
