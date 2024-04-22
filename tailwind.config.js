/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        lato: ["Lato", ...fontFamily.sans],
      },
      colors: {
        "bluish-purle": "#6B3CC9",
        "yuzu-jam": "#FFFFFF",
        "ice-ice-baby": "#6A44F2",
        "rich-blue": "#1CBDDD",
        "electric-indigo": "#52378C",
        "interstellar-blue": "#78BF91",
        "tricorn-black": "#2F2F2F",
        "acier-light": "#545A75",
        "acier-subtle": "#9C9991",
        "wizard-white": "#E2F2FE",
        "cuddyl-yarn": "#FFF8E0",
        "hornet-sting": "#FF0335",
        frog: "#5EB30B",
        "lite-green": "#4DCA79",
        "lite-blue": "#1CBDDD",
        orange: "#F28D35",
      },
      screens: {
        sm: "376px",
        md: "769px",
        lg: "1201px",
        xl: "1441px",
      },
    },
  },
  plugins: [],
};
