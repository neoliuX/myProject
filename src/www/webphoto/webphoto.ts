import './webphoto.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store/index'

Vue.use(Vuex)
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import HomeCom from './pages/Home.vue'
import ChoiceCom from './pages/Choice.vue'
const Bar = { template: '<router-view></router-view>' }
let routes = [
  { path: '/',
    component: BaseCom,
    children: [
      { path: '/home', component: HomeCom },
      { path: '/choice', component: ChoiceCom },
      { path: '/', redirect: '/home' }
    ]
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  store,
  router, 
  render: h => h(Bar)
})
