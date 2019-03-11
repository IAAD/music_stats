<template>
  <mdb-container>
    <mdb-row>
      <mdb-col lg="6">
        <mdb-jumbotron class="hoverable">
          <mdb-row>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-col>
      <mdb-col lg="6" class="-align-center">
        <mdb-jumbotron class="hoverable center-block">
          <mdb-row>
            <mdb-container>
              <mdb-doughnut-chart
                :data="doughnutChartData"
                :options="doughnutChartOptions"
                :width="400"
                :height="300"
              ></mdb-doughnut-chart>
            </mdb-container>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbDoughnutChart,
  mdbContainer,
  mdbRow,
  mdbJumbotron,
  mdbCol
} from "mdbvue";

export default {
  name: "SoundFeatures",
  components: {
    mdbDoughnutChart,
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol
  },
  props: ["features"],
  data() {
    return {
      doughnutChartData: {
        labels: [
          "Acousticness",
          "Danceability",
          "Energy",
          "Instrumentalness",
          "Liveness",
          "Speechiness",
          "Valence"
        ],
        datasets: [
          {
            data: [
              parseFloat(this.features.data.acousticness),
              parseFloat(this.features.data.danceability),
              parseFloat(this.features.data.energy),
              parseFloat(this.features.data.instrumentalness),
              parseFloat(this.features.data.liveness),
              parseFloat(this.features.data.speechiness),
              parseFloat(this.features.data.valence)
            ],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#bf2424",
              "#bf2ebb",
              "#3608bf"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#bf2424",
              "#bf2ebb",
              "#3608bf"
            ]
          }
        ]
      },
      doughnutChartOptions: {
        responsive: false,
        maintainAspectRatio: false
      }
    };
  }

};
</script>

<style scoped></style>
