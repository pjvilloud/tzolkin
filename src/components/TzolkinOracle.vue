<template>
  <table id="oracleTable">
    <tr>
      <td></td>
      <td><img class="tonaliteImg" v-bind:src="require(`@/assets/icons/${nbTonalite}.png`)"></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td><img class="glypheImg" v-bind:src="require(`@/assets/icons/${guide}.png`)"></td>
      <td></td>
    </tr>
    <tr>
      <td><img class="glypheImg" v-bind:src="require(`@/assets/icons/${antipode}.png`)"></td>
      <td><img class="glypheImg" v-bind:src="require(`@/assets/icons/${destinee}.png`)"></td>
      <td><img class="glypheImg" v-bind:src="require(`@/assets/icons/${analogue}.png`)"></td>
    </tr>
    <tr>
      <td></td>
      <td><img class="glypheImg" v-bind:src="require(`@/assets/icons/${occulte}.png`)"></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
    export default {
        name: "TzolkinOracle",
        props: ["glyphes", "destinee", "tonalite", "tonalites"],
        data: function () {
            return {
                analogues: [
                    "Miroir Blanc",
                    "Terre Rouge",
                    "Guerrier Jaune",
                    "Aigle Bleu",
                    "Magicien Blanc",
                    "Voyageur du Ciel Rouge",
                    "Humain Jaune",
                    "Singe Bleu",
                    "Chien Blanc",
                    "Lune Rouge",
                    "Etoile Jaune",
                    "Main Bleue",
                    "Enlaceur des Mondes Blanc",
                    "Serpent Rouge",
                    "Graîne Jaune",
                    "Nuit Bleue",
                    "Vent Blanc",
                    "Dragon Rouge",
                    "Soleil Jaune",
                    "Tempête Bleue"
                ],
                occultes: [
                    "Soleil Jaune",
                    "Tempête Bleue",
                    "Miroir Blanc",
                    "Terre Rouge",
                    "Guerrier Jaune",
                    "Aigle Bleu",
                    "Magicien Blanc",
                    "Voyageur du Ciel Rouge",
                    "Humain Jaune",
                    "Singe Bleu",
                    "Chien Blanc",
                    "Lune Rouge",
                    "Etoile Jaune",
                    "Main Bleue",
                    "Enlaceur des Mondes Blanc",
                    "Serpent Rouge",
                    "Graîne Jaune",
                    "Nuit Bleue",
                    "Vent Blanc",
                    "Dragon Rouge",
                ]
            }
        },
        computed: {
            nbTonalite: function(){
                return this.tonalites.indexOf(this.tonalite) + 1;
            },
            guide: function(){
                var nbTonalite = this.tonalites.indexOf(this.tonalite) + 1;
                if(nbTonalite % 5 === 1){
                    return this.destinee;
                } else if(nbTonalite % 5 === 2){
                    return this.glyphes[(this.glyphes.indexOf(this.destinee) + 12) % 20];
                } else if(nbTonalite % 5 === 3){
                    return this.glyphes[(this.glyphes.indexOf(this.destinee) + 4) % 20];
                } else if(nbTonalite % 5 === 4){
                    return this.glyphes[(this.glyphes.indexOf(this.destinee) + 16) % 20];
                } else if(nbTonalite % 5 === 0){
                    return this.glyphes[(this.glyphes.indexOf(this.destinee) + 8) % 20];
                }
            },
            analogue: function(){
                return this.analogues[this.glyphes.indexOf(this.destinee)];
            },
            occulte: function(){
                return this.occultes[this.glyphes.indexOf(this.destinee)];
            },
            antipode: function(){
                return this.glyphes[(this.glyphes.indexOf(this.destinee) + 10) % 20];
            },
        },
        beforeMount: function(){

        }
    }
</script>

<style scoped lang="scss">
  #oracleTable {
    text-align: center;
    margin-top: 12vh;
    margin-left: auto;
    margin-right: 1vw;
  }

  .glypheImg {
    width: 7vw;
  }

  .tonaliteImg {
    max-width: 7vw;
  }
</style>