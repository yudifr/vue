import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import Feed from '../components/home/Feed.vue'
import ConsumerData from '../components/consumer/Data.vue'
import ConsumerNewFeed from '../components/consumer/NewFeed.vue'
import EmployeeProfile from '../components/consumer/EmployeeProfile.vue'
import Kuisioner from '../views/alumni/Kuisioner.vue'
import KuisionerConsumer from '../views/consumer/Kuisioner.vue'
import InstitutionData from '../components/institution/Data.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    
    path: '/alumni',
    name: 'alumni',
    component: Home,
    children: [
              {
                path:'',
                name:'alumni.home',
                component: Feed
            },
              {
                path:'kuisioner',
                name:'alumni.kuisioner',
                component: Kuisioner
            }
  ]
  },
  {
    
    path: '/consumer',
    name: 'consumer',
    component: Home,
    children: [
              {
                path:'',
                name:'consumer.home',
                component: ConsumerData
            },
            
              {
                path:'kuisioner',
                name:'consumer.kuisioner',
                component: KuisionerConsumer
            },
            {
              path:'new-feed',
              name:'consumer.new-feed',
              component: ConsumerNewFeed
          },
          {
            path:'karyawan/:id',
            name:'consumer.EmployeeProfile',
            component: EmployeeProfile
        }
  ]
  },
  {
    
    path: '/institusi',
    name: 'institution',
    component: Home,
    children: [
              {
                path:'',
                name:'institution.home',
                component: InstitutionData
            },
            
            {
              path:'new-feed',
              name:'institution.new-feed',
              component: ConsumerNewFeed
          },
          {
            path:'karyawan/:id',
            name:'institution.EmployeeProfile',
            component: EmployeeProfile
        }
  ]
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
