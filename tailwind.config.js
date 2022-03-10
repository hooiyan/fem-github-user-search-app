/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Space Mono", "sans-serif"],
    },
    extend: {
      colors: {
        lightModePrimaryBlue: "var(--light-mode-primary-blue)",
        lightModeSecondaryBlue: "var(--light-mode-secondary-blue)",
        lightModeDarkGray: "var(--light-mode-dark-gray)",
        lightModeLightGray: "var(--light-mode-light-gray)",
        lightModeWhite: "var(--light-mode-white)",
        lightModeWhitest: "var(--light-mode-whitest)",
        lightModeBlack: "var(--light-mode-black)",
        darkModePrimaryBlue: "var(--dark-mode-primary-blue)",
        darkModeWhite: "var(--dark-mode-white)",
        darkModeBlack: "var(--dark-mode-black)",
        darkModeDarkBlue: "var(--dark-mode-dark-blue)",
        myRed: "var(--red)",
        myPrimaryBlueLighten: "var(--primary-blue-lighten)",
      }
    },
  },
  plugins: [],
}
