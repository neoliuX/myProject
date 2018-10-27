const PageStore = {
  state: {
    count: 10,
    curPage: 1
  },
  mutations: {
    setCurPage (state: any, index: number) {
      // if(index === -1){
      //   state.curPage = state.curPage <= 0 ? 0 : state.curPage - 1
      // } else if(index === +1) {
      //   state.curPage = state.curPage >= state.count ? state.count : state.curPage + 1
      // } else {
      //   state.curPage = index
      // }
      // 下面是上面注视的简写
      state.curPage = index === -1 ? state.curPage <= 0 ? 0 : state.curPage - 1 : index === +1 ? state.curPage >= state.count ? state.count : state.curPage + 1 : index
      console.log(state.curPage)
    },
    getPageCount (state: any, count: number) {
      state.count = count
      // state.commit('setCurPage')
    }
  }
}

export default PageStore
