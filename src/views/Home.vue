<template>
  <div class="home">
    <Header />
      <Tracks/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tracks from "@/components/Tracks.vue";
import axios from 'axios'

export default {
  name: "home",
  components: {
    Header,
    Tracks
  },
  data() {
    return {
      tracks: []
    };
  },
  tracks() {
    axios
      .get()
      .then()
      .catch();
  }
};
</script>
