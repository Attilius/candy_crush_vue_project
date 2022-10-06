<template>
  <div class="card" :style="{ visibility: visibility }">
    <div class="cover">
      <div class="exit" id="exit" @click="backToMain">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="buttonGroup">
        <div v-if="displayClaim" class="again" @click="toClaim">Claim</div>
        <div v-else class="again" @click="toContinue">Continue</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Gift",
    props: ["visibility"],

    data() {
        return {
            prizes: [50, 75, 100, 125, 150, 200, 250],
            displayClaim: true
        }
    },

    methods: {
      backToMain() {
        console.log('close and return')
      },

      toClaim() {
        this.displayClaim = false;
      },

      toContinue() {
        console.log('get prize')
      }
    }
}
</script>

<style>
.card {
  height: 515px;
  width: 515px;
  background: #fff8dc;
  position: absolute;
  left: 115px;
  top: 145px;
  border-radius: 20px;
  visibility: visible;
  z-index: 11;
}

.cover {
  height: 515px;
  width: 515px;
  background: url("../assets/images/level_end_background.png");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.buttonGroup {
  width: 100%;
  height: 10%;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Emilys Candy", cursive;
}

.exit,
.again {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff8dc;
  font-size: 33px;
  font-weight: 700;
  text-shadow: -2px 0 firebrick, 0 2px firebrick, 2px 0 firebrick,
    0 -2px firebrick;
  position: absolute;
}

.exit {
  background: url("../assets/images/magenta_button.png") no-repeat center;
  background-size: cover;
  height: 50px;
  width: 50px;
  top: 10px;
  right: 10px;
}

.exit:active {
  height: 48px;
  width: 48px;
}

.again {
  background: url("../assets/images/green_long_button.png") no-repeat center;
  background-size: cover;
  height: 70px;
  width: 150px;
  bottom: 50px;
}

.again:active {
  height: 68px;
  width: 148px;
}
</style>