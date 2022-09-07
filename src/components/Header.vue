<template>
  <div class="header">
    <Life :life="life" :life_status="life_status" />
    <Star />
    <Coins />
    
    <div>
        <div class="sound" id="sound" @click="soundToggle">
            <i class="fa-solid fa-volume-high"></i></div>
        </div>
        <audio
      ref="audio"
      src="@/assets/sounds/Longloop.mp3"
      preload
      loop
      id="audio"
      autoplay
    ></audio>
  </div>
</template>

<script>
// @ is an alias to /src
import Life from "@/components/Life.vue";
import Star from "@/components/Stars.vue";
import Coins from "@/components/Coins.vue";

export default {
  name: "Header",
  props: ["life", "life_status"],
  components: {
    Life,
    Star,
    Coins,
  },

  methods: {
    soundToggle() {
        const soundButton = document.getElementById('sound');
        const play = '<i class="fa-solid fa-volume-high"></i>';
        const mute = '<i class="fa-solid fa-volume-xmark"></i>';
        const audio = document.getElementById('audio');
        if (soundButton.innerHTML === play) {
            soundButton.innerHTML = mute;
            audio.pause();
        } else {
            soundButton.innerHTML = play;
            audio.play();
        }
        
    }
  }
};
</script>

<style>
.header {
  width: 800px;
  height: 60px;
  background: url("../assets/images/header_background.jpg") no-repeat center
    fixed;
  z-index: 11;
  position: fixed;
  top: 35px;
  left: 25%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.sound {
    background: url("../assets/images/magenta_button.png") no-repeat center;
    background-size: cover;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #FFF8DC;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 40px;
}

.sound:active {
    height: 38px;
    width: 38px;
}

</style>
