const TestOneStore = {
  state: {
    count: 1
  },
  mutations: {
    incremenst (state: any) {
      console.log(1)
      state.count++
    }
  }
}

export default TestOneStore
