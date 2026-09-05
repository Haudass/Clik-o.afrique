/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070a08',
        surface: '#111814',
        surfaceLight: '#1b241e',
        primary: '#10b981', // Organic green
        accent: '#d4af37', // Luxury gold
        textPrimary: '#f8f9fa',
        textSecondary: '#aab2af'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      }
    },
  },
  plugins: [],
}
