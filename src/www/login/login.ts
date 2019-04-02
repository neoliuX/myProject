import './login.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


Vue.use(Vuex)
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import LoginCom from './pages/Login.vue'

const Bar = { template: '<router-view></router-view>' }
let routes = [
  { path: '/',
    component: BaseCom,
    children: [
      { path: '/login', component: LoginCom },
      { path: '/', redirect: '/login' }
    ]
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router, 
  render: h => h(Bar)
})
