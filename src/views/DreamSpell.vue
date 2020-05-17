<template>
  <div>
    <div class="container mt-3">
      <h1>L'onde enchantée</h1>
      <p class="text-justify"></p>
      <div class="row mb-3">
        <div class="col">
          <label>Date de début de l'onde enchantée</label>
          <datepicker
            calendar-class="tzolkinCal"
            :bootstrap-styling="true"
            :format="'d MMMM yyyy'"
            :value="$store.state.date"
            :language="fr"
            name="date"
            @selected="updateGlobalDate"
          >
          </datepicker>
        </div>
        <div class="col">
          <label>Date à l'intérieur de l'onde enchantée</label>
          <datepicker
            calendar-class="tzolkinCal"
            :bootstrap-styling="true"
            :format="'d MMMM yyyy'"
            v-model="dateInDreamspell"
            :language="fr"
            @selected="updateDreamspellDate"
            :disabled-dates="disabledDates"
            name="dateInDreamspell"
          >
          </datepicker>
        </div>
      </div>
      <div class="row mb-3 border-bottom" v-for="(dreamspell, index) in dreamspells">
        <div
          class="col-2 text-center"
          v-bind:class="{ 'bg-secondary': index === dreamspellIndex }"
        >
          <div>
            <img
              class="tonaliteImg"
              v-bind:src="require(`@/assets/icons/${index + 1}.png`)"
            />
          </div>
          <div>
            <img
              class="glypheImg"
              v-bind:src="require(`@/assets/icons/${dreamspell}.png`)"
            />
          </div>
        </div>
        <div class="col-10 d-flex align-items-center">
          <h1>{{ dreamspell }} {{ $store.state.tonalites[index % 13] }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import FR from "vuejs-datepicker/dist/locale/translations/fr";
import moment from "moment";

export default {
  name: "dreamSpell",
  components: {
    Datepicker
  },
  data: function() {
    return {
      fr: FR,
      dreamspells: [],
      dreamspellIndex: 0,
      dateInDreamspell: this.$store.state.date
    };
  },
    computed: {
      disabledDates(){
          return {
              to: moment(this.$store.state.date).add(-1, 'days').toDate(),
              from: moment(this.$store.state.date)
                  .add(364, "days")
                  .toDate()
          };
      }
    },
  created() {
    this.unwatch = this.$store.watch(
        (state, getters) => getters.kin,
      kin => {
        this.calculateDreamSpell(kin);
      }
    );
  },
  mounted() {
    this.calculateDreamSpell(this.$store.getters.kin);
  },
  beforeDestroy() {
    this.unwatch();
  },
  methods: {
    calculateDreamSpell: function(kinNumber) {
      let dreamspellValues = [];
      let glypheIndex = (kinNumber % 20) - 1;
      for (let i = 0; i < 13; i++) {
        let tmpGlypheIndex =
          (glypheIndex - (this.$store.getters.nbTonalite - 1) + i) % 20;
        tmpGlypheIndex =
          tmpGlypheIndex < 0 ? 20 + tmpGlypheIndex : tmpGlypheIndex;
        dreamspellValues.push(this.$store.state.glyphes[tmpGlypheIndex]);
      }
      this.dreamspells = dreamspellValues;
    },
    updateGlobalDate: function(date) {
      this.$store.commit(
        "updateDate",
        Math.ceil(moment(date).diff(moment(this.$store.state.date), "days", true))
      );
      this.dateInDreamspell = date;
    },
    updateDreamspellDate: function(date) {
      this.dateInDreamspell = date;
      this.dreamspellIndex =
        Math.abs(
          Math.ceil(
            moment(date).diff(moment(this.$store.state.date), "days", true) / 28
          )
        ) - 1;
    }
  }
};
</script>

<style scoped lang="scss">
.glypheImg {
  width: 7vw;
}

.tonaliteImg {
  max-width: 7vw;
}
</style>
