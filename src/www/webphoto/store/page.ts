const PageStore = {
  state: {
    count: 0,
    curPage: 1
  },
  mutations: {
    setCurPage (state: any, index: number | string) {
      console.log(index)
      if(index === 'prev'){
        state.curPage = state.curPage <= 0 ? 0 : state.curPage - 1
      } else if(index === 'next') {
        state.curPage = state.curPage >= state.count ? state.count : state.curPage + 1
      } else {
        state.curPage = index
      }
      // 下面是上面注视的简写
      // state.curPage = index === -1 ? state.curPage <= 1 ? 1 : state.curPage - 1 : index === +1 ? state.curPage >= state.count ? state.count : state.curPage + 1 : index
      // console.log(state.curPage)
    },
    getPageCount (state: any, count: number) {
      state.count = count
      // state.commit('setCurPage')
    },
    emptyPage (state: any) {
      state.curPage = 1
    }
  },
  actions: {
    emptyPageA (state: any) {
      state.commit('emptyPage')
    }
  }
}

export default PageStore
