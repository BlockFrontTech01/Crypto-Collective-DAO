/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "rgba(255, 255, 255, 0.5)",
        gold: "#ffdd07",
        slategray: "#6d5e7b",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inknut-antiqua": "'Inknut Antiqua'",
        headlandone: "HeadlandOne",
        "gravitas-one": "'Gravitas One'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      mini: "15px",
      "11xl": "30px",
      base: "16px",
      mid: "17px",
      "4xs": "9px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
