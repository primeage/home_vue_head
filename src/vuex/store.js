import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var busVM = new Vue()
const state = {
  count: 0,
  busVM: busVM
}

const mutations = {
  mutationsAddCount (state, n = 0) {
    return (state.count += n)
  },

  mutationsReduceCount (state, n = 0) {
    return (state.count -= n)
  }
}

const actions = {
  actionsAddCount (context, n = 0) {
    console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount ({ commit }, n = 0) {
    return commit('mutationsReduceCount', n)
  }
}

const getters = {
  getterCount (state, n = 0) {
    return (state.count + n)
  }
}

export default new Vuex.Store({
  state, // 存储状态（变量）
  mutations, // 修改状态
  actions, // 异步
  getters
})

// test git
