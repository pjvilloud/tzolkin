import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/datepicker-vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCodeBranch);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faExclamationTriangle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

window.$ = require("jquery");
window.jQuery = require("jquery");
require("./assets/jqueryRotate");
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
