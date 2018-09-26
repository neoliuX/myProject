import './home.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import BaseCom from './components/Base.vue'
import FormBaseCom from './pages/form/Base.vue'

const Bar = { template: '<router-view></router-view>' }
let routes = [
  { path: '/',
    component: BaseCom,
    children: [
      { path: '/form', component: FormBaseCom },
      { path: '/', redirect: '/form' }
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
