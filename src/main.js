import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

Vue.config.productionTip = false


// my-second-2-project
Vue.use(Vuelidate)
firebase.initializeApp({
  apiKey: "AIzaSyD8t3Y2HDlqwsDGCvV9xDXF9cbEFN19mUw",
  authDomain: "my-second-2-project.firebaseapp.com",
  databaseURL: "https://my-second-2-project-default-rtdb.firebaseio.com",
  projectId: "my-second-2-project",
  storageBucket: "my-second-2-project.appspot.com",
  messagingSenderId: "1073829204660",
  appId: "1:1073829204660:web:83d0cf03598a698be67de1"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})