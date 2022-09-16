/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black-300": "#000000",
        "black-200": "#1F1F1F",
        "black-100": "#3D3D3D",
        "white-300": "#C2C2C2",
        "white-200": "#EBEBEB",
        "white-100": "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))",
    },
  },
  plugins: [],
};
