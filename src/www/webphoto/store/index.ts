import Vue from 'vue'
import Vuex from 'vuex'
import PageStore from './page'

Vue.use(Vuex)
const store: any = new Vuex.Store({
  modules: {
    page: PageStore
  }
})
export default store
