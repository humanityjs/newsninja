import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headlines: [],
    loaded: false
  },
  mutations: {
    setHeadlines(state, headlines) {
      state.headlines = headlines,
      state.loaded = true
    }
  },
  getters: {
    getSeries: (state) => (page, type, limit = 8) => {
      const count = state[type].length
      const next = (page - 1) * limit;
      const decider = count - next;
      // some wierd pagination stuffs.
      if (decider > 0 && decider < limit ) {
        return state[type].slice(((page - 1) * limit) - decider, count)
      }
      return state[type].slice((page - 1) * limit, page * limit)
    }
  }
})