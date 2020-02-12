import Vue from 'vue'
import VueRouter from 'vue-router'
import { components } from 'aws-amplify-vue'

Vue.use(VueRouter)

function loadView (view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: components.Authenticator
  },
  {
    path: '/signin',
    name: 'signin',
    component: loadView('SignUp')
  },
  {
    path: '/signup',
    name: 'signup',
    component: loadView('SignIn')
  }
]

const router = new VueRouter({
  routes
})

export default router
