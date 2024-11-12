/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#232A3C',
        medium: '#293245',
      },
    },
  },
  plugins: [],
};
