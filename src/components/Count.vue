<template>
  <div class="container mt-3">
    <h1>La numérotation maya</h1>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <p>Entrer une valeur décimale pour avoir son équivalent en numérotation maya</p>
        <b-form-input v-on:change="calculate20(number, true, 0)" v-model="number" type="number" placeholder="Entrer un nombre" min="0" class="mb-3"></b-form-input>
        <div v-if="mayanNumbers.length > 0">
          <h3>Décomposition</h3>
          <ul id="example-1" class="d-flex flex-column-reverse">
            <li v-for="(mayanNumber, index) in mayanNumbers">
              20<sup><span v-if="index >= 2">{{index - 1}}</span><span v-else>{{index}}</span></sup> x <span v-if="index >= 2"> 18 x </span> {{ mayanNumber }}
            </li>
          </ul>
        </div>

      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="d-flex flex-column-reverse">
          <div v-for="(mayanNumber, index) in mayanNumbers" class="mb-3">
            <div class="d-flex justify-content-center">
              <img v-if="mayanNumber === 0" src="../assets/icons/zero.png"/>
              <div v-for="n in mayanNumber % 5" class="circle"></div>
            </div>
            <div class="d-flex flex-column align-items-center">
              <div v-for="n in Math.floor(mayanNumber / 5)" class="rectangle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Count",
        data: function() {
            return {
                mayanNumbers: [],
                number: 0
            }
        },
        methods: {
            calculate20(nb, raz, i){
                let base = i === 2 ? 18 : 20;
                if(raz){
                    this.mayanNumbers = [];
                }
                let quotient = Math.floor(nb / base);
                let reste = nb % base;
                this.mayanNumbers.push(reste);
                if(quotient !== 0) {
                  this.calculate20(quotient, false, ++i);
                }
            },
        }
    }
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