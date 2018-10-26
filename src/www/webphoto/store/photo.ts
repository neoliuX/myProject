const PhotoStore = {
  state: {
    data:[]
  },
  mutations: {
    getPhoto () {
      console.log()
    }
  },
  actions: {
    async actionA (state: any) {
      console.log(state)
    }
  }
}

export default PhotoStore
