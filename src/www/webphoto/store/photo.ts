const PhotoStore = {
  state: {
    data:[
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0802/162315306.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      },
      {
        'photoId': 123,
        'photoUrl': 'https://upload.gtarcade.com/gtarcade/2018/0814/151338974.jpg'
      }
    ],
    eachPageData: []
  },
  mutations: {
    getPhoto (state: any) {
      let pageNumber = Math.ceil(state.data.length / 8)
      console.log(pageNumber)
      console.log(state.data)
    }
  },
  actions: {
    async getPhotoList (state: any) {
      // console.log(state.data.length)
      state.commit('getPhoto')
      await state.commit('getPageCount', 15)
    }
  }
}

export default PhotoStore
