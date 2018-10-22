// import { mapActions } from 'vuex'
const TestTwoStore = {
  state: {
    countTwo: 2
  },
  mutations: {
    increment (state: any) {
      console.log('test2 increment')
      state.countTwo++
    },
    testFun () {
      console.log('test2 由 actionA 触发')
    },
    changeCount (state: any) {
      state.countTwo = 1000
    }
  }
}

export default TestTwoStore
