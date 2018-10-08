import { StoreOptions } from 'vuex/types/index.d'

// 创建store
const CounterStore: StoreOptions<any> = {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  getters: {
    timesCount: state => state.count * state.count
  },
  actions: {
    async delayExp (context, time: number = 1000) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    },
    async incrementDelay (context, time: number = 1000) {
      await context.dispatch('delayExp', 2000)
      context.commit('increment')
      return { data: 'success' }
    }
  }
}

export default CounterStore
