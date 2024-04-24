/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#030410",
        deepskyblue: "#38b6ff",
        cornflowerblue: {
          "100": "#1f9ce6",
          "200": "#287ecc",
        },
        whitesmoke: "#f9f9f9",
        white: "#fff",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(224, 224, 224, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        outfit: "Outfit",
      },
      borderRadius: {
        "49xl": "68px",
        "29xl": "48px",
        "6xl": "25px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      sm: "14px",
      base: "16px",
      "3xl": "22px",
      "2xl": "21px",
      mid: "17px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      lg: "18px",
      "48xl": "67px",
      "35xl": "54px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
