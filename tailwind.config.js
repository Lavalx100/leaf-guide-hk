/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f2fbf6",
          100: "#e6f7ee",
          200: "#c1ebd5",
          300: "#95ddb8",
          400: "#68cd9b",
          500: "#3dbf80",
          600: "#2e9b67",
          700: "#227450",
          800: "#164d36",
          900: "#0b2a1f"
        }
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
