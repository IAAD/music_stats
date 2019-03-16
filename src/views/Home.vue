<template>
  <div class="home">
    <Header />

    <div class="input-group md-form form-sm form-2 pl-0">
      <input
        class="form-control my-0 py-1 red-border"
        v-model="search"
        type="text"
        placeholder="Search for any track or artist, try sia"
        aria-label="Search"
      />
      <button
        class="input-group-append btn btn-primary"
        v-on:click="searchResults"
      >
        Search
        <span style="padding-left: 5px">
          <i class="fas fa-search " aria-hidden="true"></i>
        </span>
      </button>
    </div>

    <div v-if="spinner" class="spinCont">
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
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
      search: "",
      spinner: false
    };
  },
  methods: {
    ...mapMutations(["BEARER_ID"]),
    async searchResults() {
      this.spinner = true;
      const url = "http://localhost:5000/api";
      const response = await axios.post(url);

      const session_url = `http://localhost:5000/api/search/${this.search}/${
        response.data
      }`;
      this.BEARER_ID(response.data);

      await axios.get(session_url).then((res) => {
          this.tracks = res.data.tracks.items;
        setTimeout(() => {
          this.spinner = false;
        }, 1000);
          console.log(res.data.tracks.items);
      })


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

.spinCont {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
