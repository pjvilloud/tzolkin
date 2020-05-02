<template>
  <div>
    <div class="container">
      <div class="row mt-2">
        <div class="col-2 text-right">
          <button class="btn btn-primary" v-on:click="addDay(-1)">
            <font-awesome-icon icon="chevron-left" />
          </button>
        </div>
        <div class="col">
          <datepicker
            calendar-class="tzolkinCal"
            :bootstrap-styling="true"
            :format="'d MMMM yyyy'"
            v-model="date"
            :language="fr"
            name="date"
          >
          </datepicker>
        </div>
        <div class="col-2">
          <button class="btn btn-primary" v-on:click="addDay(1)">
            <font-awesome-icon icon="chevron-right" />
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-center">
          <h2 class="text-info">
            {{ glyphe }} {{ tonalite }}
            <span v-if="leapDay">
              <font-awesome-icon
                      icon="exclamation-triangle"
                      class="text-warning"
                      v-b-popover.hover.bottom="'Attention année bissextile. L\'oracle indiqué est valable à partir de 12h. Avant 12h, se référer à l\'oracle de la veille.'"
              />
            </span>
          </h2>
        </div>
      </div>
    </div>

    <TzolkinCalendar
      :glyphes="glyphes"
      :tonalites="tonalites"
      :destinee="glyphe"
      :tonalite="tonalite"
      v-on:update:tonalite="tonalite = $event"
      :leapDay="leapDay"
      v-on:update:leapDay="leapDay = $event"
      :glyphe="glyphe"
      v-on:update:glyphe="glyphe = $event"
      :date="date"
    ></TzolkinCalendar>

    <TzolkinOracle
      :glyphes="glyphes"
      :tonalites="tonalites"
      :destinee="glyphe"
      :tonalite="tonalite"
    ></TzolkinOracle>
  </div>
</template>

<script>
// @ is an alias to /src
import TzolkinCalendar from "@/components/TzolkinCalendar.vue";
import TzolkinOracle from "@/components/TzolkinOracle.vue";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import FR from "vuejs-datepicker/dist/locale/translations/fr";
import { VBTooltipPlugin } from "bootstrap-vue";

export default {
  name: "home",
  components: {
    TzolkinCalendar,
    Datepicker,
    TzolkinOracle
  },
    directives: {
      "b-tooltip": VBTooltipPlugin
    },
  methods: {
    addDay(amount) {
      this.date = moment(this.date)
        .add(amount, "days")
        .toDate();
      if (moment(this.date).month() === 1 && moment(this.date).date() === 29) {
        this.leapDay = true;
      } else {
        this.leapDay = false;
      }
    }
  },
  data: function() {
    return {
      date: Date.now(),
      tonalite: "",
      glyphe: "",
      fr: FR,
      leapDay: false,
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
    };
  }
};
</script>
