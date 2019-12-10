import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Recommend from '../pages/recommend'
import Singer from '../pages/singer'
import Rank from '../pages/rank'
import Mine from  "../pages/mine"
 let router = new VueRouter({
   routes:[
     {
       path:'/recommend',
       name:'R1',
       component:Recommend
     },
     {
       path:'/singer',
       name:'S1',
       component:Singer
     },
     {
       path:'/rank',
       name:'N1',
       component:Rank
     },
     {
       path:'/mine',
       name:'M1',
       component:Mine
     },
   ]
 })


export default router
