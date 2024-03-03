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
    '@vite-pwa/nuxt'
  ],
  build: {
      transpile: ['@vuepic/vue-datepicker']
  },
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
  },
  pwa: {
    /* your pwa options */
    manifest: {
      'name' : 'Pravi-Admin',
      'short_name' : 'Pravi',
      'start_url' : '/',
      'background_color' : '#ade8f4',
      'theme_color' : '#00b4d8',
      'display' : 'standalone',
    },
    workbox:{
      na
    }
  }
})
