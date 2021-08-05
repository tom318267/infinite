module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      alatsi: ["Alatsi", "sans-serif"],
      cuprum: ["Cuprum", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      purple: "#3D1472",
      light_purple: "#868FE1",
      lighter_purple: "#f4ecff",
    }),
    extend: {
      backgroundImage: (theme) => ({
        infinite: "url('./assets/infinite.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
