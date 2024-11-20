import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Uq0RJua2MPCo_cfNH2kHw0EwFXerdGo",
  authDomain: "login-nacho.firebaseapp.com",
  projectId: "login-nacho",
  storageBucket: "login-nacho.firebasestorage.app",
  messagingSenderId: "348166001847",
  appId: "1:348166001847:web:2e2696b5da724104cf6932"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')