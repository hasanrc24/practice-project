/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-left-gradient": "#af5e98",
        "bg-right-gradient": "#5948f0",
      },
    },
  },
  plugins: [],
};
