/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}", "./src/components/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors : {
        "background-color": "#F3F7F0",
        "primary-color": "#790216",
        "primary-color-highlight": "#A4031F",
        "primary-color-hover": "#FEEBEE",
        "background-color-dark": "#19323C"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
