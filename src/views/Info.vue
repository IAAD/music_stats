<template>
  <div>
    <TrackHeader />
      <div style="margin-top: 5rem"></div>
    <TrackData />
  </div>
</template>

<script>
import TrackHeader from "../components/TrackHeader.vue";
import TrackData from "../components/TrackData.vue";

export default {
  name: "Info",
  components: {
    TrackHeader,
    TrackData
  }
};
</script>

<style scoped></style>
