/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#13131A',
        'gray-800': '#16161F',
        'gray-700': '#1C1C27',
        'gray-600': '#22222F',
        'gray-500': '#3B3B54',
        'gray-400': '#7F7F98',
        'gray-300': '#ABABC4',
        'gray-200': '#BFBFD4',
        'gray-100': '#FAFAFA',
        'white': '#FFFFFF',
        'blue-light': "#8FB2F5"
      },
      fontSize: {
        lg: '1.25rem'
      }
    },
  },
  plugins: [],
}

