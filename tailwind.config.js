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
        'fade-up': 'fadeUp 0.75s ease-in-out',
        'blurry': 'blurry 0.5s ease-in',
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
			},
    },
  },
  plugins: [],
}

