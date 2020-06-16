import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Store from '@/components/Store'
import Community from '@/components/Community'
import Contact from '@/components/Contact'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Store',
      name: 'Store',
      component: Store
    },

    {
      path: '/Community',
      name: 'Community',
      component: Community
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
