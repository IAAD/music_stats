import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trackId: "",
    countryData: []
  },
  mutations: {
    INSERT_ID: (state, id) => {
      state.trackId = id;
    },
    CHANGE_DATA: (state, data) => {
      state.countryData = data;
    }
  },
  actions: {}
});
