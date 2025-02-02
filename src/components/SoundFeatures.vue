<template>
  <mdb-container>
    <mdb-row>
      <mdb-col lg="6">

        <mdb-jumbotron class="hoverable">
          <mdb-container>
            <h4 class="mb-3 p-0" style="width: 100%">
              <strong class="font-weight-bold" style="color: #ff9800">Album Tracks</strong>
            </h4>
            <p class="mb-3 p-0" style="width: 100%">
              Play tracks contained in this album. Click an album track to play.
            </p>
            <a
              v-for="albumData in album.data.items"
              v-bind:key="albumData.id"
              v-on:click="
                beforeviewInfo(albumData.id, albumData.artists[0].id, albumID)
              "
            >
              <mdb-row>
                <mdb-jumbotron class="album">
                  <h5>
                    {{ albumData.name
                    }}<span
                      class="-align-right h5"
                      style="text-align: right; float: right"
                    >
                      {{ millisToMins(albumData.duration_ms) }}</span
                    >
                  </h5>
                </mdb-jumbotron>
              </mdb-row>
            </a>
          </mdb-container>
          <mdb-container>

              <mdb-row>
                <mdb-jumbotron class="album2">
                  <iframe :src="'https://open.spotify.com/embed/track/'+trackId"
                          width="100%" height="80" frameborder="0" allowtransparency="true"
                          allow="encrypted-media"></iframe>
                </mdb-jumbotron>
              </mdb-row>
          </mdb-container>

        </mdb-jumbotron>
      </mdb-col>
      <mdb-col lg="6" class="-align-center">

        <mdb-jumbotron class="hoverable center-block">
          <mdb-row>
            <mdb-container>
              <h4 class="mb-3 p-0" style="width: 100%">
                <strong class="font-weight-bold " style="color: #ff9800">Audio Analysis</strong>
              </h4>
              <p class="mb-3 p-0" style="width: 100%">
                This are analysis scores given to this track by a machine learning algorithm.
              </p>
              <div id="app">
                <div class="chart-wrap">
                  <div id="chart">
                    <apexchart
                      type="donut"
                      width="380"
                      :options="chartOptions"
                      :series="series"
                    />
                  </div>
                </div>
              </div>
            </mdb-container>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbJumbotron, mdbCol } from "mdbvue";
import VueApexCharts from "vue-apexcharts";
import { mapState, mapMutations } from "vuex";
import axios from "axios";


export default {
  name: "SoundFeatures",
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol,
    apexchart: VueApexCharts
  },
  props: ["trackurl"],
  computed: {
    ...mapState([
      "features",
      "album",
      "albumId",
      "trackId",
      "artistId",
      "bearerId"
    ])
  },
  data: function() {
    return {
      series: [
        parseFloat(this.$store.state.features.data.acousticness),
        parseFloat(this.$store.state.features.data.danceability),
        parseFloat(this.$store.state.features.data.energy),
        parseFloat(this.$store.state.features.data.instrumentalness),
        parseFloat(this.$store.state.features.data.liveness),
        parseFloat(this.$store.state.features.data.speechiness),
        parseFloat(this.$store.state.features.data.valence)
      ],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        labels: [
          "Acousticness",
          "Danceability",
          "Energy",
          "Instrumentalness",
          "Liveness",
          "Speechiness",
          "Valence"
        ],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230
        }
      },
      albumID: ""
    };
  },
  methods: {
    ...mapMutations([
      "INSERT_ID",
      "ARTIST_ID",
      "CHANGE_DATA",
      "CHART_CAT",
      "PIE_DATA",
      "ALBUM_DATA",
      "ALBUM_ID"
    ]),
    millisToMins(millis) {
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    viewInfo: async function(id, artistId, albumId) {
      this.INSERT_ID(id);
      this.ARTIST_ID(artistId);
      this.ALBUM_ID(albumId);
      const countryCode = "US";
      const trackArr = [];
      const countryData_url = `api/toptracks/${
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

      //get track features
      const features_url = `api/features/${id}/${
        this.bearerId
      }`;

      const featuresResult = await axios.get(features_url);
      this.PIE_DATA(featuresResult);

      //get album details
      const album_url = `api/album/${albumId}/${
        this.bearerId
      }`;

      const albumResult = await axios.get(album_url);
      this.ALBUM_DATA(albumResult);

      return true;
    },
    beforeviewInfo: async function(id, artistId, albumId) {
      const view = await this.viewInfo(id, artistId, albumId);
      console.log(view);
      if (view === true) {
        this.$root.$emit("update");
      }
    }
  },
  created() {
    this.albumID = this.$store.state.albumId;
    console.log(this.album);
  }
};
</script>

<style scoped>
.album {
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 7px;
  margin-top: 7px;
  width: 100%;
  text-align: left;
}
.album2 {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 100%;
}
</style>
