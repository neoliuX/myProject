// import { mapActions } from 'vuex'
const TestTwoStore = {
  state: {
    countTwo: 2
  },
  mutations: {
    increment (state: any) {
      console.log('这里是test2 increment')
      state.countTwo++
    },
    testFun () {
      console.log('这里是test2')
    }
  }
}

export default TestTwoStore
