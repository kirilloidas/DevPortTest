import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
