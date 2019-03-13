<template>
  <div class="home">
    <Header />

    <div class="input-group md-form form-sm form-2 pl-0">
      <input
        class="form-control my-0 py-1 red-border"
        v-model="search"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="input-group-append" v-on:click="searchResults">
        Search
        <span class="input-group-text red lighten-3" id="basic-text1"
          ><i class="fas fa-search text-grey" aria-hidden="true"></i
        ></span>
      </button>
    </div>

    <Tracks v-bind:tracks="tracks" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tracks from "@/components/Tracks.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    Header,
    Tracks
  },
  computed: {
    ...mapState(["bearerId"])
  },
  data() {
    return {
      tracks: [],
      search: ""
    };
  },
  methods: {
    ...mapMutations(["BEARER_ID"]),
    async searchResults() {
      const url = "http://localhost:5000/api";
      const response = await axios.post(url);
      console.log(response);

      const session_url = `http://localhost:5000/api/search/${this.search}/${
        response.data
      }`;
      this.BEARER_ID(response.data);
      console.log(session_url);
      const searchResult = await axios.get(session_url);
      this.tracks = searchResult.data.tracks.items;
      console.log(searchResult.data.tracks.items);
    }
  }
};
</script>

<style>
@media (min-width: 0) {
  .card-deck .card {
    flex: 0 0 calc(100% - 30px);
  }
}
@media (min-width: 576px) {
  .card-deck .card {
    flex: 0 0 calc(50% - 30px);
  }
}
@media (min-width: 768px) {
  .card-deck .card {
    flex: 0 0 calc(33.3333333333% - 30px);
  }
}
@media (min-width: 992px) {
  .card-deck .card {
    flex: 0 0 calc(25% - 30px);
  }
}
@media (min-width: 1200px) {
  .card-deck .card {
    flex: 0 0 calc(20% - 30px);
  }
}
</style>
