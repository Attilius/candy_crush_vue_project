<template>
  <div class="back" :style="{ visibility:visibility }">
    <div class="levelEndCover">
      <h1 id="level">Level 1</h1>
      <div class="exit" id="exit" @click="backToMain">
      <i class="fa-solid fa-xmark"></i>
    </div>
      <h2>You lose!</h2>
      <div class="lose">
        <h2 class="loseLife">-1</h2>
        <img
          src="../assets/images/broken-heart.png"
          id="brokenHeart"
          alt="broken heart"
        />
      </div>
      <div class="buttonGroup">
        <div class="again" @click="retryLevel">Retry</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelEndBoard",
  props: ['visibility'],

  methods: {
    backToMain() {
        location.href = "/"
    },

    retryLevel() {
        location.reload();
    }
  }
};
</script>

<style>
.back {
  height: 515px;
  width: 515px;
  background: #fff8dc;
  position: absolute;
  left: 515px;
  top: 145px;
  border-radius: 20px;
  visibility: visible;
}
.levelEndCover {
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

.levelEndCover h2 {
  font-family: "Emilys Candy", cursive;
  font-size: 50px;
  color: #ff00ff;
  text-align: center;
  margin-top: 30px;
  text-shadow: purple 1px 1px;
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

#level {
  position: relative;
  top: -45px;
  color: #fff8dc;
  text-align: center;
  font-family: "Emilys Candy", cursive;
  font-size: 50px;
  text-shadow: purple 1px 1px;
}

.lose {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
}

#brokenHeart {
  border: none;
  width: 100px;
  position: relative;
  top: 10px;
  background: transparent;
}

.loseLife {
  font-size: 30px !important;
  position: relative;
  left: 20px;
}

.exit {
  background: url("../assets/images/magenta_button.png") no-repeat center;
  background-size: cover;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff8dc;
  font-size: 33px;
  font-weight: 700;
  text-shadow: -1px 0 firebrick, 0 1px firebrick, 1px 0 firebrick, 0 -1px firebrick;
  position: absolute;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff8dc;
  font-size: 33px;
  font-weight: 700;
  text-shadow: -2px 0 firebrick, 0 2px firebrick, 2px 0 firebrick, 0 -2px firebrick;
  position: absolute;
  bottom: 50px;
}

.again:active {
  height: 68px;
  width: 148px;
}
</style>
