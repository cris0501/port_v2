/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

