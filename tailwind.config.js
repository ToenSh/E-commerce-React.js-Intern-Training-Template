/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        'dark-green': '#123026',
      },
      backgroundImage: {
        hero: 'url(../assets/hero-background.png)',
      },
    },
  },
  plugins: [],
};
