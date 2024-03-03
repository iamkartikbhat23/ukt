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
    meta: {
      title: 'Ukt',
      author:'Kartik'
    },
    manifest: {
      name : 'Ukt',
      short_name : 'Ukt',
      theme_color: '#00b4d8',
      description : 'Ukt Stories',
      background_color: '#ade8f4',
      display:'standalone',
      orientation: 'any',
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
          src: 'images/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose:'maskable'
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
      ],
      // splash : [
      //     '640x1136' => '/images/icons/splash-640x1136.png',
      //     '750x1334' => '/images/icons/splash-750x1334.png',
      //     '828x1792' => '/images/icons/splash-828x1792.png',
      //     '1125x2436' => '/images/icons/splash-1125x2436.png',
      //     '1242x2208' => '/images/icons/splash-1242x2208.png',
      //     '1242x2688' => '/images/icons/splash-1242x2688.png',
      //     '1536x2048' => '/images/icons/splash-1536x2048.png',
      //     '1668x2224' => '/images/icons/splash-1668x2224.png',
      //     '1668x2388' => '/images/icons/splash-1668x2388.png',
      //     '2048x2732' => '/images/icons/splash-2048x2732.png',
      // ],
    },
    workbox:{
      navigateFallback: '/'
    },
    devOptions : {
      enabled: true,
      type: 'module'
    },
  }
})
