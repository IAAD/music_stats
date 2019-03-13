<template>
  <div>
    <mdb-container>
      <mdb-row>
        <mdb-card-group>
          <mdb-card v-for="track in tracks" v-bind:key="track.id">
            <mdb-view hover>
              <mdb-card-image
                :src="track.album.images[0].url"
                alt="Card image cap"
              ></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </mdb-view>
            <mdb-card-body>
              <mdb-card-title>{{ track.name }}</mdb-card-title>
              <mdb-card-text
                >Some quick example text to build on the card title and make up
                the bulk of the card's content.</mdb-card-text
              >

              <mdb-btn
                color="primary"
                v-on:click="beforeviewInfo(track.id, track.artists[0].id)"
                >View Track</mdb-btn
              >
            </mdb-card-body>
          </mdb-card>
        </mdb-card-group>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardImage,
  mdbCardText,
  mdbCardTitle,
  mdbCardGroup,
  mdbContainer
} from "mdbvue";
import axios from "axios";

import { mapState, mapMutations } from "vuex";
export default {
  name: "Tracks",
  components: {
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardImage,
    mdbCardText,
    mdbCardTitle,
    mdbCardGroup,
    mdbContainer,
    mdbRow
  },
  computed: {
    ...mapState(["trackId", "artistId", "bearerId"])
  },
  data() {
    return {
      track: "",
      catData: []
    };
  },
  props: ["tracks"],
  methods: {
    ...mapMutations(["INSERT_ID", "ARTIST_ID", "CHANGE_DATA", "CHART_CAT"]),
    viewInfo: async function(id, artistId) {
      this.track = id;
      this.INSERT_ID(this.track);
      this.ARTIST_ID(artistId);
      const countryCode = "US";
      const trackArr = [];
      const countryData_url = `http://localhost:5000/api/toptracks/${
        this.artistId
      }/
      ${this.bearerId}/${countryCode}`;

      const countryResult = await axios.get(countryData_url);
      this.CHANGE_DATA(countryResult);
      countryResult.data.tracks.forEach(track => {
        trackArr.push(track.name.substring(0, 5));
      });

      this.catData = trackArr;
      this.CHART_CAT(trackArr);

      return true;
    },
    beforeviewInfo: async function(id, artistId) {
      const view = await this.viewInfo(id, artistId);
      if (view === true) {
        this.$router.push("/info");
      }
    }
  }
};
</script>

<style scoped>
@media (min-width: 0) {
  .card-group .card {
    flex: 0 0 calc(100% - 40px);
    margin: 15px 15px;
  }
}
@media (min-width: 576px) {
  .card-group .card {
    flex: 0 0 calc(50% - 30px);
    margin: 15px 15px;
  }
}
@media (min-width: 768px) {
  .card-group .card {
    flex: 0 0 calc(50% - 30px);
    margin: 15px 15px;
  }
}
@media (min-width: 992px) {
  .card-group .card {
    flex: 0 0 calc(33.3333333333% - 30px);
    margin: 15px 15px;
  }
}
@media (min-width: 1200px) {
  .card-group .card {
    flex: 0 0 calc(25% - 30px);
    margin: 15px 15px;
  }
}

.card {
  flex: 1;
}
</style>
