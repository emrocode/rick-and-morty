/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-300": "#1F1F1F",
        "black-200": "#333333",
        "black-100": "#474747",
        "white-300": "#C2C2C2",
        "white-200": "#EBEBEB",
        "white-100": "#FEFEFE",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))",
    },
  },
};
