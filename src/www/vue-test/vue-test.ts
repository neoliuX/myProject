import './vue-test.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import HomeCom from './pages/Home.vue'
import OtherCom from './pages/Other.vue'

let routes = [
  { path: '/home', component: HomeCom },
  { path: '/other', component: OtherCom },
  { path: '/', component: HomeCom }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router, 
  render: h => h(BaseCom)
})
