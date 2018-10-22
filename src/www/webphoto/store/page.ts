const PageStore = {
  state: {
    count: 10,
    curPage: 1
  },
  mutations: {
    setCurPage (state: any, index: number) {
      state.curPage = index
      console.log(state.curPage)
    }
  }
}

export default PageStore
