/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712', // Very deep blue/black
        surface: '#111827', // Gray-900
        surfaceLight: '#1f2937', // Gray-800
        primary: '#2563eb', // Blue-600
        accent: '#38bdf8', // Luminous light blue/cyan for CTA accents
        textPrimary: '#f9fafb', // Gray-50
        textSecondary: '#9ca3af' // Gray-400
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
