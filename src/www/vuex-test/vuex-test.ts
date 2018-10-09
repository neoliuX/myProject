import './vuex-test.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store/index'

Vue.use(Vuex)
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
const Bar = { template: '<router-view></router-view>' }
let routes = [
  { path: '/',
    component: BaseCom
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
