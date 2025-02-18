// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})