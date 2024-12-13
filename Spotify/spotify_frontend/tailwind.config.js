const { color } = require("@cloudinary/url-gen/qualifiers/background");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "button-green":"rgb(59,228,119)",
        "navbar-black":"#121212",
        "search-bar": "#2A2A2A",
        "premium-individual-card": "#FFE5E8",
        "premium-mini-card": "#EEFCCB",
        "premium-family-card": "#A5BBD1",
        "premium-duo-card": "#FFC862",
        "premium-student-card": "#CEBFDC"
      },
      colors:{
        "premium-individual-card": "#FFE5E8",
        "premium-mini-card": "#EEFCCB",
        "premium-family-card": "#A5BBD1",
        "premium-duo-card": "#FFC862",
        "premium-student-card": "#CEBFDC"
      },
      fontFamily:{
        "poppins":["Poppins","sans-serif"],
      },
      height:{
        "1/10": "10%",
        "9/10": "90%",
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
