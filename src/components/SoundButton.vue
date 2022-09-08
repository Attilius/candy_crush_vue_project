<template>
  <div>
    <div class="sound" id="sound" @click="soundToggle">
      <i class="fa-solid fa-volume-high"></i>
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
export default {
    name: "SoundButton",
    
    methods: {
    soundToggle() {
      const soundButton = document.getElementById("sound");
      const play = '<i class="fa-solid fa-volume-high"></i>';
      const mute = '<i class="fa-solid fa-volume-xmark"></i>';
      const audio = document.getElementById("audio");
      if (soundButton.innerHTML === play) {
        soundButton.innerHTML = mute;
        audio.pause();
      } else {
        soundButton.innerHTML = play;
        audio.play();
      }
    },
  },
};
</script>

<style>
.sound {
  background: url("../assets/images/magenta_button.png") no-repeat center;
  background-size: cover;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff8dc;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 40px;
}</style>
