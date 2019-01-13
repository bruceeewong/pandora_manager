import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allFileList: []
  },
  mutations: {
    refreshFileList (state, payload) {
      state.allFileList = payload.allFileList
    }
  }
})
