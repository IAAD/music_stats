<template>
  <div class="home">
    <Header />
      <Tracks/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Tracks from "@/components/Tracks.vue";
import axios from 'axios'

export default {
  name: "home",
  components: {
    Header,
    Tracks
  },
  data() {
    return {
      tracks: []
    };
  },
  mounted() {
    const session_url = 'https://accounts.spotify.com/api/token';
    const username = '88ab0ee5549d4d5282676a11604f2545';
    const password = 'c96c13c6d3104b6299a4a7765d76f642';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
    const requestBody ={
      grant_type: 'client_credentials'
    }
    const config = {
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*',
        'Authorization': basicAuth
      }
    }
    axios.post(session_url, requestBody, config).then(function(response) {
      console.log(response.data.access_token);
    }).catch(function(err) {
      console.log(err);
    })
  }
};
</script>
