<template>
  <div id="calendarContainer" class="d-none d-xl-block">
    <h2 class="text-center text-info">Kin {{ $store.getters.kin }}</h2>
    <img id="glyphes" class="gear" src="../assets/glyphes3dark.png" />
    <img id="tonalites" class="gear" src="../assets/tonalitesdark.png" />
  </div>
</template>

<script>
import moment from "moment";
const defaultEasing = function(x, t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
const constantEasing = function(x, t, b, c, d) {
  return c * (t / d) + b;
};
export default {
  name: "TzolkinCalendar",
  data: function() {
    return {
      refDate: moment("2019-07-13"),
      angleTonalites: 0,
      angleGlyphes: 0
    };
  },
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters.kin,
      (newKin, oldKin) => {
        this.plus(false, newKin - oldKin);
      }
    );
  },
  beforeDestroy() {
    this.unwatch();
  },
  mounted: function() {
    this.angle = this.plus(false, this.$store.getters.kin - 1, true);
  },
  methods: {
    stopRotate: function() {
      clearInterval(this.rotate);
      $("#tonalites").stopRotate();
      $("#glyphes").stopRotate();
    },
    endlessRotation: function() {
      var that = this;
      this.rotate = setInterval(function() {
        that.plus(true);
      }, 1000);
    },
    incrementKinBy: function(number) {
      var incrementedKin = (this.$store.state.kinNumber + number) % 260;
      incrementedKin =
        incrementedKin < 0 ? 260 + incrementedKin : incrementedKin;
      this.$store.commit(
        "updateKinNumber",
        incrementedKin === 0 ? 260 : incrementedKin
      );
    },
    raz: function() {
      let glyphesRAZClosest = 4680 * Math.ceil(this.angleGlyphes / 4680);
      let tonalitesRAZClosest = 7200 * Math.ceil(this.angleTonalites / 7200);
      $("#tonalites").rotate({
        angle: this.angleTonalites % 7200,
        duration: 2000,
        animateTo:
          this.$store.state.kinNumber > 130
            ? tonalitesRAZClosest
            : tonalitesRAZClosest > 0
            ? tonalitesRAZClosest - 7200
            : tonalitesRAZClosest + 7200,
        easing: defaultEasing
      });
      this.angleTonalites = 0;

      $("#glyphes").rotate({
        angle: this.angleGlyphes % 4680,
        duration: 2000,
        animateTo:
          this.$store.state.kinNumber < 130
            ? glyphesRAZClosest
            : glyphesRAZClosest > 0
            ? glyphesRAZClosest + 4680
            : glyphesRAZClosest - 4680,
        easing: defaultEasing
      });
      this.angleGlyphes = 0;
      this.$store.commit("updateKinNumber", 1);
    },
    plus: function(ease, number = 1, noEase) {
      this.incrementKinBy(number);
      var duration =
        Math.abs(number) === 1 ? 1000 : 1000 + (10000 * Math.abs(number)) / 260;
      var angleTonalite = this.angleTonalites + (360 / 13) * number;
      $("#tonalites").rotate({
        angle: noEase ? angleTonalite : this.angleTonalites,
        duration: noEase ? 0 : duration,
        animateTo: noEase ? null : angleTonalite,
        easing: noEase ? null : ease === true ? constantEasing : defaultEasing
      });
      this.angleTonalites = angleTonalite;

      var angleGlyphe = this.angleGlyphes - (360 / 20) * number;
      $("#glyphes").rotate({
        angle: noEase ? angleGlyphe : this.angleGlyphes,
        duration: noEase ? 0 : duration,
        animateTo: noEase ? null : angleGlyphe,
        easing: noEase ? null : ease === true ? constantEasing : defaultEasing
      });
      this.angleGlyphes = angleGlyphe;
      return {
        angleGlyphes: this.angleGlyphes,
        angleTonalites: this.angleTonalites
      };
    }
  }
};
</script>

<style scoped lang="scss">
/* CSS3 keyframes */
@-webkit-keyframes ckw {
  0% {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes ckw {
  0% {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes cckw {
  0% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
  100% {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}
@-moz-keyframes cckw {
  0% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
  100% {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}
/* gears */
.gear {
  float: none;
  position: fixed;
  text-align: center;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction: normal;
  -moz-animation-delay: 0;
  -moz-animation-play-state: running;
  -moz-animation-fill-mode: forwards;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-delay: 0;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
}

@media (min-width: 1200px) {
  #glyphes {
    top: 14vh;
  }
}

@media (min-width: 1600px) {
  #glyphes {
    top: 11vh;
  }
}

#glyphes {
  width: 45vw;
  z-index: -1;
}
#tonalites {
  width: 35vw;
  left: 42vw;
  top: 21vh;
  z-index: -1;
}

.tzolkinCal {
  right: 0;
}

.cckw {
  -moz-animation-name: cckw;
  -moz-animation-duration: 13s;
  -webkit-animation-name: cckw;
  -webkit-animation-duration: 13s;
}

.ckw {
  -moz-animation-name: ckw;
  -moz-animation-duration: 20s;
  -webkit-animation-name: ckw;
  -webkit-animation-duration: 20s;
}
</style>
