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
      color: {
        lightModePrimaryBlue: "var(--light-mode-primary-blue)",
        lightModeGray: "var(--light-mode-gray)",
        lightModeSecondaryBlue: "var(--light-mode-secondary-blue)",
        lightModeBlack: "var(--light-mode-black)",
        lightModeWhite: "var(--light-mode-white)",
        lightModeWhitest: "var(--light-mode-whitest)",
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
