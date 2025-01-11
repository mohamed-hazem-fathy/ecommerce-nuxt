// Nuxt config file
export default {
    modules: ['vuetify-nuxt-module', '@pinia/nuxt', '@nuxtjs/i18n'],

  css: [
    '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ],

  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
  },

  compatibilityDate: '2025-01-10'
};