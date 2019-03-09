<template>
  <div class="car" reverse>
    <mdb-carousel :interval="4000" showIndicators>
      <mdb-carousel-item
        img
        src="http://www.mundialbeisbol2010.org/wp-content/uploads/2018/05/o-music-heart-facebook.jpg"
        mask="black-light"
        alt="First slide"
        style="max-height: 500px"
      >
      </mdb-carousel-item>
      <mdb-carousel-item
        img
        src="https://wallpaper-gallery.net/images/best-music-wallpapers/best-music-wallpapers-17.jpg"
        mask="black-strong"
        alt="Second slide"
      >
      </mdb-carousel-item>
      <mdb-carousel-item
        img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
        mask="black-slight"
        alt="Third slide"
      >
      </mdb-carousel-item>
    </mdb-carousel>
      <mdb-container>
    <mdb-row>

        <mdb-mask waves overlay="white-slight"></mdb-mask>
        <mdb-card-body class="text-center" cascade>
          <mdb-card-title><strong> {{trackhead.data.name}}</strong></mdb-card-title>
          <h5 class="indigo-text"><strong>Album: </strong> {{trackhead.data.album.name}} </h5>
          <a class="px-2 fa-lg li-ic" :href="trackhead.data.external_urls.spotify"> <mdb-icon fab icon="spotify"/></a>
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
  mounted() {
    console.log(this.trackhead)
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
