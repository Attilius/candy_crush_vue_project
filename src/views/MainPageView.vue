<template>
  <div class="main">
    <Navbar />
    <Header :coins="coins" />
    <div class="body">
      <div class="body-left"></div>
      <div class="body-right"></div>
    </div>
    <div class="map">
      <div class="skin">
        <div class="shine rotate" id="shine"></div>
        <div class="gift shake" id="gift" @click="openGift"></div>
        <h3 v-if="waitingGift" class="waitingGift">{{ setGiftTimeCounter }}</h3>
        <Gift
          :visibility="giftVisibility"
          @updateGiftVisibility="
            (setGiftVisibility) => (giftVisibility = setGiftVisibility)
          "
          @updateWaitingGift="
            (setWaitingGift) => (waitingGift = setWaitingGift)
          "
          @updateCoins="(setCoins) => (coins += setCoins)"
        />
        <div class="levels successed-level" id="level-1" @click="start">
          <div class="level-stars three-stars"></div>
          1
        </div>
        <div class="levels actual-level pulse" id="level-2" @click="start">
          2
        </div>
        <div class="levels" id="level-3"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-4"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-5"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-6"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-7"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-8"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-9"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-10"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-11"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-12"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-13"><i class="fa-solid fa-lock"></i></div>
        <div class="levels" id="level-14"><i class="fa-solid fa-lock"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import router from "@/router/index.js";
import Gift from "@/components/Gift.vue";

export default {
  name: "MainPage",
  components: {
    Navbar,
    Header,
    Gift,
  },

  data() {
    return {
      giftVisibility: "hidden",
      waitingGift: false,
      coins: 382
    };
  },

  mounted() {
    this.timeCountDownOfNewGift();
  },

  watch: {
    waitingGift(newValue, oldValue) {
      if (newValue) {
        document.getElementById("shine").style.visibility = "hidden";
        document.getElementById("gift").classList.remove("shake");
        document.getElementById("gift").classList.remove("gift");
        document.getElementById("gift").classList.add("waiting-gift");
      } else {
        document.getElementById("shine").style.visibility = "visible";
        document.getElementById("gift").classList.add("shake");
        document.getElementById("gift").classList.add("gift");
        document.getElementById("gift").classList.remove("waiting-gift");
      }
    },
  },

  computed: {
    setGiftTimeCounter() {
      return this.$store.getters.giftTimeCounter;
    }
  },

  methods: {
    start(e) {
      if (this.$store.state.life > 0) {
        const routes = router.options.routes;
        const levelName = e.target.id.replace("-", "_");
        for (let i = 1; i < routes.length; i++) {
          if (routes[i].name === levelName) {
            location.hash = `/${levelName}`;
            location.reload();
          }
        }
      }
    },

    openGift() {
      this.giftVisibility = "visible";
    },

    changeGiftTimeCounterInStore(value) {
      this.$store.commit('changeGiftTimeCounter', value);
    },

    timeCountDownOfNewGift() {
      let hour = 0;
      let min = 0;
      let sec = 0;
      let timecounter = "";

      let h = "";
      let m = "";
      let s = "";

      const timer = setInterval(() => {
        if (this.$store.getters.giftTimeCounter !== '') {
        hour = parseInt(this.$store.getters.giftTimeCounter.split(':')[0].split('')[1]);
        
        if (parseInt(this.$store.getters.giftTimeCounter.split(':')[1]) > 9) {
          min = parseInt(this.$store.getters.giftTimeCounter.split(':')[1]);
        } else {
          min = parseInt(this.$store.getters.giftTimeCounter.split(':')[1].split('')[1]);
        }

        if (parseInt(this.$store.getters.giftTimeCounter.split(':')[2]) > 9) {
          sec = parseInt(this.$store.getters.giftTimeCounter.split(':')[2]);
        } else {
          sec = parseInt(this.$store.getters.giftTimeCounter.split(':')[2].split('')[1]);
          if (hour > 0 && min === 0 && sec === 0) {
          hour--;
          min = 59;
          sec = 60;
        }
          if (sec === 0 && min > 0) {
            min--;
            sec = 60;
          }
        }
      } else {
        hour = 2;
        min = 59;
        sec = 60;
      }

        if (sec > 0) {
          sec--;
          s = ":" + sec;
          if (sec < 10) {
            s = ":0" + sec;
          }
        }

        if (min < 10) {
          m = ":0" + min;
        } else {
          m = ":" + min;
        }

        if (hour < 10) {
          h = "0" + hour;
        } else {
          h = ":" + hour;
        }

        timecounter = h + m + s;

        if (hour === 0 && min === 0 && sec === 0) {
          clearInterval(timer);
          this.waitingGift = false;
          this.changeGiftTimeCounterInStore('');
        } else this.changeGiftTimeCounterInStore(timecounter);
      }, 1000);
    },
  },
};
</script>

