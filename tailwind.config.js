/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [
    require('daisyui')
  ],
}

