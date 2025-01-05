/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["black"]
  },
  plugins: [
    require('daisyui')
  ],
}

