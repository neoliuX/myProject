import Vue from 'vue'
import Vuex from 'vuex'
import PageStore from './page'
import PhotoStore from './photo'

Vue.use(Vuex)
const store: any = new Vuex.Store({
  modules: {
    page: PageStore,
    photo: PhotoStore
  }
})
export default store
