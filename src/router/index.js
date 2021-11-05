import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login/login.vue'
import WebTask from '../views/WebTask/webTask.vue'
import WebLocation from '../views/WebLocation/webLocation.vue'
import NotFound from '../views/NotFound/notFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/web-task',
    name: 'WebTask',
    component: WebTask
  },
  {
    path: '/web-location',
    name: 'WebLocation',
    component: WebLocation
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
