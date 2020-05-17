<template>
  <div class="row">
    <div class="col-sm-12 col-lg-8">
      <div v-if="mayanNumbers.length > 0">
        <h3>Décomposition</h3>
        <ul id="example-1" class="d-flex flex-column-reverse">
          <li v-for="(mayanNumber, index) in mayanNumbers">
            20<sup
              ><span v-if="index >= 2">{{ index - 1 }}</span
              ><span v-else>{{ index }}</span></sup
            >
            x <span v-if="index >= 2"> 18 x </span>
            <strong>{{ mayanNumber }}</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-sm-12 col-lg-4">
      <div class="d-flex flex-column-reverse">
        <div v-for="(mayanNumber, index) in mayanNumbers" class="mb-3">
          <MayanNumber :number="mayanNumber" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MayanNumber from "./MayanNumber";
export default {
  name: "MayanNumberDetails",
  props: ["number"],
  components: {MayanNumber},
  data: function() {
    return {
      mayanNumbers: []
    };
  },
  watch: {
    number: function(newNumber) {
      this.calculate20(newNumber, true, 0);
    }
  },
  methods: {
    calculate20(nb, raz, i) {
      let base = i === 1 ? 18 : 20;
      if (raz) {
        this.mayanNumbers = [];
      }
      let quotient = Math.floor(nb / base);
      let reste = nb % base;
      this.mayanNumbers.push(reste);
      if (quotient !== 0) {
        this.calculate20(quotient, false, ++i);
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 6em;
}

.rectangle {
  margin: 0.2em;
  width: 6em;
  height: 1em;
  background: black;
}

.circle {
  margin: 0.2em;
  width: 1em;
  height: 1em;
  background: black;
  border-radius: 50%;
}
</style>
