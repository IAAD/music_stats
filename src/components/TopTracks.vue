<template>
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
</template>

<script>
import { mdbContainer, mdbRow } from "mdbvue";
import VueApexCharts from 'vue-apexcharts';
import { mapState } from "vuex";

export default {
  name: "TopTracks",
  components: {
    mdbContainer,
    mdbRow,
    apexchart: VueApexCharts
  },
  computed: {
    ...mapState(["countryData"]),
    updateData: function () {
      const chartData = []
      this.countryData.data.tracks.map ( (track)=>{
        chartData.push(track.popularity)
      });
      this.series.data = chartData;
      return this.series.data;
    }
  },
  data: function() {
    return {
      series: [
        {
          data: this.updateData()
        }
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
            this.countryData.data.tracks[0].name.toString(),
            this.countryData.data.tracks[1].name.toString(),
            this.countryData.data.tracks[2].name.toString(),
            this.countryData.data.tracks[3].name.toString(),
            this.countryData.data.tracks[4].name.toString(),
            this.countryData.data.tracks[5].name.toString(),
            this.countryData.data.tracks[6].name.toString(),
            this.countryData.data.tracks[7].name.toString(),
            this.countryData.data.tracks[8].name.toString(),
            this.countryData.data.tracks[9].name.toString()
          ]
        }
      }
    };
  }
};
</script>

<style scoped></style>
