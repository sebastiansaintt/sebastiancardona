import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ProjectDemoView from './views/ProjectDemoView.vue'
import i18n from './i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects/:id', name: 'project-demo', component: ProjectDemoView },
    { path: '/project/:id', redirect: to => `/projects/${to.params.id}` },
    { path: '/demo/:id', redirect: to => `/projects/${to.params.id}` }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
