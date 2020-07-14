import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FullProjects from '../views/FullProjects'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'FullProjects',
    component: FullProjects,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
