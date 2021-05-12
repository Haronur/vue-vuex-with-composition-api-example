import { createStore } from 'vuex'

export default createStore({
  state:{
    titles: []
  },
  getters:{
    totalTitles(state) {
          return state.titles.length;
      }
  },
  mutations:{
      SAVE_TITLE(state,title) {
          state.titles.push(title);
      }
  },
  actions:{
    saveTitle({commit}, title) {
          commit('SAVE_TITLE',title);
      }
  },
  modules: {
  }
})
