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
            v-model="$store.state.date"
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
            {{ $store.getters.glyphe }} {{ $store.getters.tonalite }}
            <span v-if="$store.getters.leapDay">
              <font-awesome-icon
                icon="exclamation-triangle"
                class="text-warning"
                v-b-popover.hover.bottom="
                  'Attention année bissextile. L\'oracle indiqué est valable à partir de 12h. Avant 12h, se référer à l\'oracle de la veille.'
                "
              />
            </span>
          </h2>
        </div>
      </div>
    </div>

    <TzolkinCalendar/>
    <TzolkinOracle/>
  </div>
</template>

<script>
// @ is an alias to /src
import TzolkinCalendar from "@/components/TzolkinCalendar.vue";
import TzolkinOracle from "@/components/TzolkinOracle.vue";
import Datepicker from "vuejs-datepicker";
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
      this.$store.commit("addDay", amount);
    }
  },
  data: function() {
    return {
      fr: FR
    };
  }
};
</script>
