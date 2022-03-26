module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      colors: {
        hitam: "#171717",
        gold: "#AF9967",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
      },
    },
  },
  plugins: [],
};
