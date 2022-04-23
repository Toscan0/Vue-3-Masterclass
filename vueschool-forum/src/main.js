import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB0m71yNdVYyMI0LYEtt66vdt5IpvDY2g",
  authDomain: "vue-school-form-981a3.firebaseapp.com",
  projectId: "vue-school-form-981a3",
  storageBucket: "vue-school-form-981a3.appspot.com",
  messagingSenderId: "881332521303",
  appId: "1:881332521303:web:9c3f4ef59883bee8511612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(store)

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
