/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'invalid-input': "url('/invalid-red.webp')",
        'valid-input': "url('/checked-green.webp')",
      },
      keyframes: {
        'shake': {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '10%, 30%, 50%, 70%': {
            transform: 'translateX(-10px)'
          },
          '20%, 40%, 60%': {
            transform: 'translateX(10px)'
          },
          '80%': {
            transform: 'translateX(8px)'
          },
          '90%': {
            transform: 'translateX(-8px)'
          }
        },
        'swing-in': {
          '0%': {
            transform: 'rotateX(-100deg)',
            'transform-origin': 'top',
            opacity: '0'
          },
          '100%': {
            transform: 'rotateX(0deg)',
            'transform-origin': 'top',
            opacity: '1'
          }
        },
        'flicker-out': {
          '0%': {
            opacity: '1',
          },
          '13.9%': {
            opacity: '1',
          },
          '14%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '14.9%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '15%': {
            opacity: '1',
          },
          '22.9%': {
            opacity: '1',
          },
          '23%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '24.9%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '25%': {
            opacity: '1',
          },
          '34.9%': {
            opacity: '1',
          },
          '35%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '39.9%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '40%': {
            opacity: '1',
          },
          '42.9%': {
            opacity: '1',
          },
          '43%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '44.9%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '45%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '54.9%': {
            opacity: '1',
          },
          '55%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '69.4%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '69.5%': {
            opacity: '1',
          },
          '69.9%': {
            opacity: '1',
          },
          '70%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '79.4%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '79.9%': {
            opacity: '1',
          },
          '80%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '89.8%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '89.9%': {
            opacity: '1',
            'box-shadow': 'none',
          },
          '90%': {
            opacity: '0',
            'box-shadow': 'none',
          },
          '100%': {
            opacity: '0',
          },
        }
      },
      animation: {
        'swing-in': 'swing-in 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both',
        'flicker-out': 'flicker-out 2s linear both',
        'shake': 'shake 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      }
    },
  },
  plugins: [],
}
