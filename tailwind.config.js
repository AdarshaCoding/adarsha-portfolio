/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add your custom font
        lato: ["Lato", "sans-serif"],
        syne: ["Syne"],
        inter: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "underline-animation": "underlineEffect 1s ease-in-out forwards",
      },
      keyframes: {
        underlineEffect: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  safelist: [
    "decoration-offset-2",
    "decoration-offset-4",
    "decoration-offset-6",
  ],
};
