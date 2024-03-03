// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  runtimeConfig: {
    apiURL : process.env.API_URL,
    apiKey: process.env.API_KEY
  }
})
