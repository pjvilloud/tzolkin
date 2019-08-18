<template>
  <div>
    <div class="container">
      <div class="row mt-2">
        <div class="col text-right">
          <button class="btn btn-primary" v-on:click="addDay(-1)"><font-awesome-icon icon="chevron-left"/></button>
        </div>
        <div class="col">
          <datepicker
                  calendar-class="tzolkinCal"
                  :bootstrap-styling="true"
                  :full-month-name="true"
                  v-model="date"
                  :language="fr"
                  name="date">
          </datepicker>
        </div>
        <div class="col">
          <button class="btn btn-primary" v-on:click="addDay(1)"><font-awesome-icon icon="chevron-right"/></button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col text-center">
          <h2 class="text-info">{{glyphe}} {{tonalite}}</h2>
        </div>
      </div>
    </div>

    <TzolkinCalendar
      :glyphes="glyphes"
      :tonalites="tonalites"
      :destinee="glyphe"
      :tonalite="tonalite"
      v-on:update:tonalite="tonalite = $event"
      :glyphe="glyphe"
      v-on:update:glyphe="glyphe = $event"
      :date="date"
    ></TzolkinCalendar>

    <TzolkinOracle
            :glyphes="glyphes"
            :tonalites="tonalites"
            :destinee="glyphe"
            :tonalite="tonalite"></TzolkinOracle>
  </div>
</template>

<script>
// @ is an alias to /src
import TzolkinCalendar from "@/components/TzolkinCalendar.vue";
import TzolkinOracle from "@/components/TzolkinOracle.vue";
import Datepicker from 'vuejs-datepicker';
import moment from "moment";
import FR from 'vuejs-datepicker/dist/locale/translations/fr';

export default {
  name: "home",
  components: {
    TzolkinCalendar,
    Datepicker,
    TzolkinOracle
  },
  methods: {
    addDay(amount){
        this.date = moment(this.date).add(amount, 'days').toDate();
    }
  },
  data: function() {
    return {
      date: Date.now(),
      tonalite: "",
      glyphe: "",
      fr: FR,
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
        "Spectrale",
        "Cristallin(e)",
        "Cosmique"
      ]
    };
  }
};
</script>
