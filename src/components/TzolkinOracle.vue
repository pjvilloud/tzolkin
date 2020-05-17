<template>
  <table id="oracleTable">
    <tr>
      <td></td>
      <td>
        <img
          class="tonaliteImg" v-if="$store.getters.nbTonalite !== 0"
          v-bind:src="
            require(`@/assets/icons/${$store.getters.nbTonalite}.png`)
          "
          v-b-popover.hover.top.html="
            'Cheminement en treize étapes permettant de répondre à la question posée par l’<strong>essence</strong>, en s’appuyant sur son <strong>pouvoir</strong>, son mode d’<strong>action</strong> et les différents alliés énergétiques.<ul><li>Question : ' +
              $store.state.questions[$store.getters.nbTonalite - 1] +
              '</li><li>Pouvoir : ' +
              pouvoirs[$store.getters.nbTonalite - 1] +
              '</li><li>Action : ' +
              actions[$store.getters.nbTonalite - 1] +
              '</li><li>Essence : ' +
              essences[$store.getters.nbTonalite - 1] +
              '</li></ul>'
          "
          :title="'Tonalité n°' + $store.getters.nbTonalite + ' : ' + $store.getters.tonalite"
        />
      </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <img
          class="glypheImg"
          v-if="guide"
          v-bind:src="require(`@/assets/icons/${guide}.png`)"
          v-b-popover.hover.top="'Ton guide, l’énergie qui t’inspire.'"
          :title="'Guide : ' + guide"
        />
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <img
          class="glypheImg"
          v-if="antipode"
          v-bind:src="require(`@/assets/icons/${antipode}.png`)"
          v-b-popover.hover.top="
            'Ton opposé, l’énergie avec laquelle tu es le plus en conflit mais qui te complémente, qui t’aide à évoluer'
          "
          :title="'Antipode : ' + antipode"
        />
      </td>
      <td>
        <img
          class="glypheImg"
          v-if="$store.getters.glyphe"
          v-bind:src="require(`@/assets/icons/${$store.getters.glyphe}.png`)"
          v-b-popover.hover.top="
            'Le kin de destinée est le glyphe du jour que l’on utilise également pour déterminer ses alliés énergétiques'
          "
          :title="'Kin de destinée : ' + $store.getters.glyphe"
        />
      </td>
      <td>
        <img
          class="glypheImg"
          v-if="analogue"
          v-bind:src="require(`@/assets/icons/${analogue}.png`)"
          v-b-popover.hover.top="
            'Ton allié conscient, l’énergie qui t’encourage, qui t’accompagne'
          "
          :title="'Analogue : ' + analogue"
        />
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <img
          class="glypheImg"
          v-bind:src="require(`@/assets/icons/${occulte}.png`)"
          v-b-popover.hover.top="
            'L’occulte est ton allié inconscient, l’énergie qui surgit sans prévenir.'
          "
          :title="'Occulte : ' + occulte"
        />
      </td>
      <td></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "TzolkinOracle",
  data: function() {
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
        "Dragon Rouge"
      ],
      pouvoirs: [
        "unifie",
        "polarise",
        "active",
        "définit",
        "commande",
        "organise",
        "canalise",
        "harmonise",
        "pulse",
        "perfectionne",
        "dissous",
        "dédie",
        "confronte"
      ],
      actions: [
        "attire",
        "stabilise",
        "unifie",
        "mesure",
        "prend le pouvoir",
        "équilibre",
        "inspire",
        "modèle",
        "réalise",
        "produit",
        "s'abandonne",
        "universalise",
        "transcende"
      ],
      essences: [
        "le but",
        "le défi",
        "le service",
        "la forme",
        "la radiance",
        "l'égalité",
        "l'harmonie",
        "l'intégrité",
        "l'intention",
        "la manifestation",
        "la libération",
        "la coopération",
        "la présence"
      ]
    };
  },
  computed: {
    guide: function() {
      if (this.$store.getters.nbTonalite % 5 === 1) {
        return this.$store.getters.glyphe;
      } else if (this.$store.getters.nbTonalite % 5 === 2) {
        return this.$store.state.glyphes[
          (this.$store.state.glyphes.indexOf(this.$store.getters.glyphe) + 12) %
            20
        ];
      } else if (this.$store.getters.nbTonalite % 5 === 3) {
        return this.$store.state.glyphes[
          (this.$store.state.glyphes.indexOf(this.$store.getters.glyphe) + 4) % 20
        ];
      } else if (this.$store.getters.nbTonalite % 5 === 4) {
        return this.$store.state.glyphes[
          (this.$store.state.glyphes.indexOf(this.$store.getters.glyphe) + 16) %
            20
        ];
      } else if (this.$store.getters.nbTonalite % 5 === 0) {
        return this.$store.state.glyphes[
          (this.$store.state.glyphes.indexOf(this.$store.getters.glyphe) + 8) % 20
        ];
      }
    },
    analogue: function() {
      return this.analogues[
        this.$store.state.glyphes.indexOf(this.$store.getters.glyphe)
      ];
    },
    occulte: function() {
      return this.occultes[
        this.$store.state.glyphes.indexOf(this.$store.getters.glyphe)
      ];
    },
    antipode: function() {
      return this.$store.state.glyphes[
        (this.$store.state.glyphes.indexOf(this.$store.getters.glyphe) + 10) % 20
      ];
    }
  }
};
</script>

<style scoped lang="scss">
@media (min-width: 1200px) {
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
}
@media (max-width: 1199px) {
  #oracleTable {
    text-align: center;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
  }

  .glypheImg {
    max-width: 30vw;
    max-height: 20vh;
  }

  .tonaliteImg {
    max-width: 30vw;
  }
}
</style>
