/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surgu-main-color": "#2042b9",
        "surgu-main-color-hover": "#18328e",
      },
      transitionDelay: {
        "delay-100": "100ms",
      },
      transitionProperty: {
        dark: "background-color, border-color, text-decoration-color, fill, stroke",
      },
    },
  },
  plugins: [],
};
