import VueRouter from 'vue-router'
import Vue from  'vue'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHidden: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHidden: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '',
    redirect: '/home'
  }
]

const router  = new VueRouter({
  routes,
  mode: 'hash'
})

export default router