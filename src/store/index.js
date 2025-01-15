import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUserInfo(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  }
});
