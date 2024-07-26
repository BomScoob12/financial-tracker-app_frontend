/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFEAAD',
          green: '#028f76',
          red: '#d14334',
        },
        secondary: {
          'green-light': '#B3E099',
        },
        catagories: {
          food: 'yellow-400',
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

