/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        'surface-base': '#FAF8FF',
        'surface-secondary': '#F5F3FF',
        'dark-text': '#0F172A',
        'border-subtle': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Geist', 'monospace'],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(15, 23, 42, 0.05)',
        'float': '0 10px 40px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
