const PhotoStore = {
  state: {
    data:[
      {
        'photoId': 1,
        'photoUrl': 'http://via.placeholder.com/100x111'
      },
      {
        'photoId': 2,
        'photoUrl': 'http://via.placeholder.com/260x112'
      },
      {
        'photoId': 3,
        'photoUrl': 'http://via.placeholder.com/260x113'
      },
      {
        'photoId': 4,
        'photoUrl': 'http://via.placeholder.com/260x114'
      },
      {
        'photoId': 5,
        'photoUrl': 'http://via.placeholder.com/260x115'
      },
      {
        'photoId': 6,
        'photoUrl': 'http://via.placeholder.com/260x116'
      },
      {
        'photoId': 7,
        'photoUrl': 'http://via.placeholder.com/260x117'
      },
      {
        'photoId': 8,
        'photoUrl': 'http://via.placeholder.com/260x118'
      },
      {
        'photoId': 9,
        'photoUrl': 'http://via.placeholder.com/260x121'
      },
      {
        'photoId': 10,
        'photoUrl': 'http://via.placeholder.com/260x122'
      },
      {
        'photoId': 11,
        'photoUrl': 'http://via.placeholder.com/260x123'
      },
      {
        'photoId': 12,
        'photoUrl': 'http://via.placeholder.com/260x124'
      },
      {
        'photoId': 13,
        'photoUrl': 'http://via.placeholder.com/260x125'
      },
      {
        'photoId': 14,
        'photoUrl': 'http://via.placeholder.com/260x126'
      },
      {
        'photoId': 15,
        'photoUrl': 'http://via.placeholder.com/260x127'
      },
      {
        'photoId': 16,
        'photoUrl': 'http://via.placeholder.com/260x128'
      },
      {
        'photoId': 17,
        'photoUrl': 'http://via.placeholder.com/260x131'
      },
      {
        'photoId': 18,
        'photoUrl': 'http://via.placeholder.com/260x132'
      },
      {
        'photoId': 19,
        'photoUrl': 'http://via.placeholder.com/260x133'
      },
      {
        'photoId': 20,
        'photoUrl': 'http://via.placeholder.com/260x134'
      },
      {
        'photoId': 21,
        'photoUrl': 'http://via.placeholder.com/260x135'
      },
      {
        'photoId': 22,
        'photoUrl': 'http://via.placeholder.com/260x136'
      },
      {
        'photoId': 23,
        'photoUrl': 'http://via.placeholder.com/260x137'
      },
      {
        'photoId': 24,
        'photoUrl': 'http://via.placeholder.com/260x138'
      },
      {
        'photoId': 26,
        'photoUrl': 'http://via.placeholder.com/260x141'
      },
      {
        'photoId': 27,
        'photoUrl': 'http://via.placeholder.com/260x142'
      }
    ],
    eachPageData: [],
    choiceData: []
  },
  mutations: {
    getPhoto (state: any) {
      let pageNumber = Math.ceil(state.data.length / 8)
      for(let i=0; i < pageNumber; i++) {
        state.eachPageData.push(state.data.slice((i * 8), ((i + 1) * 8)))
      }
    },
    choicePhoto (state: any, item: any) {
      let isPush = true
      state.choiceData = state.choiceData.filter((info: any) => {
        if(!(info.photoId !== item.photoId)) {
          isPush = info.photoId !== item.photoId
          // console.log(info.photoId !== item.photoId)
        }
        return info.photoId !== item.photoId
      })
      if(isPush) {
        state.choiceData.push(item)
      }
      if(state.choiceData.length > 6) {
        state.choiceData.shift()
      }
      // console.log(item, 'choicePhoto')
    }
  },
  actions: {
    async getPhotoList (state: any) {
      state.commit('getPhoto')
    }
  }
}

export default PhotoStore
