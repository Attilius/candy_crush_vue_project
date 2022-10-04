<template>
  <div class="main">
    <Navbar />
    <Header />
    <div class="body">
      <div class="body-left"></div>
      <div class="body-right"></div>
    </div>
    <div class="map">
      <div class="skin">
        <div class="shine">
          <div class="gift"></div>
        </div>
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

export default {
  name: "MainPage",
  components: {
    Navbar,
    Header,
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
    }
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
</style>
