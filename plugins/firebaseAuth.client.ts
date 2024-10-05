import { initializeApp } from "firebase/app";
import { initUser } from "@/composables/useFirebase";
import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {

  const config = useRuntimeConfig()
  console.log(config)


    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,

      };

      // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    initUser()


    const auth = getAuth();

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
    // console.log(app)
  });