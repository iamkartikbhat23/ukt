// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-aos',
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-swiper',
    '@samk-dev/nuxt-vcalendar'
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
      title : 'Ukt',
      meta: [ 
        {
          name: 'description',
          content: 'Ukt, a card stories site'
        },
        {
          name: 'keywords',
          content: 'card, news, cardNews, sliding card news, category news, web news, web stories'
        }
      ]
    }
  }
})
