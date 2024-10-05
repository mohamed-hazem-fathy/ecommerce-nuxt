// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({


    runtimeConfig: {
      // The private keys which are only available within server-side
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      // Keys within public, will be also exposed to the client-side
      public: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
      }
    },
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },




})