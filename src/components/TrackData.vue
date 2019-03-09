<template>
  <mdb-container>
    <mdb-row>
        <mdb-col lg="6">
        <mdb-jumbotron class="hoverable">
            <mdb-row>
      <mdb-col lg="4">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img
            class="img-fluid"
            :src="trackhead.data.album.images[0].url"
            alt="Sample image"
          />
          <a>
            <mdb-mask overlay="white-slight" waves />
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="8" class="-align-left">
        <a class="green-text">
          <h3 class="font-weight-bold mb-3">
            <mdb-icon icon="chart" class="pr-2" />{{trackhead.data.name}}
          </h3>
        </a>
        <h5 class="mb-3 p-0">
          <strong class="font-weight-bold ">Popularity Index: </strong> {{trackhead.data.popularity}}
        </h5>
          <h5 class=" mb-3 p-0">
              <strong class="font-weight-bold ">Available Markets: </strong> {{trackhead.data.available_markets.length}}
          </h5>
          <h5 class=" mb-3 p-0">
              <strong class="font-weight-bold">Track Length: </strong> {{millisToMins(trackhead.data.duration_ms)}}
          </h5>
          <h5 class=" mb-3 p-0">
              <strong class="font-weight-bold">Track Number: </strong> {{trackhead.data.track_number}}
          </h5>
          <h5 class=" mb-3 p-0">
              <strong class="font-weight-bold">Artists: </strong>
              <span v-for="artist in trackhead.data.artists" v-bind:key="artist.index">
                   {{artist.name}},
              </span>
          </h5>
        <mdb-btn color="success" size="md" class="waves-light"
          >Read more</mdb-btn
        >
      </mdb-col>
            </mdb-row>
        </mdb-jumbotron>
        </mdb-col>
        <mdb-col lg="6">
            <mdb-jumbotron class="hoverable">
                <mdb-row>
                    <mdb-col lg="4">
                        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                            <img
                                    class="img-fluid"
                                    :src="artist.data.images[0].url"
                                    alt="Sample image"
                            />
                            <a>
                                <mdb-mask overlay="white-slight" waves />
                            </a>
                        </mdb-view>
                    </mdb-col>
                    <mdb-col lg="8" class="-align-left">
                        <a class="green-text">
                            <h3 class="font-weight-bold mb-3">
                                <mdb-icon icon="chart" class="pr-2" />{{artist.data.name}}
                            </h3>
                        </a>
                        <h5 class="mb-3 p-0">
                            <strong class="font-weight-bold ">Artist Popularity : </strong> {{artist.data.popularity}}
                        </h5>
                        <h5 class=" mb-3 p-0">
                            <strong class="font-weight-bold ">Followers: </strong> {{artist.data.followers.total}}
                        </h5>
                        <h5 class=" mb-3 p-0">
                            <strong class="font-weight-bold">Genres: </strong>
                            <span v-for="genre in artist.data.genres" v-bind:key="genre.index">
                   {{genre}},
              </span>
                        </h5>
                        <mdb-btn color="success" size="md" class="waves-light"
                        >Read more</mdb-btn
                        >
                    </mdb-col>
                </mdb-row>
            </mdb-jumbotron>
        </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMask,
  mdbIcon,
  mdbView,
  mdbBtn,
    mdbJumbotron
} from "mdbvue";

export default {
  name: "TrackData",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbBtn,
      mdbJumbotron
  },
    props:['trackhead', 'artist'],
    methods:{
      millisToMins(millis){
          let minutes = Math.floor(millis/60000);
          let seconds =((millis % 60000)/1000).toFixed(0);
          return minutes +":"+(seconds < 10 ? '0': '')+seconds;
      }
    },

};
</script>

<style scoped></style>
