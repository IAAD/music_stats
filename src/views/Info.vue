<template>
  <div>
    <TrackHeader v-bind:trackhead="trackhead" />
    <div style="margin-top: 5rem"></div>
    <TrackData  v-bind:trackhead="trackhead" v-bind:artist="artist"   />
    <div style="margin-top: 5rem"></div>
    <mdb-container>
      <mdb-row>
        <mdb-col class="-align-center">
          <mdb-jumbotron class="hoverable center-block">
            <mdb-row>
              <select class="browser-default custom-select" v-on:change="selectCountry($event)">
                <option disabled value="">Please select a Country</option>
                <option value="AR">Argentina</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="BE">Belgium</option>
                <option value="BG">Bulgaria</option>
                <option value="BR">Brazil</option>
                <option value="CA">Canada</option>
                <option value="CH">Switzerland</option>
                <option value="CL">Chile</option>
                <option value="CY">Cyprus</option>
                <option value="DE">Germany</option>
                <option value="ES">Spain</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GR">Greece</option>
                <option value="ID">Indonesia</option>
                <option value="IE">Ireland</option>
                <option value="MX">Mexico</option>
                <option value="MY">Malaysia</option>
                <option value="NL">Netherlands</option>
                <option value="PL">Poland</option>
                <option value="SG">Singapore</option>
                <option value="US" selected >United States</option>
                <option value="UY">Uruguay</option>
              </select>
            </mdb-row>
            <mdb-row>
              <mdb-container>
                <div id="chart">
                  <apexchart
                          type="bar"
                          height="350"
                          :options="chartOptions"
                          :series="series"
                  />
                </div>
              </mdb-container>
            </mdb-row>
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div style="margin-top: 5rem"></div>
    <SoundFeatures v-bind:features="features" />
  </div>
</template>

<script>
import TrackHeader from "../components/TrackHeader.vue";
import TrackData from "../components/TrackData.vue";
import SoundFeatures from "../components/SoundFeatures.vue";
import { mapState, mapMutations } from "vuex";
import { mdbJumbotron, mdbRow, mdbContainer, mdbCol } from 'mdbvue'
import axios from "axios";
import VueApexCharts from 'vue-apexcharts';

export default {
  name: "Info",
  components: {
    TrackHeader,
    TrackData,
    SoundFeatures,
    mdbContainer,
    mdbCol,
    mdbJumbotron,
    mdbRow,
    apexchart: VueApexCharts
  },
  computed: {
    ...mapState(["trackId", "countryData"])
  },
  data() {
    return {
      series: [

      ],
      chartOptions: {
        plotOptions: {
          bar: {
            vertical: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
                  "svfs",   "svfs" ,  "svfs"  , "svfs",
            "svfs",   "svfs",   "svfs",   "svfs",   "svfs",   "tewutuwr"
          ]
        }
      },
      trackhead: [],
      artist: [],
      features: [],
      bearerToken: "",
      countryDataProp: [],
      chartData: []
    };
  },
  mounted() {
    this.trackResults(this.trackId);
    this.selectCountryFirst("US");
  },
  methods: {
    ...mapMutations([
      'CHANGE_DATA'
    ]),
    async trackResults(id) {
      //get bearer tokken

      const url = "http://localhost:5000/api";
      const response = await axios.post(url);
      const token = response.data;
      this.bearerToken = token;

      const session_url = `http://localhost:5000/api/track/${id}/${
        token
      }`;

      const trackResult = await axios.get(session_url);
      this.trackhead = trackResult;

      //get artist data
      const artistId = trackResult.data.artists[0].id;
      const artist_url = `http://localhost:5000/api/artist/${artistId}/${
              token
              }`;

      const artistResult = await axios.get(artist_url);
      this.artist =  artistResult;


      //get track features
      const features_url = `http://localhost:5000/api/features/${id}/${
              token
              }`;

      const featuresResult = await axios.get(features_url);
      this.features = featuresResult;
    },

    async selectCountry(event) {
      //get artist country data
      const artistId = this.trackhead.data.artists[0].id;
      const artist_url = `http://localhost:5000/api/toptracks/${artistId}/
      ${this.bearerToken}/${event.target.value}`;

      const countryResult = await axios.get(artist_url);
      this.countryDataProp = countryResult;
      this.CHANGE_DATA(this.countryDataProp);
      console.log(countryResult);
      this.updateData()

    },

    async selectCountryFirst(event) {
      //get artist country data
      const artistId = this.trackhead.data.artists[0].id;
      const artist_url = `http://localhost:5000/api/toptracks/${artistId}/
      ${this.bearerToken}/${event}`;

      const countryResult = await axios.get(artist_url);
      this.countryDataProp = countryResult;
      this.CHANGE_DATA(this.countryDataProp);
      console.log(countryResult);
    },
    updateData: function () {
      this.chartData = []
      this.countryData.data.tracks.map ( (track)=>{
        this.chartData.push(track.popularity)
        console.log(track.popularity)
      });
      this.series = this.chartData;
    }
  }
};
</script>

<style scoped></style>
