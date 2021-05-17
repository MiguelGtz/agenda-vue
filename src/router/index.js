import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Signup from '../views/Signup'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
