const TestOneStore = {
  state: {
    count: 2
  },
  mutations: {
    incremenst (state: any) {
      state.count++
    }
  },
  actions: {
    async actionA (context: any) {
      console.log(context)
      console.log('actionA')
      context.commit('testFun')
    },
    async actionB (context: any) {
      await context.dispatch('actionA') // 等待 actionA 完成
      console.log('等待 actionA 完成...................')
      context.commit('testFun')
    }
  }
}

export default TestOneStore
