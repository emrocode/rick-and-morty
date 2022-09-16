/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))",
    },
  },
};
