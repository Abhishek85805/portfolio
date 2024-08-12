/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'min': '0px', 'max':'600px'},
      'lg': {'min': '600px', 'max': '700px'}
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}