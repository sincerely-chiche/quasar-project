import { UserInfo } from './../../node_modules/@firebase/auth-types/index.d';
import { useAuthStore } from './../stores/auth';
import { boot } from 'quasar/wrappers'
import { FirebaseApp, initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files


let firebase: FirebaseApp | null = null;
let auth: firebaseAuth.Auth;
export default boot(async ({ app, router }) => {
  // something to do




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBKvPscL-5Puy7xRWmImRqScaBmLbjoslU",
    authDomain: "nuxt3-firebase-7f215.firebaseapp.com",
    projectId: "nuxt3-firebase-7f215",
    storageBucket: "nuxt3-firebase-7f215.appspot.com",
    messagingSenderId: "300020738135",
    appId: "1:300020738135:web:1c8e2c3401df5095b75b12"
  };

  // Initialize Firebase
  firebase = await initializeApp(firebaseConfig);
  auth = firebaseAuth?.getAuth(firebase);

  app.config.globalProperties.$firebase = firebase;
  app.config.globalProperties.$auth = auth;

  const store = useAuthStore();


  const initAuth = () => {

    return new Promise((res, rej) => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        store.saveUserDetails(user as UserInfo);
        unsubscribe();
        res(user);
      }, rej);
    })



  }


  router.beforeEach(async (to, from, next) => {
    const auth = to.meta.requiresAuth
    const user = await initAuth();
    if (auth && store.user?.uid == undefined) {
      next('/login');
    } else {
      if (to.path == "/login" && user) {
        next('/')
      } else
        next();
    }
  })
})

export { firebase, firebaseAuth, auth };
