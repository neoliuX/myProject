import Axios from 'axios'
const PhotoStore = {
  state: {
    isLoadWeb: true,
    data: [],
    eachPageData: [],
    choiceData: [],
    eventIdDate: 20180101,
    startDate: '',
    ewm: '',
    isSetInterval: true,
    printTxt: '',
    isPrintTxt: false,
    updateDate: ''
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
      state.isLoadWeb = false
      let url = location.search
      if (url.indexOf("?") != -1) { 
          let [key, date] = url.substr(1).split('=')
          state.eventIdDate = date
      } 
      state.isSetInterval = false
      Axios.get('//prod.waliwang.com/rg/api/album/getImage', {
        params: {
          eventId: state.eventIdDate,
          startDate: state.startDate
        }
      })
      .then(function (response) {
        let responseData = response.data
        let responseList = responseData.list
        state.isSetInterval = true
        if(responseData.updateDate){
          state.updateDate = responseData.updateDate
        }
        if(response.status === 200) {
          // state.commit('getPhoto', responseData.list)
          for(let item in responseList) {
            state.data.unshift(responseList[item])
          }
          let pageNumber = Math.ceil(state.data.length / 8)
          state.eachPageData = []
          for(let i=0; i < pageNumber; i++) {
            state.eachPageData.push(state.data.slice((i * 8), ((i + 1) * 8)))
          }
          // console.log(state.eachPageData)
        }
        if(responseList.length > 0) {
          state.startDate = responseData.maxDate
        }
      })
    },
    getEwm (state: any) {
      // console.log(state.choiceData)
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
    getPrint (state: any) {
      if(state.choiceData.length > 0) {
        let imgs = state.choiceData.map((item: any) => {
          return item.id
        })
        Axios.get('//prod.waliwang.com/rg/api/p/savePrit/' + state.eventIdDate + '/' + imgs, {})
        .then(function (response) {
          state.isPrintTxt = true
          setTimeout(() => {
            state.isPrintTxt = false
          }, 5000)
          console.log(response)
          if(parseInt(response.data.code) === 1) {
            state.printTxt = 'your photos has been printed'
          } else {
            state.printTxt = response.data.msg
          }
        })
        // this.$router.push({ path: '/choice' })
      }
    },
    clearChoice (state: any) {
      state.choiceData = []
      state.isPrintTxt = false
     }
  },
  actions: {
    async getPhotoList (state: any) {
      state.commit('getPhotoListM')
      // setInterval(() => {
      //   console.log('需要天假循环')
      //   // state.dispatch('getPhotoListFun')
      // }, 5000)
    },
    async clearChoice (state: any) {
      state.commit('emptyPage')
      state.commit('clearChoice')
    },

  }
}

export default PhotoStore
