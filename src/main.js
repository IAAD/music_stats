import Vue from "vue";

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbvue/src/components/Waves.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
