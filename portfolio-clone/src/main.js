import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import i18n from './i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView }
  ]
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
