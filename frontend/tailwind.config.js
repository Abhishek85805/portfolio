/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'min': '0px', 'max':'720px'}
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}