<style>
.main {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  height: 97vh;
  width: 100%;
}

.body-left {
  height: 99vh;
  width: 100%;
  background: url("../assets/images/background.jpg") no-repeat left;
  background-position-x: 11%;
  background-position-y: -30%;
  background-size: 250%;
}

.body-right {
  height: 99vh;
  width: 100%;
  background: url("../assets/images/background.jpg") no-repeat left;
  background-position-x: 11%;
  background-position-y: -30%;
  background-size: 250%;
  transform: rotateY(180deg);
}

.map {
  width: 700px;
  height: 93vh;
  background: url("../assets/images/map.png") no-repeat center;
  background-size: cover;
  position: absolute;
  top: 52px;
  left: 450px;
}

.skin {
  width: 700px;
  height: 93vh;
  background: rgba(0, 0, 0, 0.1);
}

.levels {
  height: 60px;
  width: 60px;
  background: url("../assets/images/locked_level.png") no-repeat center;
  background-size: cover;
  font-family: "Emilys Candy", cursive;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff8dc;
  text-shadow: -1px 0 goldenrod, 0 1px goldenrod, 1px 0 goldenrod,
    0 -1px goldenrod;
  cursor: pointer;
}

#level-1 {
  position: absolute;
  top: 600px;
  left: 70px;
}

.actual-level {
  background: url("../assets/images/actual_level.png") no-repeat center;
  text-shadow: -1px 0 orangered, 0 1px orangered, 1px 0 orangered,
    0 -1px orangered;
  background-size: cover;
}

.successed-level {
  background: url("../assets/images/successed_level.png") no-repeat center;
  text-shadow: -1px 0 orangered, 0 1px orangered, 1px 0 orangered,
    0 -1px orangered;
  background-size: cover;
}

.pulse {
  transition: ease-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-name: pulse;
}

@keyframes pulse {
  from {
    height: 60px;
    width: 60px;
    font-size: 30px;
  }

  to {
    height: 66px;
    width: 66px;
    font-size: 35px;
  }
}

#level-2 {
  position: absolute;
  top: 520px;
  left: 80px;
}

#level-3 {
  position: absolute;
  top: 460px;
  left: 140px;
}

#level-4 {
  position: absolute;
  top: 430px;
  left: 230px;
}

#level-5 {
  position: absolute;
  top: 440px;
  left: 325px;
}

#level-6 {
  position: absolute;
  top: 440px;
  left: 420px;
}

#level-7 {
  position: absolute;
  top: 430px;
  left: 510px;
}

#level-8 {
  position: absolute;
  top: 350px;
  left: 530px;
}

#level-9 {
  position: absolute;
  top: 300px;
  left: 450px;
}

#level-10 {
  position: absolute;
  top: 285px;
  left: 350px;
}

#level-11 {
  position: absolute;
  top: 275px;
  left: 250px;
}

#level-12 {
  position: absolute;
  top: 230px;
  left: 170px;
}

#level-13 {
  position: absolute;
  top: 150px;
  left: 210px;
}

#level-14 {
  position: absolute;
  top: 80px;
  left: 270px;
}

.fa-lock {
  color: #4c4c4c;
  font-size: 16px;
}

.level-stars {
  height: 30px;
  width: 60px;
  position: absolute;
  top: -15px;
}

.three-stars {
  background: url("../assets/images/three_stars.png") no-repeat center;
  background-size: cover;
}

.two-stars {
  background: url("../assets/images/two_stars.png") no-repeat center;
  background-size: cover;
}

.one-star {
  background: url("../assets/images/one_star.png") no-repeat center;
  background-size: cover;
}

.shine {
  background: url("../assets/images/shine.png") no-repeat center;
  background-size: cover;
  height: 80px;
  width: 80px;
  position: absolute;
  top: 230px;
  left: 20px;
}

.gift {
  background: url("../assets/images/gift.png") no-repeat center;
  background-size: cover;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 245px;
  left: 35px;
}

.rotate {
  transition: ease;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}

.waiting-gift {
  background: url("../assets/images/waiting_gift.png") no-repeat center;
  background-size: cover;
  height: 100px;
  width: 100px;
  position: absolute;
  top: 220px;
  left: 10px;
}

.waitingGift {
  position: absolute;
  top: 280px;
  left: 20px;
  color: #fff8dc;
  text-align: center;
  font-family: "Emilys Candy", cursive;
  font-size: 20px;
  text-shadow: -2px 0 firebrick, 0 2px firebrick, 2px 0 firebrick,
    0 -2px firebrick;
}

.shake {
  transition: all ease;
  animation: shake 0.9s alternate infinite;
}

@keyframes shake {
  0% {
    transform: rotateZ(-10deg);
  }

  100% {
    transform: rotateZ(10deg);
  }
}
</style>
