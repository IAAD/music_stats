<template>
  <div>
    <TrackHeader v-bind:trackhead="trackhead" />
    <div style="margin-top: 5rem"></div>
    <TrackData  v-bind:trackhead="trackhead" v-bind:artist="artist"   />
    <div style="margin-top: 5rem"></div>
    <SoundFeatures />
    <div style="margin-top: 5rem"></div>
    <TopTracks />
  </div>
</template>

<script>
import TrackHeader from "../components/TrackHeader.vue";
import TrackData from "../components/TrackData.vue";
import SoundFeatures from "../components/SoundFeatures.vue";
import TopTracks from "../components/TopTracks.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Info",
  components: {
    TrackHeader,
    TrackData,
    SoundFeatures,
    TopTracks
  },
  computed: {
    ...mapState(["trackId"])
  },
  data() {
    return {
      trackhead: [],
      artist: []
    };
  },
  mounted() {
    this.trackResults(this.trackId);
  },
  methods: {
    async trackResults(id) {
      const url = "http://localhost:5000/api";
      const response = await axios.post(url);

      const session_url = `http://localhost:5000/api/track/${id}/${
        response.data
      }`;


      const trackResult = await axios.get(session_url);
      this.trackhead = trackResult;

      const artistId = trackResult.data.artists[0].id;
      const artist_url = `http://localhost:5000/api/artist/${artistId}/${
              response.data
              }`;

      const artistResult = await axios.get(artist_url);
      this.artist =  artistResult;
      console.log(artistResult);

    }
  }
};
</script>

<style scoped></style>
