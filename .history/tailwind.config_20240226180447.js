/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  }
}

