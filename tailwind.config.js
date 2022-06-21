/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fablab-bg': '#EAE5E5',
        'fablab-red': '#751A1B',
      },
    },
  },
  plugins: [],
}
