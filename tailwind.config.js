/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router sayfaları
    "./pages/**/*.{js,ts,jsx,tsx}",     // Eğer pages dizini varsa
    "./components/**/*.{js,ts,jsx,tsx}" // Componentler
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}