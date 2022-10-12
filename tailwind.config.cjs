/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      lx: 24,
      '2xl': 32,
    },

    colors: {
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        400: '#7C7C8A',
        800: '#202024',
        900: '#121214',
      },

      cyan: {
        300: '#9BE1FB',
        500: '#81D8F7',
      },

      'transparent': 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
