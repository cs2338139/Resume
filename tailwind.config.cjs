/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "4xl": { min: "1920px" },

      "2xl": { max: "1440px" },

      xl: { max: "1199.98px" },

      lg: { max: "991.98px" },

      md: { max: "767.98px" },

      sm: { max: "575.98px" },
    },
    extend: {},
  },
  plugins: [],
};
