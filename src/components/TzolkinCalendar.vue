<template>
  <div id="calendarContainer">
    <img id="glyphes" class="gear" src="../assets/glyphes3dark.png" />
    <img id="tonalites" class="gear" src="../assets/tonalitesdark.png" />
  </div>
</template>

<script>
import moment from "moment";
const defaultEasing = function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b };
const constantEasing = function (x,t,b,c,d){ return c*(t/d)+b; };
export default {
  name: "TzolkinCalendar",
  props: ["date", "tonalite", "glyphe", "glyphes", "tonalites"],
  data: function() {
    return {
      refDate: moment("2019-07-13"),
      angleTonalites: 0,
      angleGlyphes: 0,
      kinNumber: 1
      /*oracle: {
              glyphe: "Dragon Rouge",
              tonalite: "Magnétique",
              guide: "Dragon Rouge",
              antipode: "Singe Bleu",
              occulte: "Soleil Jaune",
              analogue: "Miroir Blanc"
            },*/
    };
  },
  watch: {
    date: function(newDate, oldDate) {
      this.setDay(newDate, oldDate);
    }
  },
  mounted: function() {
    // var that = this;
    // var propellerGlyphes;
    // var propellerTonalites;
    // var initGlyphes = true;
    /*propellerGlyphes = $('#glyphes').propeller({
            inertia: 0.98,
            speed: 0,
            onRotate: function(){
              $("#tonalites").rotate({
                angle: this.angle * 20 / -13,
                duration: 0
              });
            },
            onDragStart: function(){
              this.dragStartAngle = this.angle;
            },
            onStop: function(){

            }
          });
          propellerTonalites = $('#tonalites').propeller({
            inertia: 0.98,
            speed: 0,
            onRotate: function(){
              $("#glyphes").rotate({
                angle: this.angle * 13 / -20,
                duration: 0,
              });
            },
            onDragStart: function(){
              this.dragStartAngle = this.angle;
            },
            onStop: function(){
            }
          });
          */
    const diff = moment().diff(this.refDate, "days") % 260;
    // var angles = {
    //   angleGlyphes: 0,
    //   angleTonalites: 0
    // };
    if (diff !== 0) {
      this.angle = this.plus(false, diff, true);
    }
  },
  methods: {
    setDay: function(newDate, oldDate) {
      var oldMomentDate = moment(oldDate)
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0);
      var newMomentDate = moment(newDate)
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0);
      var diff =
        (newMomentDate.diff(oldMomentDate, "days") % 260) -
        this.correctLeapYears(oldMomentDate, newMomentDate);
      if (diff !== 0) {
        this.plus(false, diff);
      }
    },
    correctLeapYears(oldMomentDate, newMomentDate) {
      var deltaLeapDays = 0;
      let fromDate = moment.min(oldMomentDate, newMomentDate);
      let toDate = moment.max(oldMomentDate, newMomentDate);
      var fromYear =
        fromDate.month() >= 2 ? fromDate.year() + 1 : fromDate.year();
      var toYear = toDate.month() < 2 ? toDate.year() : toDate.year() - 1;
      for (var i = fromYear; i <= toYear; i++) {
        if (moment([i]).isLeapYear()) {
          deltaLeapDays++;
        }
      }
      return oldMomentDate.isBefore(newMomentDate)
        ? deltaLeapDays
        : -deltaLeapDays;
    },
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
      var incrementedKin = (this.kinNumber + number) % 260;
      incrementedKin =
        incrementedKin < 0 ? 260 + incrementedKin : incrementedKin;
      this.kinNumber = incrementedKin === 0 ? 260 : incrementedKin;
    },
    updateOracle: function() {
      this.$emit("update:glyphe", this.glyphes[(this.kinNumber - 1) % 20]);
      this.$emit("update:tonalite", this.tonalites[(this.kinNumber - 1) % 13]);
    },
    raz: function() {
      let glyphesRAZClosest = 4680 * Math.ceil(this.angleGlyphes / 4680);
      let tonalitesRAZClosest = 7200 * Math.ceil(this.angleTonalites / 7200);
      $("#tonalites").rotate({
        angle: this.angleTonalites % 7200,
        duration: 2000,
        animateTo:
          this.kinNumber > 130
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
          this.kinNumber < 130
            ? glyphesRAZClosest
            : glyphesRAZClosest > 0
            ? glyphesRAZClosest + 4680
            : glyphesRAZClosest - 4680,
        easing: defaultEasing
      });
      this.angleGlyphes = 0;
      this.kinNumber = 1;
      this.updateOracle();
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
      this.updateOracle();
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
#glyphes {
  width: 45vw;
  top: 11vh;
}
#tonalites {
  width: 35vw;
  left: 42vw;
  top: 21vh;
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
