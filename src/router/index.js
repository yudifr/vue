import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Feed from '../components/home/Feed.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'',
        name:'home',
        component: Feed
    }
  ]
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // children: [{
    //   path: 'home',
    //   name: 'asd',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    // }]
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
