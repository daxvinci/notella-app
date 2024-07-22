/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playful: ["Irish Grover", "sans-serif"],
        rest: ["Marmelad","sans-serif"],
      },
    },
  },
  plugins: [],
}

