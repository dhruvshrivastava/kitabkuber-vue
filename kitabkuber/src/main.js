import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from 'axios'
import '@babel/polyfill'
import '@babel/plugin-transform-regenerator'

axios.defaults.baseURL = 'https://kitabkuber-django.herokuapp.com'
createApp(App).use(store).use(router, axios).mount('#app')
