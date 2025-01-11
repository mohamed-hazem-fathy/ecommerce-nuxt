// import { createPinia } from 'pinia';

// export default defineNuxtPlugin((nuxtApp) => {
//   const pinia = createPinia();
//   nuxtApp.vueApp.use(pinia);
// });


import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')