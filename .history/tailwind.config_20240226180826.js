/** @type {import('tailwindcss').Config} */
 default {
  theme: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  }
}
