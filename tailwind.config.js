/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#000080', // Adjust this hex code to match the exact shade of navy you want
        },
      },
    },
  },
  plugins: [],
}