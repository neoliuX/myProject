import Vue from 'vue'
import Vuex from 'vuex'
import TestOneStore from './test1.js'
import TestTwoStore from './test2.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    testOne: TestOneStore,
    testTwo: TestTwoStore
  }
})
export default store
