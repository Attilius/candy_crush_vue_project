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

<style></style>
