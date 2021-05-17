import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqSjLtgKYHsk1Lguh3E6CKhBDbELxzAo0",
  authDomain: "agenda-medica-3917a.firebaseapp.com",
  projectId: "agenda-medica-3917a",
  storageBucket: "agenda-medica-3917a.appspot.com",
  messagingSenderId: "292021189570",
  appId: "1:292021189570:web:7b41b050d625dcea75b45b",
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
