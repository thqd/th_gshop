import Vue from "vue"
import VueRouter from "vue-router"

import  Home from "../pages/Home/Home.vue"

Vue.use(VueRouter);

const routes = [
 {
  path:"/",
  redirect: "/home"
 },
 {
  path:'/home',
  component: Home,
  meta:{
   showFooter:true
  }
 },
 {
  path:'/order',
  // component: () => import('../views/About.vue')
  component: () => import("../pages/Order/Order.vue"),
  meta:{
   showFooter:true 
  }
 },
 {
  path:'/person',
  component:() => import("../pages/Person/Person.vue"),
  meta:{
   showFooter:true
  }
 },
 {
  path:'/search',
  component:() => import("../pages/Search/Search.vue"),
  meta:{
   showFooter:true
  }
 },
 {
  path:'/login',
  component:() => import("../pages/Login/Login.vue")
 }
]

export default new VueRouter({
 routes,
 mode:'history'
})