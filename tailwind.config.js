/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'title-color': '#121f38',
        'body-color': '#555555',
        'Brown': '#9a563a',
        'input-Bg': '#f5e4d9',
        'primary': '#A3A2A2',
        'secondry': '#BEBEBE',
        'dark-gray': '#1D2429',
        'light-gray': '#232B31',
      },
    },
  },
  plugins: [],
};
