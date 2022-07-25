/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx,js}',
    './components/*.{ts,tsx,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans"]
      },
      colors: {
        "dark-mode-elements": "hsl(209, 23%, 22%)",
        "dark-mode-background": "hsl(207, 26%, 17%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-background": "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}
