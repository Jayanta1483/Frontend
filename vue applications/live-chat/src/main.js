import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from "./firebase/config.js"
import { onAuthStateChanged } from "firebase/auth"
import './css/main.css'


// To check if the connection to firebase backend is synchronised or not
// waiting for the authentication initialization, then creating app

let app;

onAuthStateChanged(auth, ()=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
    
})


