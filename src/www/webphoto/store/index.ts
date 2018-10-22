import Vue from 'vue'
import Vuex from 'vuex'
import TestOneStore from './test1'
import TestTwoStore from './test2'
import CounterStore from './counter'

Vue.use(Vuex)
const store: any = new Vuex.Store({
  modules: {
    testOne: TestOneStore,
    testTwo: TestTwoStore,
    counter: CounterStore
  }
})
export default store
