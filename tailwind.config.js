/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 200s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
      boxShadow: {
        'inner-left-right': 'inset -8px 0 8px -8px rgba(0, 0, 0, 0.3), inset 8px 0 8px -8px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Satoshi' ,'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}

