/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          100: '#dbeafe',   // light blue
          400: '#60a5fa',   // medium blue
          700: '#1d4ed8',   // dark blue
          900: '#1e3a8a', 
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary-100',
    'text-primary-700',
    'dark:bg-primary-900/30',
    'dark:text-primary-400',
  ],
}