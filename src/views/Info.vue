<template>
  <div>
    <TrackHeader />
      <div style="margin-top: 5rem"></div>
    <TrackData />
      <div style="margin-top: 5rem"></div>
      <SoundFeatures/>
      <div style="margin-top: 5rem"></div>
      <TopTracks/>
  </div>
</template>

<script>
import TrackHeader from "../components/TrackHeader.vue";
import TrackData from "../components/TrackData.vue";
import SoundFeatures from "../components/SoundFeatures.vue";
import TopTracks from "../components/TopTracks.vue";

export default {
  name: "Info",
  components: {
    TrackHeader,
    TrackData,
      SoundFeatures,
      TopTracks

  }
};
</script>

<style scoped></style>
