<template>
  <div>
    <div class="d-flex justify-content-center">
      <img v-if="number === 0" src="../assets/icons/zero.png" />
      <div v-for="n in number % 5" class="circle"></div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div v-for="n in Math.floor(number / 5)" class="rectangle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MayanNumber",
  props: ["number"]
};
</script>

<style scoped>
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
