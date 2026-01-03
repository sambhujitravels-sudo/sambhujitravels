/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366", // Deep Blue
        secondary: "#ffffff",
        accent: "#22c55e", // Green
      }
    },
  },
  plugins: [],
}
