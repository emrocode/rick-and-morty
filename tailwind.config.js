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
        "black-300": "#2E2E2E",
        "black-200": "#5F5F5F",
        "black-100": "#696969",
        "white-300": "#E2E2E2",
        "white-200": "#F5F5F5",
        "white-100": "#FFFFFF",
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    fontFamily: {
      'sans': ['"Open Sans"', '"Segoe UI"', '"Ubuntu"','-apple-system', 'system-ui', 'sans-serif']
    }
  },
  plugins: [],
}
