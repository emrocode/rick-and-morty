/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base01" : "#2E2E2E",
        "base02" : "#5F5F5F",
        "base03" : "#696969",
        "base04" : "#E2E2E2",
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
    }
  },
  plugins: [],
}
