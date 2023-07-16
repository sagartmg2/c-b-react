/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E33E0',
        'secondary': '#FB2E86',
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      }

    },
  },
  plugins: [],
}

