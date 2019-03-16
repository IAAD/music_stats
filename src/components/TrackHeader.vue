<template>
  <div class="car" reverse>
    <mdb-carousel :interval="4000" showIndicators>
      <mdb-carousel-item
        v-for="image in images"
        v-bind:key="image.index"
        img
        :src="image"
        mask="black-light"
        alt="First slide"
        style="max-height: 500px"
      >
      </mdb-carousel-item>
    </mdb-carousel>
    <mdb-container>
      <mdb-row>
        <mdb-mask waves overlay="white-slight"></mdb-mask>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-title
            ><strong class="indigo-text">
              {{ trackhead.data.name }}</strong
            ></mdb-card-title
          >
          <h5><strong>Album: </strong> {{ trackhead.data.album.name }}</h5>
          <h5>
            <strong>Album Artists: </strong>
            <span
              v-for="artist in trackhead.data.album.artists"
              v-bind:key="artist.index"
            >
              {{ artist.name }},
            </span>
          </h5>
          <h5>
            <strong>Release Date: </strong>
            {{ trackhead.data.album.release_date }}
          </h5>
          <h5>
            <strong>Album Markets: </strong>
            {{ trackhead.data.album.available_markets.length }}
          </h5>
          <h5>
            <strong>Total Tracks: </strong>
            {{ trackhead.data.album.total_tracks }}
          </h5>
          <a
            class="px-2 fa-lg li-ic"
            :href="trackhead.data.external_urls.spotify"
          >
            <mdb-icon fab icon="spotify"
          /></a>
        </mdb-card-body>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCardBody,
  mdbCardTitle,
  mdbIcon,
  mdbCarousel,
  mdbCarouselItem,
  mdbMask,
  mdbContainer
} from "mdbvue";

export default {
  name: "TrackHeader",
  components: {
    mdbRow,
    mdbCardBody,
    mdbCardTitle,
    mdbIcon,
    mdbCarousel,
    mdbCarouselItem,
    mdbMask,
    mdbContainer
  },
  props: ["trackhead"],
  created() {
    const img = [
      "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
      "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM2MTcxfQ&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ];
    var result = [];
    var _tmp = img.slice();
    for (var i = 0; i < 3; i++) {
      var index = Math.ceil(Math.random() * 10) % _tmp.length;
      result.push(_tmp.splice(index, 1)[0]);
    }
    this.images = result;
  },
  data() {
    return {
      images: []
    };
  }
};
</script>

<style scoped>
.car .card-body.card-body-cascade {
  z-index: 3;
  margin-top: -5rem;
  -webkit-border-radius: 0.25rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
    0 4px 15px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
.car .card-body.card-body-cascade {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin-left: 4%;
  margin-right: 4%;
  background: #fff;
  z-index: 1;
  -webkit-border-radius: 0 0 0.25rem 0.25rem;
  border-radius: 0 0 0.25rem 0.25rem;
}
.carousel {
  z-index: -1;
}
</style>
