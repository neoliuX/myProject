import './typescript.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import HomeCom from './pages/Home.vue'
import OtherCom from './pages/Other.vue'

const Bar = { template: '<router-view></router-view>' }
let routes = [
  { path: '/',
    component: BaseCom,
    children: [
      { path: '/home', component: HomeCom },
      { path: '/other', component: OtherCom },
      { path: '/', redirect: '/home' }
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
