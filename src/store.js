import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trackId: ""
  },
  mutations: {
    INSERT_ID: (state, id) => {
      state.trackId = id;
    }
  },
  actions: {}
});
