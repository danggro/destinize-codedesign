/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "ui-sans-serif", "ui-system"],
      manrope: ["Manrope", "ui-manrope"],
      montserrat: ["Montserrat", "ui-montserrat"],
    },
    extend: {
      colors: {
        black: {
          50: "#F4F5F7",
          100: "#EEEFF4",
          200: "#D9DBE1",
          300: "#969BAB",
          400: "#474A57",
          500: "#18191F",
        },
        primary: "#4475F2",
      },
      fontSize: {
        "7xl": ["76px", "89px"],
      },
    },
  },
  plugins: [],
};
