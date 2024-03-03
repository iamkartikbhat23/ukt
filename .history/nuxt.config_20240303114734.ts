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
    manifest: {
      name : 'Ukt',
      short_name : 'Ukt',
      description : 'Ukt Stories',
      icons: [
        {
          src: 'images/icons/icon-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'images/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox:{
      navigateFallback: '/'
    },
    devOptions : {
      enabled: true,
      type: 'module'
    }
  }
})
