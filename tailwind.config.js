/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./navbar.html",
    "./pages/**/*.html",   // Esta linha é crucial para ler o javascript.html
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}