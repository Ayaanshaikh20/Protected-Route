import Vue from "vue";
import App from "./App.vue";
import router from "./route.js";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router
}).$mount("#app");
