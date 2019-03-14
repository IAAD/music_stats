<template>
  <mdb-container>
    <mdb-row>
      <mdb-col lg="6">
        <mdb-jumbotron class="hoverable">
          <mdb-container>
          <mdb-row v-for="albumData in album.data.items" v-bind:key="albumData.id">
            <mdb-jumbotron class="album">
              <h5>{{albumData.name}}</h5>
            </mdb-jumbotron>
          </mdb-row>
          </mdb-container>
        </mdb-jumbotron>
      </mdb-col>
      <mdb-col lg="6" class="-align-center">
        <mdb-jumbotron class="hoverable center-block">
          <mdb-row>
            <mdb-container>
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
import { mapState } from "vuex";

export default {
  name: "SoundFeatures",
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol,
    apexchart: VueApexCharts
  },
  computed: {
    ...mapState(["features", "album"])
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
      }
    };
  },
  mounted() {
    console.log(this.album)
  }
};
</script>

<style scoped>
  .album{
    padding-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 7px;
    margin-top: 7px;
    width: 100%;
    text-align: left;
  }
</style>
