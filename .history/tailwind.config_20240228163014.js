/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 1s ease-in-out',
        'blurry': 'blurry 1s ease-in-out',
        'border-flash': 'flashy 1s ease-in-out',
			},

			keyframes: {
				fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(4rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
				},
				blurry: {
          '0%': { filter: 'blur(12px)' },
          '100%': { filter: 'blur(0px)' },
				},
				flashy: {
          '0%': { background-image: linear-gradient(to bottom right, red, yellow); },
          '100%': { filter: 'blur(0px)' },
				},
			},
    },
  },
  plugins: [],
}

