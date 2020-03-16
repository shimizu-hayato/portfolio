import Vue from 'vue'
import VueRouter from 'vue-router'
import top from '../views/top.vue'
import about from '../views/about.vue'
import works from '../views/works.vue'
import contact from '../views/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: top
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: about
  },
  {
    path: '/works',
    name: 'works',
    //component: () => import('../views/works.vue')
    component: works
  },
  {
    path: '/contact',
    name: 'contact',
    //component: () => import('../views/contact.vue')
    component: contact
  }
]

const router = new VueRouter({
  routes
})

export default router
