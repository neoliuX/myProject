import './vue-test.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index.js'

Vue.use(Vuex)
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import VuexCom from './pages/Vuex.vue'
import OtherCom from './pages/Other.vue'

let routes = [
  { path: '/vuex', component: VuexCom },
  { path: '/other', component: OtherCom },
  { path: '/', component: VuexCom }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router, 
  store,
  render: h => h(BaseCom)
})
