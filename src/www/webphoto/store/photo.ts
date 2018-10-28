import Axios from 'axios'
const PhotoStore = {
  state: {
    data: [],
    eachPageData: [],
    choiceData: [],
    eventIdDate: 20180101,
    startDate: '',
    ewm: ''
  },
  mutations: {
    // getPhoto (state: any, dataList: any) {
    //   for(let item in dataList) {
    //     state.data.push(dataList[item])
    //   }
    //   let pageNumber = Math.ceil(state.data.length / 8)
    //   for(let i=0; i < pageNumber; i++) {
    //     state.eachPageData.push(state.data.slice((i * 8), ((i + 1) * 8)))
    //   }
    // },
    choicePhoto (state: any, item: any) {
      let isPush = true
      state.choiceData = state.choiceData.filter((info: any) => {
        if(!(info.id !== item.id)) {
          isPush = info.id !== item.id
        }
        return info.id !== item.id
      })
      if(isPush) {
        state.choiceData.push(item)
      }
      if(state.choiceData.length > 6) {
        state.choiceData.shift()
      }
    },
    getPhotoListM (state: any) {
      let url = location.search
      if (url.indexOf("?") != -1) { 
          let [key, date] = url.substr(1).split('=')
          state.eventIdDate = date
      } 
      Axios.get('//prod.waliwang.com/rg/api/album/getImage', {
        params: {
          eventId: state.eventIdDate,
          startDate: state.startDate
        }
      })
      .then(function (response) {
        let responseData = response.data
        let responseList = responseData.list
        if(response.status === 200) {
          // state.commit('getPhoto', responseData.list)
          for(let item in responseList) {
            state.data.push(responseList[item])
          }
          let pageNumber = Math.ceil(state.data.length / 8)
          for(let i=0; i < pageNumber; i++) {
            state.eachPageData.push(state.data.slice((i * 8), ((i + 1) * 8)))
          }
        }
        if(responseList.length > 0) {
          state.startDate = responseData.maxDate
        }
      })
    },
    getEwm (state: any) {
      console.log(state.choiceData)
      if(state.choiceData.length > 0) {
        let imgs = state.choiceData.map((item: any) => {
          return item.id
        })
        Axios.get('//prod.waliwang.com/rg/api/p/getQrcode/' + state.eventIdDate + '/' + imgs, {})
        .then(function (response) {
          if(response.status === 200) {
            state.ewm = response.data.data.qrurl
          }
        })
        // this.$router.push({ path: '/choice' })
      }
    },
    getFinish (state: any) {
      if(state.choiceData.length > 0) {
        let imgs = state.choiceData.map((item: any) => {
          return item.id
        })
        Axios.get('//prod.waliwang.com/rg/api/p/savePrit/' + state.eventIdDate + '/' + imgs, {})
        .then(function (response) {
          console.log(response)
        })
        // this.$router.push({ path: '/choice' })
      }
    },
    clearAllData (state: any) {
      state.eachPageData = []
      state.choiceData = []
     }
  },
  actions: {
    async getPhotoList (state: any) {
      state.commit('getPhotoListM')
      // let url = location.search
      // if (url.indexOf("?") != -1) { 
      //     let [key, date] = url.substr(1).split('=')
      //     state.eventIdDate = date
      // } 
      // Axios.get('//prod.waliwang.com/rg/api/album/getImage', {
      //   params: {
      //     eventId: state.eventIdDate,
      //     startDate: state.startDate
      //   }
      // })
      // .then(function (response) {
      //   let responseData = response.data
      //   if(response.status === 200) {
      //     state.commit('getPhoto', responseData.list)
      //   }
      //   if(responseData.list.length > 0) {
      //     state.startDate = responseData.maxDate
      //   }
      // })
      setInterval(() => {
        console.log('需要天假循环')
        // state.dispatch('getPhotoListFun')
      }, 5000)
    },
    async clearAllData (state: any) {
      state.commit('emptyPage')
      state.commit('clearAllData')
    }
  }
}

export default PhotoStore
