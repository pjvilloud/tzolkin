<template>
  <div>
    <div class="container mt-3">
      <h1>Les nombres mayas</h1>
      <p class="text-justify">
        Les mayas utilisent plusieurs systèmes de comptage dont beaucoup de
        traces ont aujourd'hui disparues. On sait cependant qu'ils n'utilisaient
        pas un système décimal, mais vigésimal (base 20, représenté par les 10
        doigts de la main et les 10 orteils des pieds). La représentation des 20
        chiffres est la suivante :
      </p>
      <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2"
        >Voir le tableau de correspondance</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <table class="table table-striped text-center">
          <tbody>
            <tr>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td><img src="../assets/icons/zero.png" alt="" /></td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </b-collapse>
      <div class="row">
        <div class="col-8">
          <p>
            Pour les nombres supérieurs à 19, on utilisera deux symboles
            disposés verticalement (de bas en haut). Ainsi 26 en système décimal
            s'écrit en système vigésimal maya :
            <code>20<sup>1</sup> x <strong>1</strong> 20<sup>0</sup> x <strong>6</strong></code>
          </p>
        </div>
        <div class="col">
          <div class="mb-2">
            <div class="d-flex justify-content-center">
              <div class="circle"></div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="circle"></div>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="rectangle"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <hr>
      </div>
      <div class="row">
        <div class="col-8">
          <p class="text-justify">
            Cependant, pour écrire des gros chiffres, ils utilisent le même
            système que pour le compte long qui est le système vigésimal
            légèrement modifiés. En effet, au lieu d'utiliser la base 20 pour
            chaque <em>chiffre</em>, ils utilisent une base 18 pour le 3<sup
              >e</sup
            >
            chiffre (plus d'informations ici). Ainsi, 406 en système décimal
            s'écrit :
            <code
              >20<sup>1</sup> x 18 x <strong>1</strong> + 20<sup>1</sup> x <strong>2</strong> + 20<sup>0</sup> x
              <strong>6</strong></code
            >
          </p>
        </div>
        <div class="col">
          <div class="mb-2">
            <div class="d-flex justify-content-center">
              <div class="circle"></div>
            </div>
          </div>
          <div class="mb-2">
            <div class="d-flex justify-content-center">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="circle"></div>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="rectangle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-2">
      <div class="row">
        <p>
          Entrer une valeur décimale pour avoir son équivalent en numérotation
          maya
        </p>
        <b-form-input
                v-on:change="calculate20(number, true, 0)"
                v-model="number"
                type="number"
                placeholder="Entrer un nombre"
                min="0"
                class="mb-3"
        ></b-form-input>
        <div class="col-sm-12 col-lg-8">
          <div v-if="mayanNumbers.length > 0">
            <h3>Décomposition</h3>
            <ul id="example-1" class="d-flex flex-column-reverse">
              <li v-for="(mayanNumber, index) in mayanNumbers">
                20<sup
                  ><span v-if="index >= 2">{{ index - 1 }}</span
                  ><span v-else>{{ index }}</span></sup
                >
                x <span v-if="index >= 2"> 18 x </span> <strong>{{ mayanNumber }}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="d-flex flex-column-reverse">
            <div v-for="(mayanNumber, index) in mayanNumbers" class="mb-3">
              <div class="d-flex justify-content-center">
                <img v-if="mayanNumber === 0" src="../assets/icons/zero.png" />
                <div v-for="n in mayanNumber % 5" class="circle"></div>
              </div>
              <div class="d-flex flex-column align-items-center">
                <div
                  v-for="n in Math.floor(mayanNumber / 5)"
                  class="rectangle"
                ></div>
              </div>
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
    };
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
