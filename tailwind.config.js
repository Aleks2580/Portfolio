/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        "primary-white": "#F5F5F5",
        secondary: "#aaa6c3",
        "secondary-light-theme": "#9188b6",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        cardLightTheme: "0px 10px 10px -10px #211e30",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
        "hero-pattern-white": "url('/src/assets/hero-light.svg')",
      },
    },
  },
  plugins: [],
};
