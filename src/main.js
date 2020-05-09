import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/datepicker-vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuex from "vuex";
import moment from "moment";

library.add(faCodeBranch);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faExclamationTriangle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    date: Date.now(),
    kinNumber: 1,
    glyphes: [
      "Dragon Rouge",
      "Vent Blanc",
      "Nuit Bleue",
      "Graîne Jaune",
      "Serpent Rouge",
      "Enlaceur des Mondes Blanc",
      "Main Bleue",
      "Etoile Jaune",
      "Lune Rouge",
      "Chien Blanc",
      "Singe Bleu",
      "Humain Jaune",
      "Voyageur du Ciel Rouge",
      "Magicien Blanc",
      "Aigle Bleu",
      "Guerrier Jaune",
      "Terre Rouge",
      "Miroir Blanc",
      "Tempête Bleue",
      "Soleil Jaune"
    ],
    tonalites: [
      "Magnétique",
      "Lunaire",
      "Electrique",
      "Auto-existant(e)",
      "Harmonique",
      "Rythmique",
      "Résonant(e)",
      "Galactique",
      "Solaire",
      "Planétaire",
      "Spectral(e)",
      "Cristallin(e)",
      "Cosmique"
    ]
  },
  getters: {
    leapDay: state => {
      return (
        moment(state.date).month() === 1 && moment(state.date).date() === 29
      );
    },
    tonalite: state => {
      return state.tonalites[(state.kinNumber - 1) % 13];
    },
    glyphe: state => {
      return state.glyphes[(state.kinNumber - 1) % 20];
    },
    nbTonalite: (state, getters) => {
      return state.tonalites.indexOf(getters.tonalite) + 1;
    }
  },
  mutations: {
    addDay(state, amount) {
      state.date = moment(state.date)
        .add(amount, "days")
        .toDate();
    },
    updateKinNumber(state, kinNumber) {
      state.kinNumber = kinNumber;
    },
    updateGlyphe(state, glyphe) {
      state.glyphe = glyphe;
    },
    updateTonalite(state, tonalite) {
      state.tonalite = tonalite;
    }
  }
});

window.$ = require("jquery");
window.jQuery = require("jquery");
require("./assets/jqueryRotate");
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
