import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#007aff',
        'success': '##34c759',
        'danger': '##FF3B30',
        'warning': '#ff9500',
        'white': {
          DEFAULT: '#ffffff',
          'secondary': '#f2f2f7',
        },
        'gray ': '#aeaeb2',
        'black' :'#333333',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}