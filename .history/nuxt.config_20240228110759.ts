// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-aos',
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-swiper'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiURL : process.env.API_URL,
    apiKey: 'sdfasdf'
  },
  app : {
    head : {
      
    }
  }
})
