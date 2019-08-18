import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/datepicker-vue";
import App from "./App.vue";
import router from "./router";

window.$ = require("jquery");
window.jQuery = require("jquery");
require("./assets/jqueryRotate");
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
