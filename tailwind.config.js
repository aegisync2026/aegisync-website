/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
          brand: {
              blue: '#0F3B68',
              lightBlue: '#1E5A99',
              gray: '#334155',
              lightGray: '#F8FAFC',
              accent: '#2563EB'
          }
      },
      fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
          'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
          fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          }
      }
    },
  },
  plugins: [],
}
