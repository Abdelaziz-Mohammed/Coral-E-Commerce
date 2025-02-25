/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1E2832',
        primaryBg: '#f4f4f5',
      },
      fontFamily: {
        primaryFont: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
