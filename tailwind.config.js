/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Neue'],
      },
      animation: {
        pop: 'pop 1s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%, 50%': { transform: 'scale(0)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
