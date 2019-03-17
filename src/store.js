import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trackId: "",
    artistId: "",
    albumId: "",
    bearerId: "",
    countryData: [],
    chartCategories: [],
    features: [],
    album: []
  },
  mutations: {
    INSERT_ID: (state, id) => {
      state.trackId = id;
    },
    ARTIST_ID: (state, id) => {
      state.artistId = id;
    },
    ALBUM_ID: (state, id) => {
      state.albumId = id;
    },
    CHANGE_DATA: (state, data) => {
      state.countryData = data;
    },
    BEARER_ID: (state, id) => {
      state.bearerId = id;
    },
    CHART_CAT: (state, data) => {
      state.chartCategories = data;
    },
    PIE_DATA: (state, data) => {
      state.features = data;
    },
    ALBUM_DATA: (state, data) => {
      state.album = data;
    }
  },
  actions: {}
});
