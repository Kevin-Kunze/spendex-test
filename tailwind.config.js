/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // blue-800
        secondary: '#FBBF24', // yellow-400
        accent: '#F472B6', // pink-400
        background: '#F9FAFB', // gray-100
        text: '#111827', // gray-900
      },
    },
  },
  plugins: [],
}
