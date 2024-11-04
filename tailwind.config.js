/** @type {import('tailwindcss').Config} */
   // tailwind.config.js
   module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          up: {
            '0%': { transform: 'translateY(0)', opacity: '1' },
            '50%': { transform: 'translateY(-20px)', opacity: '0.5' },
            '100%': { transform: 'translateY(-40px)', opacity: '0' }
          },
          down: {
            '0%': { transform: 'translateY(0)', opacity: '1' },
            '50%': { transform: 'translateY(20px)', opacity: '0.5' },
            '100%': { transform: 'translateY(40px)', opacity: '0' }
          }
        },
        animation: {
          'vote-up': 'up 0.5s ease-out forwards',
          'vote-down': 'down 0.5s ease-out forwards'
        }
      }
    },
    plugins: [],
  }
