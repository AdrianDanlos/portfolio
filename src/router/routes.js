import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FullProject from '../views/FullProject'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'FullProject',
    component: FullProject,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
