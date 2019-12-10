import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Recommend from '../pages/recommend'
import Singer from '../pages/singer.vue'
const routes = [
  {
    path: '/recommend',
    name: 'R1',
    component: Recommend
  },
  {
   path:'/singer',
   name:'S1',
   component:Singer
  }
]

const router = new VueRouter({
  routes
})

export default router
